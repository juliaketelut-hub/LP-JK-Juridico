// Raio-X das Petições — Edge Function
// A ponte segura: recebe as respostas do quiz, chama a Claude API (a chave
// mora no cofre do Supabase, nunca na página) e salva o lead + o texto gerado.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const ORIGENS_PERMITIDAS = [
  "https://meudocjuridico.com.br",
  "https://www.meudocjuridico.com.br",
  "https://meudocjuridico.pages.dev",
  "http://localhost:8080",
  "http://127.0.0.1:8080",
];

function corsHeaders(req: Request) {
  const origem = req.headers.get("Origin") ?? "";
  return {
    "Access-Control-Allow-Origin": ORIGENS_PERMITIDAS.includes(origem) ? origem : ORIGENS_PERMITIDAS[0],
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}

// ===== A alma do Raio-X: a voz da Julia + regras de especificidade =====
const SYSTEM_PROMPT = `Você é Julia Ketelut, especialista em Visual Law e escrita jurídica, pesquisadora publicada em periódico Qualis. Você está escrevendo um RAIO-X PERSONALIZADO das petições de um advogado ou advogada que acabou de responder um quiz no seu site.

REGRAS DE IDIOMA: 100% português brasileiro. Zero caracteres não latinos.

REGRAS DE VOZ (inegociáveis):
- Acessível mas gramaticalmente correta. Nunca use "tá", "pra", "né" ou gírias.
- Tom: acolhedor e técnico ao mesmo tempo. Autoridade discreta, sem arrogância.
- Trate a pessoa por "você". Escreva capitalização normal (nunca tudo minúsculo).
- Frases curtas. Máximo um travessão por parágrafo. Nada de "não é X, é Y".

ESTRUTURA OBRIGATÓRIA (nesta ordem, exatamente com estes headers — comece DIRETO no primeiro header, sem título, saudação ou preâmbulo antes dele):
## Onde suas peças estão hoje
## O que o juiz vê (e o que ele pula)
## Comece por estes 3 passos
## O erro mais comum na sua área
## Sua próxima ação nesta semana

REGRAS DE ESPECIFICIDADE (inegociáveis):
- Cite LITERALMENTE a peça que a pessoa descreveu no campo livre, mais de uma vez.
- Na seção dos 3 passos: itens numerados, e pelo menos um passo traz um elemento visual CONCRETO aplicado àquela peça específica (ex: linha do tempo dos fatos, quadro-resumo do pedido, ícones nos tópicos preliminares).
- Adapte tudo à área de atuação informada. Teste: se eu trocar a área da pessoa por outra, as frases precisam ficar erradas.
- Use números quando fizer sentido ("um juiz lê a inicial em 3 a 5 minutos").
- A seção do erro comum fala do erro típico DA ÁREA da pessoa, com nome próprio (ex: na trabalhista, a inicial-formulário com 40 pedidos idênticos).
- Se a pessoa disse que não tem identidade visual definida, o passo 1 é definir tipografia e paleta (2 fontes, 2 cores) ANTES de mexer nas peças.
- Se a pessoa quer aplicar sozinha, o texto ensina de verdade. Se quer acompanhamento, a última seção menciona a Mentoria de Visual Law da Julia (meudocjuridico.com.br/mentoria) com naturalidade, sem pressão.

REGRAS DE CONTEÚDO:
- Fale de FORMA e ESTRUTURA das peças (hierarquia visual, legibilidade, elementos gráficos). Nunca opine sobre o mérito jurídico de casos.
- Só recomende o que é aceito na prática forense brasileira: PDF, elementos visuais sóbrios, tipografia legível. Nada de cores berrantes ou informalidade.

REGRAS DE TAMANHO: 500 a 800 palavras no total.`;

const ROTULOS: Record<string, Record<string, string>> = {
  area: {
    civel: "Cível", familia: "Família e Sucessões", trabalhista: "Trabalhista",
    previdenciario: "Previdenciário", criminal: "Criminal", empresarial: "Empresarial/Tributário",
    consumidor: "Consumidor", outra: "Outra área",
  },
  producao: {
    word_puro: "escreve no Word puro, sem modelo definido",
    template_escritorio: "usa um template do escritório",
    ja_tentei: "já tentou aplicar Visual Law por conta própria",
  },
  identidade: {
    tenho_uso: "já tem identidade visual definida e usa nas peças",
    tenho_nao_aplico: "tem identidade da marca ou escritório, mas não aplica nas peças",
    nao_tenho: "não tem tipografia nem paleta de cores definidas",
  },
  incomodos: {
    juiz_nao_le: "sente que o juiz não lê as peças",
    iguais_colegas: "as peças parecem iguais às de todos os colegas",
    longas: "as peças ficam longas demais",
    cliente_nao_entende: "o cliente não entende o que está escrito",
    nao_sei_comecar: "não sabe por onde começar com Visual Law",
  },
  volume: { ate_5: "até 5 peças por semana", de_5_a_15: "de 5 a 15 peças por semana", mais_15: "mais de 15 peças por semana" },
  momento: {
    sozinho: "quer aprender a aplicar por conta própria",
    acompanhamento: "quer acompanhamento para implementar",
    explorando: "está só explorando o tema por enquanto",
  },
};

function construirMensagem(p: Record<string, unknown>): string {
  const incomodos = Array.isArray(p.incomodos)
    ? p.incomodos.map((i) => ROTULOS.incomodos[String(i)] ?? String(i)).join("; ")
    : "não informado";
  return `Respostas do quiz de ${p.nome ?? "advogado(a)"}:
- Área principal de atuação: ${ROTULOS.area[String(p.area)] ?? p.area}
- Como as peças nascem hoje: ${ROTULOS.producao[String(p.producao)] ?? p.producao}
- Identidade visual: ${ROTULOS.identidade[String(p.identidade)] ?? p.identidade}
- O que mais incomoda: ${incomodos}
- Peça que mais faz no dia a dia (palavras da própria pessoa): "${String(p.peca_frequente ?? "").slice(0, 500)}"
- Volume: ${ROTULOS.volume[String(p.volume)] ?? p.volume}
- Momento: ${ROTULOS.momento[String(p.momento)] ?? p.momento}

Escreva o Raio-X personalizado seguindo exatamente a estrutura e as regras do sistema.`;
}

Deno.serve(async (req) => {
  const cors = corsHeaders(req);
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "método não permitido" }), {
      status: 405, headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  try {
    const payload = await req.json();
    if (!payload?.peca_frequente || !payload?.area || !payload?.email) {
      return new Response(JSON.stringify({ error: "respostas incompletas" }), {
        status: 400, headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "chave da API não configurada" }), {
        status: 500, headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const claudeRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-sonnet-5",
        max_tokens: 4000,
        output_config: { effort: "low" },
        // O system é igual para todo mundo: o cache barateia a partir da 2ª pessoa.
        system: [{ type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } }],
        messages: [{ role: "user", content: construirMensagem(payload) }],
      }),
    });

    const claudeData = await claudeRes.json();
    if (!claudeRes.ok) {
      console.error("Claude API:", JSON.stringify(claudeData).slice(0, 500));
      return new Response(JSON.stringify({ error: "falha ao gerar o raio-x" }), {
        status: 502, headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const raiox = (claudeData.content ?? []).find((c: { type: string }) => c.type === "text")?.text ?? "";
    if (!raiox) {
      return new Response(JSON.stringify({ error: "resposta vazia" }), {
        status: 502, headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    // Salva o lead + o texto. Falha aqui não derruba a resposta para a pessoa.
    try {
      const supabase = createClient(
        Deno.env.get("SUPABASE_URL")!,
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
      );
      await supabase.from("jk_raiox").insert({
        nome: payload.nome, whatsapp: payload.whatsapp, email: payload.email,
        area: payload.area, producao: payload.producao, identidade: payload.identidade,
        incomodos: payload.incomodos, peca_frequente: payload.peca_frequente,
        volume: payload.volume, momento: payload.momento,
        raiox,
        input_tokens: claudeData.usage?.input_tokens,
        output_tokens: claudeData.usage?.output_tokens,
        origem: payload.origem, utm_source: payload.utm_source,
        utm_medium: payload.utm_medium, utm_campaign: payload.utm_campaign,
        user_agent: payload.user_agent,
      });
    } catch (e) {
      console.error("Lead não salvo:", e);
    }

    return new Response(JSON.stringify({ raiox, nome: payload.nome }), {
      headers: { ...cors, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500, headers: { ...cors, "Content-Type": "application/json" },
    });
  }
});
