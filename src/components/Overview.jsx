import SwotGrid from "./SwotGrid";

export default function Overview() {
  return (
    <section id="overview" className="section reveal-section">
      <div className="container">
        <div className="overview-grid">
          <div className="overview-card reveal">
            <h2 className="overview-card-label">What They Do</h2>
            <p className="overview-card-text">
              AI voice agents that automate inbound/outbound business calls — sales, support, and booking — with human-like fluency. India-first, with local language/accent tuning. Pre-seed, Bangalore-based.
            </p>
          </div>
          <div className="overview-card reveal">
            <h2 className="overview-card-label">Homepage Headline</h2>
            <p className="overview-card-text">
              "Deploy and Scale Voice AI" — sub-copy says "Voice AI infrastructure for developers." But Solutions pages target business buyers. Fundamental ICP split at the very first screen.
            </p>
          </div>
        </div>
        <SwotGrid />
      </div>
    </section>
  );
}
