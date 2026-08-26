export const homeController = {
  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `/#${sectionId}`);
  },

  handleHeroServices() {
    this.scrollToSection("services");
  },

  handleHeroContact() {
    this.scrollToSection("contact");
  },

  handleServiceClick() {
    this.scrollToSection("contact");
  },
};