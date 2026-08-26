import { Link } from "react-router-dom";
import { homeData } from "../model/homeModel";
import { homeController } from "../controllers/homeController";
import "../styles/home.css";

function HomeHero() {
  const { hero } = homeData;

  return (
    <section className="home-hero" id="home">
      <div className="hero-bg-circle hero-bg-circle-one" />
      <div className="hero-bg-circle hero-bg-circle-two" />

      <div className="container home-hero-grid">
        <div className="home-hero-content home-reveal-up">
          <span className="home-eyebrow">
            <span className="home-eyebrow-dot" />
            {hero.eyebrow}
          </span>

          <h1>{hero.title}</h1>

          <p>{hero.description}</p>

          <div className="home-hero-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={homeController.handleHeroContact}
            >
              Your Agency Support <span>→</span>
            </button>

            <button
              type="button"
              className="btn btn-outline"
              onClick={homeController.handleHeroServices}
            >
              View Our Services <span>→</span>
            </button>
          </div>

          <div className="home-trust-row">
            <div className="home-avatar-stack">
              <span>J</span>
              <span>M</span>
              <span>S</span>
            </div>

            <div>
              <strong>Built for agency growth</strong>
              <small>Reliable support. Better workflows.</small>
            </div>
          </div>
        </div>

        <div className="home-hero-visual home-reveal-right">
          <div className="home-orbit home-orbit-large" />
          <div className="home-orbit home-orbit-small" />

          <div className="home-dashboard home-floating">
            <div className="home-dashboard-header">
              <span>
                <i className="home-live-dot" />
                Agency Operations
              </span>

              <small>Today</small>
            </div>

            <div className="home-dashboard-title">
              <div>
                <small>Operational pipeline</small>
                <h3>Daily performance</h3>
              </div>

              <span className="home-growth-badge">+18.4%</span>
            </div>

            <div className="home-chart">
              <span style={{ height: "35%" }} />
              <span style={{ height: "51%" }} />
              <span style={{ height: "44%" }} />
              <span style={{ height: "67%" }} />
              <span style={{ height: "57%" }} />
              <span style={{ height: "82%" }} />
              <span style={{ height: "74%" }} />
              <span style={{ height: "95%" }} />
            </div>

            <div className="home-dashboard-metrics">
              <div>
                <strong>128</strong>
                <small>Active leads</small>
              </div>

              <div>
                <strong>42</strong>
                <small>Quotes ready</small>
              </div>

              <div>
                <strong>96%</strong>
                <small>On time</small>
              </div>
            </div>
          </div>

          <div className="home-floating-card home-floating-card-one">
            <span className="home-floating-icon">✓</span>

            <div>
              <strong>Quote completed</strong>
              <small>Multi-line policy</small>
            </div>
          </div>

          <div className="home-floating-card home-floating-card-two">
            <span className="home-floating-icon home-pink-icon">↗</span>

            <div>
              <strong>More selling time</strong>
              <small>Less admin work</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreServices() {
  return (
    <section className="home-section home-services" id="services">
      <div className="container">
        <div className="home-section-heading">
          <div>
            <span className="home-section-label">Core Services</span>
            <h2>Backend support that keeps your agency moving.</h2>
          </div>

          <p>
            From quote preparation to CRM administration, our team takes care
            of the work behind the scenes.
          </p>
        </div>

        <div className="home-services-grid">
          {homeData.services.map((service, index) => (
            <article
              className="home-service-card home-reveal-up"
              style={{ "--home-delay": `${index * 120}ms` }}
              key={service.title}
            >
              <div className="home-service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button
                type="button"
                onClick={homeController.handleServiceClick}
              >
                Learn more <span>→</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyTritox() {
  return (
    <section className="home-section home-why">
      <div className="container home-why-layout">
        <div className="home-why-intro">
          <span className="home-section-label">Why Tritox?</span>

          <h2>Built around your agency’s success.</h2>

          <p>
            We work as a seamless extension of your team, helping you reduce
            administrative pressure and create more time for growth.
          </p>

          <Link to="/#contact" className="btn btn-primary">
            Talk to Our Team <span>→</span>
          </Link>
        </div>

        <div className="home-benefits-list">
          {homeData.benefits.map((benefit, index) => (
            <article
              className="home-benefit-item"
              key={benefit.title}
            >
              <span className="home-benefit-number">
                0{index + 1}
              </span>

              <span className="home-benefit-icon">{benefit.icon}</span>

              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>

              <span className="home-benefit-arrow">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CostComparison() {
  return (
    <section className="home-section home-cost">
      <div className="container">
        <div className="home-centered-heading">
          <span className="home-section-label">The Strategic Advantage</span>

          <h2>The true cost of in-house support.</h2>

          <p>
            Compare the total cost of a local W-2 administrative hire with a
            flexible Tritox support model.
          </p>
        </div>

        <div className="home-cost-grid">
          <div className="home-cost-card">
            <div className="home-cost-header">
              <span>Local W-2 employee</span>
              <h3>$60k–$70k+</h3>
              <small>Estimated annual cost</small>
            </div>

            {homeData.costs.map((cost) => (
              <div className="home-cost-row" key={cost.category}>
                <span>{cost.category}</span>
                <strong>{cost.employee}</strong>
              </div>
            ))}
          </div>

          <div className="home-cost-card home-highlighted-cost">
            <div className="home-cost-header">
              <span>Tritox Technologies</span>
              <h3>Save 60%–80%</h3>
              <small>Flexible monthly support</small>
            </div>

            {homeData.costs.map((cost) => (
              <div className="home-cost-row" key={cost.category}>
                <span>{cost.category}</span>
                <strong>{cost.tritox}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="home-advantage-note">
          <span>✦</span>

          <p>
            When you eliminate administrative overhead, you free up capital for
            marketing and free your licensed producers to focus on writing new
            business and driving retention.
          </p>
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section className="home-section home-process" id="process">
      <div className="container">
        <div className="home-centered-heading">
          <span className="home-section-label">How We Work</span>

          <h2>A simple path to a stronger operation.</h2>

          <p>
            We make the transition easy, transparent, and aligned with your
            agency’s existing workflow.
          </p>
        </div>

        <div className="home-process-grid">
          {homeData.process.map((step, index) => (
            <article className="home-process-card" key={step.number}>
              <div className="home-process-number">
                {step.number}

                {index !== homeData.process.length - 1 && (
                  <span className="home-process-line" />
                )}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeCTA() {
  return (
    <section className="home-bottom-cta">
      <div className="home-cta-ring" />

      <div className="container home-cta-content">
        <span className="home-light-label">Ready to grow?</span>

        <h2>Ready to automate your agency’s growth?</h2>

        <p>
          Let’s build a custom operational plan for your Farmers Insurance
          agency. Our team is ready to step in, take over the backend, and help
          you scale without the overhead.
        </p>

        <Link to="/#contact" className="btn btn-light">
          Request a Free Consultation <span>→</span>
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="home-page">
      <HomeHero />
      <CoreServices />
      <WhyTritox />
      <CostComparison />
      <HowWeWork />
      <HomeCTA />
    </main>
  );
}