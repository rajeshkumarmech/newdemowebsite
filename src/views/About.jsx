import { Link } from "react-router-dom";
import { aboutData } from "../model/aboutModel";
import "../styles/about.css";

function AboutNavbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">T</span>
          <span>
            Tritox <small>Technologies</small>
          </span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/#services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/#process">How We Work</Link>
        </nav>

        <Link to="/contact" className="nav-cta">
          Contact Us
        </Link>
      </div>
    </header>
  );
}

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-grid">
        <div className="about-hero-content">
          <span className="section-label about-label">
            {aboutData.hero.eyebrow}
          </span>

          <h1>{aboutData.hero.title}</h1>

          <p>{aboutData.hero.description}</p>

          <div className="about-hero-actions">
            <Link to="/contact" className="btn btn-light">
              Start a Conversation <span>→</span>
            </Link>

            <a href="#our-story" className="about-text-link">
              Explore our story <span>↓</span>
            </a>
          </div>
        </div>

        <div className="about-hero-art">
          <div className="hero-orbit orbit-large" />
          <div className="hero-orbit orbit-small" />

          <div className="hero-main-card">
            <div className="hero-card-top">
              <span className="hero-card-dot" />
              <span>Operations dashboard</span>
              <small>Live support</small>
            </div>

            <div className="hero-card-heading">
              <div>
                <small>Agency efficiency</small>
                <h3>Growing with clarity</h3>
              </div>
              <span className="trend-badge">+32%</span>
            </div>

            <div className="hero-progress">
              <span style={{ width: "82%" }} />
            </div>

            <div className="hero-card-bottom">
              <div>
                <strong>82%</strong>
                <small>Workflow completed</small>
              </div>
              <div>
                <strong>96%</strong>
                <small>Data accuracy</small>
              </div>
            </div>
          </div>

          <div className="hero-mini-card mini-card-one">
            <span className="mini-icon">✓</span>
            <div>
              <strong>Secure access</strong>
              <small>Protected workflow</small>
            </div>
          </div>

          <div className="hero-mini-card mini-card-two">
            <span className="mini-icon pink-mini">↗</span>
            <div>
              <strong>More time to sell</strong>
              <small>Less admin pressure</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompanyStats() {
  return (
    <section className="about-stats">
      <div className="container about-stats-grid">
        {aboutData.stats.map((stat) => (
          <div className="about-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section className="section story-section" id="our-story">
      <div className="story-layout">
        <div className="story-heading">
          <span className="section-label">{aboutData.story.eyebrow}</span>
          <h2>{aboutData.story.title}</h2>

          <div className="story-stamp">
            <span>TRITOX</span>
            <strong>Built on trust</strong>
          </div>
        </div>

        <div className="story-copy">
          {aboutData.story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  const { leadership, team } = aboutData;

  return (
    <section className="section leadership-section">
      <div className="leadership-intro">
        <span className="section-label">{leadership.eyebrow}</span>
        <h2>{leadership.title}</h2>
        <p>{leadership.description}</p>
        <p>{leadership.additionalDescription}</p>
      </div>

      <div className="team-grid">
        {team.map((member) => (
          <article className="team-card" key={member.name}>
            <div className="team-avatar">
              {member.initials}
              <span className="team-status" />
            </div>

            <div>
              <span className="team-role">{member.role}</span>
              <h3>{member.name}</h3>
              <p>{member.description}</p>
            </div>

            <span className="team-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="mission-section">
      <div className="container mission-layout">
        <div className="mission-heading">
          <span className="section-label">Purpose-led support</span>
          <h2>Built to create freedom behind the scenes.</h2>
        </div>

        <div className="mission-cards">
          {aboutData.missionVision.map((item) => (
            <article className="mission-card" key={item.type}>
              <span className="mission-icon">{item.icon}</span>
              <span className="section-label">{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="section values-section">
      <div className="centered-heading">
        <span className="section-label">What We Stand For</span>
        <h2>The principles behind every interaction.</h2>
        <p>
          Our values are not statements on a wall. They guide how we work,
          communicate, and protect the agencies we support.
        </p>
      </div>

      <div className="values-grid">
        {aboutData.values.map((value) => (
          <article className="value-card" key={value.title}>
            <span className="value-icon">{value.icon}</span>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Security() {
  return (
    <section className="security-section">
      <div className="container security-layout">
        <div className="security-copy">
          <span className="section-label security-label">Security & Infrastructure</span>
          <h2>Uncompromising security. Seamless access.</h2>
          <p>
            Handling sensitive policyholder information requires absolute trust
            and airtight digital infrastructure. Here’s how we operate as a
            secure extension of your local office.
          </p>

          <Link to="/contact" className="btn btn-light">
            Discuss Your Workflow <span>→</span>
          </Link>
        </div>

        <div className="security-list">
          {aboutData.security.map((item, index) => (
            <article className="security-item" key={item.title}>
              <span className="security-number">0{index + 1}</span>
              <span className="security-icon">{item.icon}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="about-cta">
      <div className="about-cta-ring" />

      <div className="container about-cta-content">
        <span className="section-label light-label">Your growth is the goal</span>
        <h2>We handle the work. You focus on growth.</h2>
        <p>
          When you partner with Tritox Technologies, you gain a dedicated
          support system that works tirelessly in the background — allowing you
          to focus on building a legacy with the Farmers brand.
        </p>

        <Link to="/contact" className="btn btn-light">
          Get in Touch Today <span>→</span>
        </Link>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <AboutNavbar />

      <main>
        <AboutHero />
        <CompanyStats />
        <OurStory />
        <Leadership />
        <MissionVision />
        <Values />
        <Security />
        <AboutCTA />
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand">
            <span className="brand-mark">T</span>
            <span>
              Tritox <small>Technologies</small>
            </span>
          </div>
          <p>Operational support for insurance agencies.</p>
          <span>© 2026 Tritox Technologies</span>
        </div>
      </footer>
    </>
  );
}