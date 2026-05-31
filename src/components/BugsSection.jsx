import { useState } from "react";
import { bugs } from "../data/bugs";

export default function BugsSection() {
  const [openBug, setOpenBug] = useState(null);

  return (
    <section id="bugs" className="section bugs-section reveal-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow reveal">Bonus</div>
          <h2 className="section-title reveal">4 Additional UX / Technical Bugs</h2>
          <p className="section-desc reveal">
            Found while actually using the site — not theoretical.
          </p>
        </div>

        <div className="bug-list">
          {bugs.map((bug) => (
            <div key={bug.id} className={`bug-item ${openBug === bug.id ? "open" : ""}`}>
              <div className="bug-header" onClick={() => setOpenBug(openBug === bug.id ? null : bug.id)}>
                <span className="bug-id">{bug.id}</span>
                <span className="bug-title">{bug.title}</span>
                <span className="bug-chevron">›</span>
              </div>
              <div className="bug-body">
                <p>{bug.body}</p>
                <div className="issue-source">Seen in: {bug.source}</div>
                <div className="bug-fix-box">
                  <span className="bug-fix-label">Fix</span>
                  <p>{bug.fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
