// src/components/FarmersQuoteHero/FarmersQuoteHero.jsx

import React from "react";
import { farmersQuoteHeroModel } from "./farmersQuoteHeroModel";
import { createFarmersQuoteHeroController } from "./farmersQuoteHeroController";
import "./FarmersQuoteHero.css";

export function FarmersQuoteHero({ onCtaClick }) {
  const {
    title,
    priceBadge,
    description,
    imageOverlayText,
    ctaPrimary,
    ctaSecondary,
    theme,
    heroImageSrc,
    heroImageAlt
  } = farmersQuoteHeroModel;

  const controller = createFarmersQuoteHeroController({ onCtaClick });

  return (
    <section className="farmers-quote-hero" id="farmers-quote-hero">
      {/* Animated background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="hero-content">
        <div className="hero-price-badge">{priceBadge}</div>

        <h1 className="hero-title">{title}</h1>

        <p className="hero-subtitle">{description}</p>

        <div className="hero-cta">
          <a
            href={ctaPrimary.href}
            className="btn btn-primary"
            onClick={(e) =>
              controller.handleCtaClick(ctaPrimary.analyticsLabel, ctaPrimary.href, e)
            }
          >
            {ctaPrimary.text}
          </a>
          <a
            href={ctaSecondary.href}
            className="btn btn-outline"
            onClick={(e) =>
              controller.handleCtaClick(ctaSecondary.analyticsLabel, ctaSecondary.href, e)
            }
          >
            {ctaSecondary.text}
          </a>
        </div>
      </div>

      <div className="hero-image-wrap">
        <div className="hero-card">
          <img src={heroImageSrc} alt={heroImageAlt} />
          <div className="hero-overlay">
            <p>{imageOverlayText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}