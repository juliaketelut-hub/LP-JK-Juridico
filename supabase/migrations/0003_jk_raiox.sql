-- Raio-X das Petições (meudocjuridico.com.br/raio-x) — 19/08/2026
-- A Edge Function "raiox" é a única que escreve aqui (service role, ignora RLS).
-- Nenhuma policy: sem INSERT nem SELECT público — mais fechada que a jk_leads.
create table public.jk_raiox (
  id bigserial primary key,
  criado_em timestamptz default now(),
  nome text, whatsapp text, email text,
  -- respostas do quiz
  area text, producao text, identidade text,
  incomodos text[],
  peca_frequente text,
  volume text, momento text,
  -- o texto gerado pela Claude API
  raiox text,
  input_tokens int, output_tokens int,
  -- origem
  origem text, utm_source text, utm_medium text, utm_campaign text,
  user_agent text
);
alter table public.jk_raiox enable row level security;
