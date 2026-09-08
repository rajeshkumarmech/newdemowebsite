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
    heroImages
  } = farmersQuoteHeroModel;

  const controller = createFarmersQuoteHeroController({ onCtaClick });

  return (
    <section className="farmers-quote-hero" id="farmers-quote-hero">
      {/* Animated background elements */}
      <div className="hero-bg-gradient" />
      <div className="hero-particles">
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
      </div>
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="hero-container">
        {/* Left: Content */}
        <div className="hero-content">
          {priceBadge && (
            <div className="hero-badge-wrapper">
              <span className="hero-price-badge">
                <span className="badge-shine"></span>
                {priceBadge}
              </span>
            </div>
          )}

          <h1 className="hero-title">
            <span className="title-glow">{title}</span>
          </h1>
          <p className="hero-subtitle">{description}</p>

          <div className="hero-cta">
            <a
              href={ctaPrimary.href}
              className="btn btn-primary"
              onClick={(e) =>
                controller.handleCtaClick(ctaPrimary.analyticsLabel, ctaPrimary.href, e)
              }
            >
              <span className="btn-text">{ctaPrimary.text}</span>
              <span className="btn-shine"></span>
            </a>
            <a
              href={ctaSecondary.href}
              className="btn btn-outline"
              onClick={(e) =>
                controller.handleCtaClick(ctaSecondary.analyticsLabel, ctaSecondary.href, e)
              }
            >
              <span className="btn-text">{ctaSecondary.text}</span>
            </a>
          </div>

          <p className="hero-caption">
            Enhancing Agency Efficiency Through Specialized Quote Preparation Support.
          </p>
        </div>

        {/* Right: Image Grid */}
        <div className="hero-visual">
          <div className="hero-cards-grid">
            {heroImages.map((img, idx) => (
              <div
                className="hero-card"
                key={idx}
                style={{ animationDelay: `${idx * 0.25}s` }}
              >
                <div className="card-glow"></div>
                <img src={img.src} alt={img.alt} loading="lazy" />
                {idx === 0 && imageOverlayText && (
                  <div className="hero-overlay">
                    <p>{imageOverlayText}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}