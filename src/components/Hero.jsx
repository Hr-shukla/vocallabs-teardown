export default function Hero() {
  const metaItems = [
    ["Company", "Vocallabs.ai"],
    ["Frameworks", "SWOT · Porter's Five Forces · JTBD"],
    ["Testing", "Homepage · Solutions · Industries · Blog · Demo Flow"],
  ];

  return (
    <header className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-eyebrow hero-anim">
            <span className="hero-eyebrow-dot" />
            Product Intern Assignment · 31 May 2026
          </div>
          <h1 className="hero-title hero-anim">
            Vocallabs.ai
            <br />
            <span className="hero-title-accent">Product Teardown</span>
          </h1>
          <p className="hero-subtitle hero-anim">
            5 sharp, actionable feedbacks across GTM, Competitor Analysis, Features, UX, and Potential Collaborations — backed by real product exploration, live testing, and screenshots.
          </p>
          <div className="hero-meta hero-anim">
            {metaItems.map(([k, v]) => (
              <div key={k} className="hero-meta-card">
                <div className="hero-meta-label">{k}</div>
                <div className="hero-meta-value">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
