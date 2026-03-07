// =========================================
// PAGE TRANSITIONS – iOS STYLE
// =========================================

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page");

  // Interceptar links internos
  document.querySelectorAll("a[href]").forEach(link => {
    const href = link.getAttribute("href");

    if (!href || href.startsWith("http") || href.startsWith("#")) return;

    link.addEventListener("click", e => {
      e.preventDefault();
      document.body.classList.add("page-exit");

      setTimeout(() => {
        window.location.href = href;
      }, 420);
    });
  });
});