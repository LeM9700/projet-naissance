// Projet de naissance — interactions minimales

document.addEventListener("DOMContentLoaded", () => {
  // Bouton impression / PDF
  const printButton = document.querySelector(".print-button");
  if (printButton) {
    printButton.addEventListener("click", () => window.print());
  }

  // Mise en avant du lien de sommaire correspondant à la section visible
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".toc a");

  if (sections.length && links.length && "IntersectionObserver" in window) {
    const linkFor = (id) =>
      document.querySelector(`.toc a[href="#${id}"]`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = linkFor(entry.target.id);
          if (!link) return;
          if (entry.isIntersecting) {
            links.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }
});
