-- Leads do link na bio inteligente (/comecar) — 19/08/2026
-- Única dupla de tabelas jk_* com INSERT anônimo: a página pública grava,
-- mas ninguém lê sem a service key (o painel lê por ela).
--
-- O uid é gerado PELA PÁGINA (crypto.randomUUID) e liga os cliques ao lead.
-- Não dá para devolver o id do banco: return=representation exige policy de
-- SELECT, e esta tabela não tem nenhuma de propósito.

create table public.jk_leads (
  id bigserial primary key,
  uid text unique,
  criado_em timestamptz default now(),
  nome text, whatsapp text, email text,
  -- uma coluna por pergunta do quiz
  objetivo text, etapa text, aperto text, prazo text, preferencia text,
  -- resultado calculado
  recomendado text,
  alternativas text[],
  pontuacoes jsonb,
  -- origem
  origem text, utm_source text, utm_medium text, utm_campaign text,
  user_agent text
);

create table public.jk_leads_cliques (
  id bigserial primary key,
  criado_em timestamptz default now(),
  lead_uid text references public.jk_leads(uid) on delete cascade,
  destino text
);

alter table public.jk_leads enable row level security;
alter table public.jk_leads_cliques enable row level security;

-- A página pública só insere. Nenhuma policy de SELECT: leitura é
-- exclusiva da service key do painel, que ignora RLS.
create policy anon_insert on public.jk_leads
  for insert to anon, authenticated with check (true);
create policy anon_insert_clique on public.jk_leads_cliques
  for insert to anon, authenticated with check (true);
