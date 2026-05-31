import { issues } from "../data/issues";
import IssueCard from "./IssueCard";

export default function AnalysisSection() {
  return (
    <section id="analysis" className="section reveal-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow reveal">The Teardown</div>
          <h2 className="section-title reveal">5 Sharp Feedbacks</h2>
          <p className="section-desc reveal">
            Each observation grounded in something personally seen or tested — not generic advice.
          </p>
        </div>

        {issues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </div>
    </section>
  );
}
