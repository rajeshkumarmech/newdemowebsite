import { Link } from "react-router-dom";
import { testimonialsData } from "../model/testimonialsModel";
import "../styles/testimonials.css";

function TestimonialsHero() {
  const { hero } = testimonialsData;

  return (
    <section className="testimonials-hero">
      <div className="testimonials-hero-circle hero-circle-large" />
      <div className="testimonials-hero-circle hero-circle-small" />

      <div className="container testimonials-hero-grid">
        <div className="testimonials-hero-content">
          <span className="section-label testimonials-light-label">
            {hero.eyebrow}
          </span>

          <h1>{hero.title}</h1>

          <p>{hero.description}</p>

          <div className="testimonials-hero-actions">
            <Link to="/#contact" className="btn btn-light">
              Get in Touch Today <span>→</span>
            </Link>

            <a href="#client-stories" className="testimonials-text-link">
              Read client stories <span>↓</span>
            </a>
          </div>
        </div>

        <div className="featured-testimonial-card">
          <div className="featured-quote-mark">“</div>

          <div className="testimonial-stars">
            {"★".repeat(5)}
          </div>

          <blockquote>
            “A true extension of our team — accurate, responsive, and
            committed to helping us grow.”
          </blockquote>

          <div className="featured-author">
            <div className="testimonial-avatar featured-avatar">
              TR
            </div>

            <div>
              <strong>Farmers Agency Owner</strong>
              <small>Client success story</small>
            </div>
          </div>

          <div className="featured-card-line" />
          <span className="featured-card-label">
            Sample preview — replace with an approved quote
          </span>
        </div>
      </div>
    </section>
  );
}

function TestimonialsIntro() {
  const { intro } = testimonialsData;

  return (
    <section className="section testimonials-intro" id="client-stories">
      <div className="container testimonials-intro-grid">
        <div>
          <span className="section-label">{intro.eyebrow}</span>
          <h2>{intro.title}</h2>
        </div>

        <p>{intro.description}</p>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }) {
  return (
    <article
      className="testimonial-card testimonial-reveal"
      style={{ "--testimonial-delay": `${index * 120}ms` }}
    >
      <div className="testimonial-card-top">
        <div className="testimonial-stars" aria-label={`${testimonial.rating} out of 5 stars`}>
          {"★".repeat(testimonial.rating)}
        </div>

        <span className="testimonial-service">
          {testimonial.service}
        </span>
      </div>

      <div className="testimonial-quote-icon">“</div>

      <blockquote>{testimonial.quote}</blockquote>

      <div className="testimonial-author">
        <div className="testimonial-avatar">
          {testimonial.initials}
        </div>

        <div>
          <strong>{testimonial.name}</strong>
          <span>{testimonial.role}</span>
          <small>{testimonial.location}</small>
        </div>
      </div>

      {/* <div className="sample-testimonial-note">
        Sample testimonial — replace with an approved client quote.
      </div> */}
    </article>
  );
}

function TestimonialCards() {
  return (
    <section className="section testimonial-cards-section">
      <div className="container">
        <div className="testimonials-section-heading">
          <div>
            <span className="section-label">Client Experiences</span>
            <h2>Reliable support. Noticeable results.</h2>
          </div>

          <p>
            Our support is designed to reduce administrative pressure and help
            agency teams spend more time on clients and growth.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonialsData.testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.service}-${index}`}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsStats() {
  return (
    <section className="testimonial-stats-section">
      <div className="container">
        <div className="testimonial-stats-heading">
          <span className="section-label">Our Growing Impact</span>
          <h2>Trusted by Farmers Insurance agencies across the U.S.</h2>
        </div>

        <div className="testimonial-stats-grid">
          {testimonialsData.stats.map((stat) => (
            <div className="testimonial-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <i />
            </div>
          ))}
        </div>

        {/* <p className="stats-disclaimer">
          Update these figures with verified company data before publishing.
        </p> */}
      </div>
    </section>
  );
}

function TestimonialsCTA() {
  const { cta } = testimonialsData;

  return (
    <section className="testimonials-bottom-cta">
      <div className="testimonials-cta-ring" />

      <div className="container testimonials-cta-content">
        <span className="section-label testimonials-light-label">
          {cta.eyebrow}
        </span>

        <h2>{cta.title}</h2>

        <p>{cta.description}</p>

        <Link to="/#contact" className="btn btn-light">
          Get in Touch Today <span>→</span>
        </Link>
      </div>
    </section>
  );
}

export default function Testimonials() {
  return (
    <div className="testimonials-page">
      <TestimonialsHero />
      <TestimonialsIntro />
      <TestimonialCards />
      <TestimonialsStats />
      <TestimonialsCTA />
    </div>
  );
}