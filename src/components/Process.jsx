import { homeData } from "../model/homeModel";

export default function Process() {
  return (
    <section className="section process-section">
      <div className="container">
        <div className="centered-heading">
          <span className="section-label">How We Work</span>
          <h2>A simple path to a stronger operation.</h2>
          <p>
            We make the transition easy, transparent, and aligned with your
            agency’s existing workflow.
          </p>
        </div>

        <div className="process-grid">
          {homeData.steps.map((step, index) => (
            <article className="process-card" key={step.number}>
              <div className="process-number">
                {step.number}
                {index !== homeData.steps.length - 1 && (
                  <span className="process-line" />
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