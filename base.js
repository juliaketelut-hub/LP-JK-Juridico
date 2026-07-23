/* ═══════════════════════════════════════════════════════════════
   JK Jurídico — movimento das páginas de venda
   Usado por academico.html, visual-law.html e mentoria.html.
   O CSS do movimento fica em base.css (bloco "MOVIMENTO"), ativado
   por html.anim. Aqui só disparamos o reveal e o estado do nav.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var revealSel =
    '.diag, .escopo-box, .quem-grid, .faq-list, .risco-intro, .risco-fecho, .franqueza,' +
    '.dores-grid, .entrega-grid, .tabelas, .escopo-grid, .antes-depois, .pkgs, .passos, .multas,' +
    '.section-divider';

  var els = document.querySelectorAll(revealSel);

  // Sobe cada bloco/divisor quando ele entra na tela.
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('vis');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    for (var i = 0; i < els.length; i++) { io.observe(els[i]); }
  } else {
    // Navegador sem suporte: mostra tudo, sem esconder nada.
    for (var j = 0; j < els.length; j++) { els[j].classList.add('vis'); }
  }

  // Nav condensa e ganha sombra depois do primeiro scroll.
  var nav = document.querySelector('nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();
