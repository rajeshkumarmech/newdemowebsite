import { Link } from "react-router-dom";
import { aboutData } from "../model/aboutModel";
import "../styles/about.css";

export default function AboutSection() {
  return (
    <div className="about-section">
      <section className="about-intro">
        <div className="container about-intro-grid">
          <div className="reveal-up">
            <span className="section-label">About Tritox</span>

            <h2>{aboutData.story.title}</h2>
          </div>

          <p className="reveal-up">
            {aboutData.story.description}
          </p>
        </div>
      </section>

      <section className="section story-section" id="our-story">
        <div className="container story-layout">
          <div className="story-heading">
            <span className="section-label">Our Story</span>

            <h2>Who We Are</h2>

            <div className="story-stamp">
              <span>TRITOX</span>
              <strong>Built on trust</strong>
            </div>
          </div>

          <div className="story-copy">
            {aboutData.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section leadership-section">
        <div className="leadership-intro">
          <span className="section-label">
            Our Leadership & Team
          </span>

          <h2>Led by experience.</h2>

          <p>
            Our operations are led by Kathiravan, our Operation Head,
            alongside a team of highly trained BPO professionals who
            understand the specific demands of the U.S. insurance market.
          </p>

          <p>
            We build specialized workflows around your exact agency needs
            and take full ownership of your day-to-day administration.
          </p>
        </div>

        <div className="team-grid">
          <article className="team-card">
            <div className="team-avatar">
              K
              <span className="team-status" />
            </div>

            <div>
              <span className="team-role">Operation Head</span>
              <h3>Kathiravan</h3>
              <p>
                Leads operational delivery, workflow quality, and client
                support standards.
              </p>
            </div>

            <span className="team-arrow">↗</span>
          </article>

          <article className="team-card">
            <div className="team-avatar">
              T
              <span className="team-status" />
            </div>

            <div>
              <span className="team-role">
                Insurance Support Specialists
              </span>
              <h3>Tritox Team</h3>
              <p>
                A trained team focused on quoting, CRM administration,
                and daily agency operations.
              </p>
            </div>

            <span className="team-arrow">↗</span>
          </article>
        </div>
      </section>

      <section className="mission-section">
        <div className="container mission-layout">
          <div className="mission-heading">
            <span className="section-label">Purpose-led support</span>

            <h2>Built to create freedom behind the scenes.</h2>
          </div>

          <div className="mission-cards">
            <article className="mission-card">
              <span className="mission-icon">◎</span>
              <span className="section-label">Mission</span>

              <h3>{aboutData.mission.title}</h3>

              <p>{aboutData.mission.description}</p>
            </article>

            <article className="mission-card dark-mission-card">
              <span className="mission-icon">◌</span>
              <span className="section-label">Vision</span>

              <h3>{aboutData.vision.title}</h3>

              <p>{aboutData.vision.description}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="centered-heading">
            <span className="section-label">What We Stand For</span>

            <h2>The principles behind every interaction.</h2>

            <p>
              Our values guide how we work, communicate, and protect the
              agencies we support.
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

          <div className="about-inline-cta">
            <p>Ready to see how Tritox can support your agency?</p>

            <Link to="/#contact" className="btn btn-primary">
              Start a Conversation <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="security-section">
        <div className="container security-layout">
          <div className="security-copy">
            <span className="section-label security-label">
              Security & Infrastructure
            </span>

            <h2>Uncompromising security. Seamless access.</h2>

            <p>
              Handling sensitive policyholder information requires absolute
              trust and airtight digital infrastructure. We operate as a
              secure extension of your local office.
            </p>

            <Link to="/#contact" className="btn btn-light">
              Discuss Your Workflow <span>→</span>
            </Link>
          </div>

          <div className="security-list">
            {aboutData.security.map((item, index) => (
              <article className="security-item" key={item.title}>
                <span className="security-number">
                  0{index + 1}
                </span>

                <span className="security-icon">
                  {item.icon || "✓"}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}