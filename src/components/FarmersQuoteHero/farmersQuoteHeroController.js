// src/components/FarmersQuoteHero/farmersQuoteHeroController.js

export function createFarmersQuoteHeroController({ onCtaClick }) {
  return {
    handleCtaClick(label, href, event) {
      event.preventDefault();

      if (onCtaClick && typeof onCtaClick === "function") {
        onCtaClick({ label, href });
      } else {
        console.log("CTA clicked:", label, href);
      }

      if (href.startsWith("#")) {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.location.href = href;
      }
    }
  };
}