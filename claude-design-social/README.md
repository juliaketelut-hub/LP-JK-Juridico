# JK Jurídico · Pacote Claude Design — Social (Instagram)

Design system pronto para importar no **Claude Design** e gerar artes de Instagram do JK Jurídico (feed, stories, carrosséis).

## Conteúdo
- `design-system.md` — tokens, tipografia (**com escala em px obrigatória**), **combinações de cor por fundo (seção 2.1)**, formatos, arquétipos por público, estrutura de carrossel, tom, **regra de referências externas (seção 10 — inspirar, nunca copiar)** e demais regras.
- `Logo-dourado-png.png` + `logo-escuro-png.png` — brasão JK (escudo + louro + "JK"), duas cores, **PNG transparente** (não SVG — PNG exporta fiel pro Canva).

## Como importar
1. No Claude Design, crie um projeto e escolha **importar design system → upload**.
2. Suba os arquivos desta pasta (`design-system.md`, `Logo-dourado-png.png`, `logo-escuro-png.png`).
3. Cole a **observação** abaixo no campo "alguma outra observação".
4. Confirme a leitura da paleta, tipografia (**inclusive a escala de px da seção 4.1**) e formatos antes de pedir a primeira arte.
5. **Export das artes:** sempre **Send to → Canva** (Playfair Display e Montserrat existem no Canva). No Canva, suba os **dois PNGs do brasão** uma vez nos Uploads (dourado para fundo escuro, escuro para fundo claro) — use **PNG e não SVG**, pois o SVG não sobrevive ao export.

## Observação para colar no import
> Marca de escrita e revisão acadêmica jurídica (Julia Ketelut) — **acadêmica, autoral e moderna**, estética de **editorial de luxo**, nunca template de agência nem SaaS. Título em **Playfair Display** (protagonista, h1 dominante); corpo/labels em **Montserrat**. Paleta **quente** com **fundos variados** — rotacionar entre 5 fundos sólidos: marfim `#F7F3EC`, areia `#EDE8DE`, Inkwell Quente `#1A1510`, espresso `#2A2118` e, pontualmente, creme `#A27B5B` (1 slide de destaque). Letras seguem a **tabela de combinação por fundo (seção 2.1)**: sobre escuro corpo au-lait `#DCD7C9` e eyebrow/accent creme `#A27B5B`; sobre claro corpo café `#2A2118` e eyebrow/accent **bronze `#7A563A`** (creme `#A27B5B` NUNCA como texto sobre fundo claro — contraste insuficiente); sobre creme, tudo Inkwell `#1A1510`. **Verde `#27AE60` é "sagrado" — só no CTA de conversão, no máximo 1 por carrossel.** Pain point: vermelho `#E74C3C` no escuro, vermelho escuro `#C0392B` no claro. Muito respiro — mas **respiro é menos texto, nunca fonte menor**: siga a escala em px da seção 4.1 (corpo 32–40px, hook 92–130px, piso de 28px; todo texto legível no celular). Brasão JK (escudo + louro + "JK") em **PNG** como assinatura fixa, com tamanho visível — versão dourada em fundo escuro, escura em fundo claro (nunca trocar por texto). **Posts de referência anexados são só inspiração de estrutura: reconstruir 100% com os tokens JK, nunca copiar cores, fontes, ícones ou texto da referência (seção 10).** Proibido: glassmorphism, gradiente decorativo, template de agência. Formatos: feed 1080×1350 e stories 1080×1920.

## Fontes (compatíveis com Canva)
- **Playfair Display** ✓ + **Montserrat** ✓ — verificadas no Canva (jul/2026), export fiel.
- O canônico do site usa **Spectral** (não está no Canva); no social usamos **Playfair Display** para inovar e manter o export íntegro.

## Observação
Construído a partir do `DESIGN.md` canônico do repo `LP-JK-Juridico` (paleta quente atual), **não** das skills antigas (que usavam a paleta Inkwell fria e fontes Aboreto/Gotu/Figtree, ambas descartadas).
