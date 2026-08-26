export const navigationController = {
  toggleMenu() {
    const menu = document.querySelector(".main-nav-links");
    const button = document.querySelector(".mobile-menu");

    if (!menu) {
      return;
    }

    const isOpen = menu.classList.toggle("show");

    button?.setAttribute("aria-expanded", String(isOpen));
  },

  closeMenu() {
    const menu = document.querySelector(".main-nav-links");
    const button = document.querySelector(".mobile-menu");

    menu?.classList.remove("show");
    button?.setAttribute("aria-expanded", "false");
  },

  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    this.closeMenu();
  },
};