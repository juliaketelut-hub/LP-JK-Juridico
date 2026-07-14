# JK Jurídico — Design System · Social (Instagram)

> **Fonte de import para o Claude Design.** Construa TODAS as artes de Instagram do JK Jurídico (feed, stories, carrosséis) usando exclusivamente os tokens, formatos e regras abaixo. Anexos deste pacote: `Logo-dourado-png.png` e `logo-escuro-png.png` (brasão JK em **PNG transparente, duas cores** — PNG e não SVG, para exportar fiel ao Canva). Fontes escolhidas para serem **fiéis no export para o Canva**.

---

## ⚙️ Construção à prova de export (LER PRIMEIRO)

Toda arte precisa **sobreviver ao export (Send to Canva / imagem) sem perder cor**. O que quebra o export é composição complexa (gradiente, foto de fundo com overlay, fundo aplicado na página em vez do slide, camadas React elaboradas). Para evitar, **construa cada slide de forma simples e plana**:

- **Fundo = um retângulo de cor sólida cobrindo o slide inteiro** (full-bleed), com o hex exato da paleta. **Nunca** depender do fundo da página/body.
- **Sem gradientes, sem overlays complexos, sem foto de fundo em slide de texto.** Fundo sólido + texto + formas simples.
- **Cada elemento com sua cor explícita** (fill direto), não herdada por estrutura/CSS complexo.
- **Prefira composição simples e chapada** a componentes elaborados — é o que exporta fiel para o Canva (os posts do Armazém, feitos assim, exportam limpos).
- Fotos da Julia (quando houver) entram como imagem colocada, não como técnica de fundo que impeça a leitura.

> Esta regra vale para **todos os slides**, escuros e claros. Fundo sólido = pode variar a paleta à vontade sem quebrar o export.

---

## 1 · Marca

- **Marca:** JK Jurídico — Julia Ketelut. Escrita e revisão acadêmica jurídica, **Visual Law**, formatação **ABNT**, artigos Qualis. Atendimento remoto para todo o Brasil.
- **Instagram:** @juliaketelut.juridico.
- **Personalidade:** **Acadêmica · Autoral · Moderna.** Julia é pesquisadora publicada em periódico Qualis indexado — não prestadora de serviço genérica. Voz precisa, sem jargão, com **autoridade discreta**, em **linguagem acessível mas sempre gramaticalmente correta** (sem gírias nem contrações como "tá"). Objetivo emocional: confiança técnica + calor humano.
- **Estética:** **editorial acadêmica de luxo** — hierarquia clara, muito respiro, h1 dominante.
- **Anti-referência (NÃO fazer):** template de agência, interface SaaS, glassmorphism, gradientes decorativos, freelancer jurídico genérico.

---

## 2 · Paleta (quente — "Editorial")

O JK trabalha em **dois modos** e o social deve **variar entre os dois** — **claro "Editorial Claro" (marfim)** e **escuro "Inkwell Quente"** — pro feed ter ritmo editorial. Os dois são canônicos. **Dica de export:** mantenha o fundo de cada slide como **cor sólida cheia** (sem gradiente nem foto complexa no fundo) — foi assim que os slides escuros do Armazém exportaram fiéis pro Canva. Se um carrossel escuro sair sem cor no export, **gere de novo** (a geração do Claude Design varia) ou exporte em **PDF**.

| Papel | Nome | Hex | Uso | Contraste |
|---|---|---|---|---|
| Fundo claro | Marfim | `#F7F3EC` | fundo claro de arte | — |
| Superfície clara | Areia | `#EDE8DE` | blocos/cards no claro | — |
| Fundo escuro | Inkwell Quente | `#1A1510` | fundo escuro — **variar com o claro**; usar cor sólida cheia | — |
| Superfície escura | Espresso | `#221C14` / `#2A2118` | blocos, faixas, nav | — |
| Texto claro | Au-lait | `#DCD7C9` | **todo texto sobre fundo escuro** | s/ inkwell ~12.6:1 · AAA |
| Texto escuro | Café | `#2A2118` | texto sobre marfim/areia | s/ marfim ~13:1 · AAA |
| Acento (escuro) | Creme dourado | `#A27B5B` | labels/eyebrow, títulos, molduras, aspas — **sobre fundo ESCURO** | s/ inkwell ~4.8:1 · s/ marfim só 3.4:1 (display grande apenas) |
| Acento (claro) | Bronze | `#7A563A` | **eyebrow/label/texto pequeno dourado sobre fundo CLARO** | s/ marfim ~5.9:1 · s/ areia ~5.4:1 · AA |
| CTA sagrado | Verde | `#27AE60` | **só CTA de conversão — usar pouquíssimo** | usar com texto Café por cima (~5.5:1) |
| Pain point (escuro) | Vermelho | `#E74C3C` | dores/erros sobre fundo escuro — pontual | s/ inkwell ~4.7:1 |
| Pain point (claro) | Vermelho escuro | `#C0392B` | dores/erros sobre fundo claro — pontual, em destaque grande | s/ marfim ~4.9:1 |

**Regras de cor obrigatórias:**
- **O verde é sagrado.** É o único elemento quente saturado — use **só no CTA principal** (chamar no WhatsApp/DM), no máximo 1 por carrossel. Tudo ao redor recua. Verde fora de CTA = proibido.
- **Creme dourado `#A27B5B` nunca em texto pequeno — e sobre fundo claro, nunca em texto nenhum** (dá só 3.4:1 no marfim; sobre claro só como display grande ≥56px, moldura ou aspa decorativa). Sobre escuro: título, label, moldura, aspa, massa. **Texto pequeno dourado sobre fundo claro = Bronze `#7A563A`** (eyebrow, label, assinatura).
- Corpo de texto é sempre binário: fundo escuro → **au-lait** `#DCD7C9` · fundo claro (marfim/areia) → **café** `#2A2118` · fundo creme → **Inkwell** `#1A1510`. **Nunca** au-lait como cor de fundo. **Nunca** texto escuro sobre escuro.
- **Varie os fundos entre os slides (não fique só em 2).** Rotacione entre **Marfim `#F7F3EC`**, **Areia `#EDE8DE`** (claro alternativo), **Inkwell Quente `#1A1510`**, **Espresso `#2A2118`** (escuro alternativo) e, **pontualmente, Creme dourado `#A27B5B`** como fundo de um slide de destaque/citação. Como numa revista: alternar dá ritmo ao carrossel e ao feed.

### 2.1 · Combinação por fundo (harmonia + variação — OBRIGATÓRIA)

Para cada fundo, use **exatamente** estas cores de texto. A variação do carrossel vive no **fundo, no título e nos detalhes** — o **corpo nunca varia** dentro do mesmo fundo (é o que garante leitura no celular).

| Fundo | Título (Playfair) | Corpo (Montserrat) | Eyebrow/label | Detalhes & pain |
|---|---|---|---|---|
| **Marfim** `#F7F3EC` | Café `#2A2118` · ou Creme `#A27B5B` **só em display ≥56px** | Café `#2A2118` | **Bronze `#7A563A`** | moldura/aspa creme · pain **Vermelho escuro `#C0392B`** |
| **Areia** `#EDE8DE` | idem Marfim | Café `#2A2118` | Bronze `#7A563A` | idem Marfim |
| **Inkwell** `#1A1510` | Au-lait `#DCD7C9` · ou Creme `#A27B5B` | Au-lait `#DCD7C9` | Creme `#A27B5B` | pain **Vermelho `#E74C3C`** |
| **Espresso** `#2A2118` | idem Inkwell | Au-lait `#DCD7C9` | Creme `#A27B5B` | idem Inkwell |
| **Creme** `#A27B5B` *(1 slide de destaque/citação por carrossel, no máximo)* | Inkwell `#1A1510` (café `#2A2118` só em display grande) | Inkwell `#1A1510` | Inkwell `#1A1510` | **sem verde e sem vermelho neste fundo** · brasão versão escura |

**Regras de harmonia:**
- Num carrossel, **troque o fundo a cada 1–2 slides** e alterne a cor do título junto (creme no escuro, café no claro) — ritmo editorial de revista.
- **Máximo por slide: 1 fundo + 2 cores de texto + 1 accent.** Mais que isso = ruído; menos contraste entre elas = mistura.
- Capa e CTA podem espelhar (ex.: capa escura, CTA escuro) para "fechar" o carrossel; o miolo varia.

---

## 3 · Tokens de cor

```
--bg-claro     #F7F3EC   fundo claro (marfim)
--surface-claro#EDE8DE   superfície clara (areia)
--bg-escuro    #1A1510   fundo escuro (Inkwell Quente) — variar com o claro
--surface-esc  #221C14   superfície escura
--nav          #2A2118   faixas/nav/blocos escuros
--text-esc     #2A2118   texto sobre claro (café)
--text-claro   #DCD7C9   texto sobre escuro (au-lait)
--creme        #A27B5B   accent dourado — label/título/moldura SOBRE ESCURO (nunca texto pequeno; sobre claro só display grande)
--bronze       #7A563A   accent dourado p/ TEXTO PEQUENO sobre fundo claro (eyebrow/label/assinatura)
--verde        #27AE60   CTA SAGRADO — só conversão, pouquíssimo
--vermelho     #E74C3C   pain point sobre fundo escuro (pontual)
--vermelho-esc #C0392B   pain point sobre fundo claro (pontual, destaque grande)
```

---

## 4 · Tipografia

- **Playfair Display** → **display / títulos** (hook, h1, h2, aspas decorativas, números). Serifa editorial de luxo — protagonista, pode ser grande. Pesos 400/600/700.
- **Montserrat** → corpo, labels/eyebrow (caixa alta com letter-spacing), legendas, botões, marca no rodapé. Pesos 300–700.
- Fallbacks: Georgia (serif) · system-ui, Arial (sans).
- **Compatível com o Canva ✓** (as duas existem na biblioteca — export fiel, sem fallback).

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Hierarquia no post: título Playfair grande = protagonista (h1 dominante) · corpo em Montserrat · label/eyebrow em Montserrat caixa alta `letter-spacing .18em` — cor **creme `#A27B5B` sobre fundo escuro** e **bronze `#7A563A` sobre fundo claro** (ver seção 2.1).

### 4.1 · Escala tipográfica em px (OBRIGATÓRIA — arte de 1080px de largura)

> **Ler antes de gerar.** "Editorial de luxo · muito respiro · enxuto" define **quanto texto** cabe no slide — **nunca** o tamanho da fonte. Respiro se cria com **menos palavras e mais margem**, jamais encolhendo a letra. Toda arte é vista no **celular**: o texto tem que ser legível a um braço de distância. **Cortar texto, não a fonte.** Estes valores são para 1080×1350 e 1080×1920 (mesma largura de 1080px):

| Elemento | Fonte | Tamanho (px @1080) | Peso |
|---|---|---|---|
| Número/estatística de destaque | Playfair | **150–220** | 600/700 |
| Hook da capa (H1 protagonista) | Playfair | **92–130** | 600/700 |
| Título de slide interno (H2) | Playfair | **56–74** | 600 |
| Subtítulo / lead | Playfair ou Montserrat | **40–48** | 400/500 |
| **Corpo de texto** | Montserrat | **32–40** | 400 |
| Legenda / nota de rodapé | Montserrat | **28–30** | 400 |
| Botão / rótulo de CTA | Montserrat | **34–40** | 600 |
| Eyebrow / label (caixa alta) | Montserrat | **24–28** (`letter-spacing .18em`) | 600 |
| Assinatura @juliaketelut.juridico | Montserrat | **26–30** | 500 |

- **Piso absoluto: nenhum texto lido abaixo de 28px.** Eyebrow/label em caixa alta, mínimo 24px. Se não couber nesses tamanhos, **remova palavras ou divida em outro slide** — não diminua a fonte.
- **"Cortar texto" = escrever menos palavras, JAMAIS partir palavra.** **Proibido hifenizar ou quebrar palavra no fim da linha** (nada de `impor-\ntante`, `aca-\ndêmico`, nem "-" para dividir palavra). Toda palavra fica **inteira**: aplicar `hyphens: none` e `word-break: normal`/`overflow-wrap: normal` (nunca `break-word`/`break-all`). Se uma palavra não cabe na largura, **reescreva com menos texto ou passe para o próximo slide** — nunca corte a palavra nem encolha a fonte.
- Um slide interno bem-resolvido tem **título grande + 1 bloco de corpo curto**, não um parágrafo espremido. Se o corpo passa de ~40 palavras, quebre em dois slides.

---

## 5 · Logo & assinatura

- **Brasão (`Logo-dourado-png.png` e `logo-escuro-png.png` — PNG transparente, NÃO SVG):** o brasão do JK — **escudo (justiça) + ramo de louro (mérito acadêmico) + "JK" em serifa**, fundo transparente. Une Direito + escrita acadêmica. **Use sempre o PNG** (o SVG não sobrevive ao export para o Canva; o PNG sim). Duas versões de cor, sempre a que **contrasta com o fundo do slide**:
  - **`Logo-dourado-png.png`** (dourado `#A27B5B`) → sobre **fundos escuros** (Inkwell Quente, Espresso).
  - **`logo-escuro-png.png`** (café `#2A2118`) → sobre **fundos claros** (Marfim, Areia).
- **Nunca substituir o brasão por texto puro.** Usar como **assinatura fixa** no canto, com **altura bem visível (~70–90px numa arte de 1080px) — NUNCA minúsculo**. Pode vir junto de "@juliaketelut.juridico" em Montserrat, quando fizer sentido.
- O brasão completo pode aparecer maior/centralizado em capas ou posts institucionais (foto de perfil, "sobre").
- **Foto da Julia** (`julia.png` — blazer branco): é o principal ativo de confiança. Nos carrosséis editoriais, entra **integrada ao design** (capa e slides internos), não só como foto solta. Julia anexa a foto no briefing.

---

## 6 · Formatos & grade

- **Feed (padrão):** **1080 × 1350px** (retrato 4:5).
- **Stories / capa de Reels:** **1080 × 1920px**.
- **Área de segurança:** margem interna de ~64–80px; **nada essencial nos 250px inferiores** do feed.
- **Estética do grid:** muito respiro, poucos elementos por viewport, **h1 dominante**. **Varia entre fundo claro (marfim) e escuro (Inkwell Quente)** num ritmo editorial. Nunca poluído, nunca template de agência. Use **fundos sólidos cheios** (garante o export fiel pro Canva).

---

## 7 · Arquétipos de post (por público)

Os **5 públicos-alvo** definem tom, gancho e CTA:

| Público | Dor | Tom | Conteúdo típico |
|---|---|---|---|
| **Aluno Sobrecarregado** *(principal)* | prazo curto, não sabe ABNT | urgente, reassegurador, direto | checklist TCC, "prazo apertado", antes/depois |
| **Acadêmico Estratégico** | quer publicar Qualis, metodologia | técnico, confiante, fundamentado | como estruturar artigo, dado/pesquisa |
| **Advogado Prático** | peças sem impacto | resultado, diferenciação | Visual Law, antes/depois de peça |
| **Concurseiro Profissional** | organização, eficiência | objetivo, prático | material organizado, checklist de estudo |
| **Comprador Digital** | solução rápida e barata | leveza, urgência, FOMO leve | modelo/produto pronto, quote |

**Formatos de post:** carrossel educativo/editorial · checklist (alto save) · quote-card (autoral) · dado/estatística · antes-depois (Visual Law) · linha do tempo (processo).

**Cor por conteúdo:** provocação/dor → escuro + vermelho pontual · educativo/autoridade → escuro au-lait ou claro marfim · citação autoral → creme/aspas · CTA → bloco com **verde sagrado** (1 por carrossel).

---

## 8 · Estrutura de carrossel (editorial, ~7 slides)

- **Capa (slide 1):** hook em **Playfair grande** (tipografia protagonista, ocupa boa parte do slide) + eyebrow do nicho + "arrasta →". **Fundo sólido** (claro ou escuro — qualquer um da seção 2.1). Se usar foto da Julia, coloque-a como **elemento** ao lado/abaixo do texto — **nunca como fundo de página com overlay** (isso quebra o export).
  - **⚠️ Alterne o tom da capa ENTRE posts.** A capa é o que aparece no grid do perfil: se todas saírem escuras, o feed vira um bloco só de café. Num lote de pautas, **posts consecutivos não repetem o tom de capa** — alternar capa escura (Inkwell/Espresso) ↔ capa clara (Marfim/Areia). A variação interna do carrossel não substitui essa alternância: no grid, só a capa aparece.
- **Desenvolvimento (2 a N):** um ponto por slide, título Playfair + corpo Montserrat enxuto, muito respiro. Alternar fundos escuro/claro. Fotos da Julia integradas em alguns slides.
- **Fechamento (CTA):** título de ação em Playfair + botão/bloco com o **verde sagrado** — WhatsApp (44) 99165-2729 / DM. Assinatura com monograma. Fundo claro ou escuro sólido — **nunca creme dourado** (verde sobre creme dá ~1.3:1: o botão some no fundo).
- Manter ritmo visual e a paleta constantes para coesão editorial.

---

## 9 · Tom, registro & CTA

- **Tom:** preciso, com autoridade discreta e calor humano. Educa → gera confiança → converte. Sem juridiquês, sem "vender desesperado".
- **Registro (regra da marca):** **acessível, mas sempre gramaticalmente correto.** Verbos conjugados, português correto — **nada de contrações coloquiais** ("tá", "cê", "pra" na arte). Escrever "está", "para", "você". Frases curtas, simples e diretas, sem ser informal demais: *a marca fala fácil, mas fala certo.*
  - Ex.: ~~"Seu TCC tá uma bagunça"~~ → **"Seu TCC está sem forma."** · ~~"O texto tá pela metade"~~ → **"O texto está pela metade."** · ~~"Você não tá sozinho"~~ → **"Você não está sozinho."**
- **CTA:** direto e no imperativo correto — **"Chame no WhatsApp"**, **"Envie uma DM"**, **"Garanta seu modelo"** (não "chama"/"manda"/"pega"). Verde só aqui.
- **Contatos:** WhatsApp (44) 99165-2729 · @juliaketelut.juridico · juliaketelut.juridico@gmail.com.

---

## 10 · Referências externas — inspirar, NUNCA copiar

O briefing pode vir com **posts de outros perfis anexados como referência**. Referência é bem-vinda — cópia é proibida (é plágio e dilui a marca). Regras:

- **Da referência, aproveite só o ESQUELETO:** tipo de composição, ritmo do carrossel, hierarquia da informação, ângulo da ideia ("como esse post organiza um checklist", "como esse carrossel abre com pergunta").
- **A arte final é 100% reconstruída com os tokens desta página:** paleta JK, Playfair + Montserrat, brasão, voz JK. Nenhum elemento visual da referência migra.
- **PROIBIDO transportar da referência:** cores, fontes, ícones/ilustrações, mascotes, texturas, stickers, elementos gráficos característicos, e **texto literal ou quase literal**.
- **Mude a composição o suficiente** (ordem dos blocos, proporções, alinhamento, enquadramento) para que ninguém coloque a referência ao lado e reconheça uma cópia. Se a referência tem uma assinatura visual forte (rabisco, colagem, carimbo), **não reproduza — traduza a função** para a linguagem JK (ex.: o destaque que lá era um rabisco amarelo aqui vira aspa creme ou moldura fina dourada).
- **Teste final:** a arte deve parecer um post que sempre existiu no feed do @juliaketelut.juridico — não uma versão recolorida do post alheio.

---

## Do's & Don'ts

✔ Playfair protagonista + h1 dominante · muito respiro · paleta quente · au-lait no corpo sobre escuro · creme só em título/label/moldura sobre escuro · **bronze `#7A563A` para texto pequeno dourado sobre claro** · fundos variando entre os 5 (seção 2.1) · verde só no CTA · monograma como assinatura · **referência externa usada só como esqueleto, arte 100% nos tokens JK**.
✘ Template de agência/SaaS · glassmorphism · gradiente decorativo · `background-clip:text` · verde fora do CTA · creme em texto pequeno · **creme `#A27B5B` como cor de texto sobre fundo claro (usar bronze)** · au-lait como fundo · monograma trocado por texto · slide poluído · fonte abaixo de 28px · **palavra hifenizada/partida no fim da linha ("impor-tante", "-")** · **gírias e contrações coloquiais ("tá", "cê", "pra")** · **copiar cores/fontes/ícones/texto de post de referência (referência = estrutura, nunca estética)**.

---

## Referência rápida

```
FORMATO  feed 1080×1350 · stories 1080×1920 · segurança 64–80px, base inferior 250px livre
FUNDOS   rotacionar 5: Marfim #F7F3EC · Areia #EDE8DE · Inkwell Quente #1A1510 · Espresso #2A2118 · Creme #A27B5B (1 slide destaque, máx.)
LETRAS   sobre escuro: corpo Au-lait #DCD7C9, eyebrow/accent Creme #A27B5B, pain #E74C3C · sobre claro: corpo Café #2A2118, eyebrow/accent Bronze #7A563A, pain #C0392B · sobre creme: tudo Inkwell #1A1510 · Verde #27AE60 = CTA SAGRADO (texto café por cima)
FONTES   Playfair Display (display/títulos) · Montserrat (corpo/UI/labels)  — ambas no Canva ✓
TAMANHOS @1080px: hook 92–130 · H2 56–74 · corpo 32–40 · legenda 28–30 · CTA 34–40 · eyebrow 24–28 · PISO 28 (nada lido abaixo) — respiro = menos texto, nunca fonte menor · palavra SEMPRE inteira (hyphens:none, proibido hifenizar/partir palavra)
LOGO     brasão em PNG (Logo-dourado-png.png escuro↔claro / logo-escuro-png.png) — PNG e NÃO SVG (SVG não exporta pro Canva)
REGRA    editorial de luxo · h1 dominante · varia fundo claro↔escuro (cor sólida cheia p/ export fiel) · capas ALTERNAM claro↔escuro entre posts (grid do feed) · CTA nunca sobre fundo creme · verde só no CTA · monograma nunca vira texto · combinações da seção 2.1
REFS     post de referência anexado = só esqueleto/estrutura — reconstruir 100% nos tokens JK, nunca copiar cores/fontes/texto (seção 10)
PÚBLICOS Aluno Sobrecarregado · Acadêmico Estratégico · Advogado Prático · Concurseiro · Comprador Digital
```
