import { priorities } from "../data/priorities";

export default function PrioritiesSection() {
  return (
    <section id="priorities" className="section reveal-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow reveal">Prioritisation Logic</div>
          <h2 className="section-title reveal">What I'd Ship First</h2>
          <p className="section-desc reveal">
            Ranked by impact × effort. As a pre-seed team, sequence matters.
          </p>
        </div>

        <div className="priority-list">
          {priorities.map((p) => (
            <div key={p.rank} className="priority-item reveal">
              <div className="priority-rank">{p.rank}</div>
              <div>
                <div className="priority-title">{p.title}</div>
                <div className="priority-category">{p.category}</div>
                <p className="priority-note">{p.note}</p>
              </div>
              <div className="priority-badges">
                <span className="badge badge--impact">{p.impact} Impact</span>
                <span className="badge badge--effort">{p.effort} Effort</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
