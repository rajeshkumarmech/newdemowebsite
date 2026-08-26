import { Link } from "react-router-dom";
import { homeData } from "../model/homeModel";

export default function Hero() {
  const { hero } = homeData;

  return (
    <div className="hero">
      <div className="hero-background-shape shape-one" />
      <div className="hero-background-shape shape-two" />

      <div className="container hero-grid">
        <div className="hero-content reveal-up">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            {hero.eyebrow}
          </span>

          <h1>{hero.title}</h1>

          <p>{hero.description}</p>

          <div className="hero-actions">
            <Link to="/#contact" className="btn btn-primary">
              Your Agency Support <span>→</span>
            </Link>

            <Link to="/#services" className="btn btn-outline">
              View Our Services <span>→</span>
            </Link>
          </div>

          <div className="hero-trust">
            <div className="avatar-stack">
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

        <div className="hero-visual reveal-right">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="dashboard-card floating-animation">
            <div className="dashboard-header">
              <span>
                <i className="live-dot" />
                Agency Operations
              </span>
              <small>Today</small>
            </div>

            <div className="dashboard-title">
              <div>
                <small>Operational pipeline</small>
                <h3>Daily performance</h3>
              </div>

              <span className="positive-badge">+18.4%</span>
            </div>

            <div className="chart">
              <span style={{ height: "35%" }} />
              <span style={{ height: "50%" }} />
              <span style={{ height: "42%" }} />
              <span style={{ height: "68%" }} />
              <span style={{ height: "57%" }} />
              <span style={{ height: "80%" }} />
              <span style={{ height: "73%" }} />
              <span style={{ height: "95%" }} />
            </div>

            <div className="dashboard-metrics">
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

          <div className="notification-card notification-top">
            <span className="notification-icon">✓</span>
            <div>
              <strong>Quote completed</strong>
              <small>Multi-line policy</small>
            </div>
          </div>

          <div className="notification-card notification-bottom">
            <span className="notification-icon pink-icon">↗</span>
            <div>
              <strong>More selling time</strong>
              <small>Less admin work</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}