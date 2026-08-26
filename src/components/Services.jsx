import { Link } from "react-router-dom";
import { servicesData } from "../model/servicesModel";
import "../styles/services.css";

function ServicesHero() {
  const { hero } = servicesData;

  return (
    <section className="services-hero">
      <div className="services-hero-grid">
        <div className="services-hero-content services-reveal-up">
          <span className="section-label services-label">
            {hero.eyebrow}
          </span>

          <h1>{hero.title}</h1>

          <p>{hero.description}</p>

          <div className="services-hero-actions">
            <Link to="/#contact" className="btn btn-light">
              Request a Consultation <span>→</span>
            </Link>

            <a href="#primary-services" className="services-outline-link">
              Explore services <span>↓</span>
            </a>
          </div>
        </div>

        <div className="services-hero-visual services-reveal-right">
          <div className="service-orbit service-orbit-large" />
          <div className="service-orbit service-orbit-small" />

          <div className="service-dashboard">
            <div className="service-dashboard-header">
              <span>
                <i className="service-live-dot" />
                Support pipeline
              </span>
              <small>Active</small>
            </div>

            <div className="service-dashboard-title">
              <div>
                <small>Today’s workflow</small>
                <h3>Agency operations</h3>
              </div>

              <span className="service-status">On track</span>
            </div>

            <div className="service-progress-row">
              <div className="service-progress-label">
                <span>Quotes completed</span>
                <strong>82%</strong>
              </div>

              <div className="service-progress">
                <span style={{ width: "82%" }} />
              </div>
            </div>

            <div className="service-progress-row">
              <div className="service-progress-label">
                <span>CRM updates</span>
                <strong>94%</strong>
              </div>

              <div className="service-progress">
                <span style={{ width: "94%" }} />
              </div>
            </div>

            <div className="service-dashboard-footer">
              <span>5 workflows active</span>
              <span>✓ Secure access</span>
            </div>
          </div>

          <div className="service-floating-card service-floating-one">
            <span className="service-floating-icon">✓</span>
            <div>
              <strong>Quote ready</strong>
              <small>Delivered to your desk</small>
            </div>
          </div>

          <div className="service-floating-card service-floating-two">
            <span className="service-floating-icon pink-service-icon">↗</span>
            <div>
              <strong>Pipeline organized</strong>
              <small>No lead left behind</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrimaryServices() {
  return (
    <section className="section primary-services" id="primary-services">
      <div className="container">
        <div className="services-section-heading">
          <div>
            <span className="section-label">Primary Services</span>
            <h2>Support that keeps your agency moving forward.</h2>
          </div>

          <p>
            Our team takes ownership of the operational work behind your
            agency, helping your producers spend more time with clients.
          </p>
        </div>

        <div className="primary-services-list">
          {servicesData.primaryServices.map((service, serviceIndex) => (
            <article
              className="primary-service-card"
              key={service.title}
              style={{ "--service-delay": `${serviceIndex * 120}ms` }}
            >
              <div className="primary-service-top">
                <div className="primary-service-number">
                  {service.number}
                </div>

                <div className="primary-service-icon">
                  {service.icon}
                </div>

                <div className="primary-service-heading">
                  <h3>{service.title}</h3>
                  <p>{service.intro}</p>
                </div>
              </div>

              <div className="service-feature-grid">
                {service.features.map((feature) => (
                  <div className="service-feature" key={feature.title}>
                    <span className="feature-check">✓</span>

                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="primary-service-bottom">
                <span>
                  <i className="mini-green-dot" />
                  Dedicated support workflow
                </span>

                <Link to="/#contact">
                  Discuss this service <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DailyOperations() {
  return (
    <section className="daily-operations-section">
      <div className="container daily-operations-layout">
        <div className="daily-operations-copy">
          <span className="section-label daily-label">
            Daily Operations
          </span>

          <h2>Your agency’s engine room, handled.</h2>

          <p>
            We take care of daily, time-consuming administrative work so your
            local team can stay focused on clients, producers, and revenue.
          </p>

          <Link to="/#contact" className="btn btn-primary">
            Delegate Your Admin Work <span>→</span>
          </Link>
        </div>

        <div className="daily-task-card">
          <div className="daily-task-header">
            <div>
              <span className="section-label">Operations checklist</span>
              <h3>Today’s completed tasks</h3>
            </div>

            <span className="daily-check-icon">✓</span>
          </div>

          <div className="daily-task-list">
            {servicesData.dailyTasks.map((task, index) => (
              <div className="daily-task" key={task}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{task}</p>
                <strong>Done</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AdditionalServices() {
  return (
    <section className="section additional-services">
      <div className="container">
        <div className="centered-heading">
          <span className="section-label">Additional Services</span>
          <h2>Flexible support beyond insurance operations.</h2>
          <p>
            Our backend capabilities can adapt to other professional service
            environments that require accuracy, documentation, and workflow
            discipline.
          </p>
        </div>

        <div className="additional-services-grid">
          {servicesData.additionalServices.map((service) => (
            <article className="additional-service-card" key={service.title}>
              <div className="additional-service-header">
                <span className="additional-service-icon">
                  {service.icon}
                </span>

                <span className="additional-service-arrow">↗</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="additional-details">
                {service.details.map((detail) => (
                  <div className="additional-detail" key={detail.title}>
                    <span>✓</span>

                    <div>
                      <h4>{detail.title}</h4>
                      <p>{detail.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="expertise-section">
      <div className="container expertise-layout">
        <div className="expertise-copy">
          <span className="section-label expertise-label">
            Why Insurance Expertise Matters
          </span>

          <h2>Domain knowledge changes the quality of execution.</h2>

          <p>
            Insurance operations require familiarity with policy forms, rating
            logic, carrier workflows, and program reporting standards. General
            outsourcing providers often lack the specialization needed to
            manage these workflows effectively.
          </p>

          <p>
            Our team is built around insurance-specific knowledge, aligning
            operational execution with your agency’s compliance and
            underwriting requirements.
          </p>

          <Link to="/#contact" className="btn btn-light">
            Talk to an Expert <span>→</span>
          </Link>
        </div>

        <div className="expertise-list">
          {servicesData.expertise.map((item, index) => (
            <div className="expertise-item" key={item}>
              <span className="expertise-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="expertise-check">✓</span>

              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesCTA() {
  return (
    <section className="services-bottom-cta">
      <div className="services-cta-ring" />

      <div className="container services-cta-content">
        <span className="section-label services-cta-label">
          Reclaim your time
        </span>

        <h2>Ready to reduce your operational workload?</h2>

        <p>
          Managing daily operations while trying to grow your agency is
          exhausting. Let our dedicated team step in and give you back the time
          you need to focus on your clients and your growth.
        </p>

        <Link to="/#contact" className="btn btn-light">
          Request a Free Consultation <span>→</span>
        </Link>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <div className="services-page">
      <ServicesHero />
      <PrimaryServices />
      <DailyOperations />
      <AdditionalServices />
      <Expertise />
      <ServicesCTA />
    </div>
  );
}