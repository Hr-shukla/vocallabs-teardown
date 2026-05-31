import ComparisonTable from "./ComparisonTable";

export default function IssueCard({ issue }) {
  return (
    <article className="issue-card">
      <div className="issue-header">
        <span className="issue-id">{issue.id}</span>
        <span className="issue-tag">{issue.tag}</span>
      </div>

      <h3 className="issue-title">{issue.title}</h3>

      <div className="issue-block">
        <div className="issue-block-label">( A ) Observed</div>
        <div className="issue-block-content">
          <p>{issue.observed}</p>
          <div className="issue-source">Seen in: {issue.observedSource}</div>
        </div>
      </div>

      {issue.table && <ComparisonTable rows={issue.table} />}

      <div className="issue-block">
        <div className="issue-block-label">( B ) Problem</div>
        <div className="issue-block-content">
          <p>{issue.problem}</p>
        </div>
      </div>

      <div className="issue-block">
        <div className="issue-block-label">( C ) Ship Instead</div>
        <div className="issue-fix">
          <p>{issue.fix}</p>
        </div>
      </div>
    </article>
  );
}
