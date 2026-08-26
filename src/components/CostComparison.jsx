import { homeData } from "../model/homeModel";

export default function CostComparison() {
  return (
    <section className="section cost-section">
      <div className="container">
        <div className="centered-heading">
          <span className="section-label">The Strategic Advantage</span>
          <h2>The true cost of in-house support.</h2>
          <p>
            Compare the total cost of a local W-2 administrative hire with a
            flexible Tritox support model.
          </p>
        </div>

        <div className="cost-layout">
          <div className="cost-card">
            <div className="cost-card-heading">
              <span>Local W-2 employee</span>
              <h3>$60k–$70k+</h3>
              <small>Estimated annual cost</small>
            </div>

            {homeData.costs.map((cost) => (
              <div className="cost-row" key={cost.category}>
                <span>{cost.category}</span>
                <strong>{cost.employee}</strong>
              </div>
            ))}
          </div>

          <div className="cost-card highlighted-cost-card">
            <div className="cost-card-heading">
              <span>Tritox Technologies</span>
              <h3>Save 60%–80%</h3>
              <small>Flexible monthly support</small>
            </div>

            {homeData.costs.map((cost) => (
              <div className="cost-row" key={cost.category}>
                <span>{cost.category}</span>
                <strong>{cost.tritox}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="advantage-note">
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