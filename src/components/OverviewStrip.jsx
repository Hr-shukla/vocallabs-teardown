const SCOPE_ITEMS = [
  "Homepage",
  "Solutions dropdown",
  "Healthcare",
  "Finance",
  "FMCG",
  "Automotive",
  "Insurance",
  "Blog",
  "Docs",
  "Talk to Expert (live call)",
  "Demo flow",
];

export default function OverviewStrip() {
  return (
    <div className="scope-strip">
      <div className="container scope-inner">
        <span className="scope-label">Testing scope</span>
        {SCOPE_ITEMS.map((item, i) => (
          <span key={item}>
            <span className="scope-item">{item}</span>
            {i < SCOPE_ITEMS.length - 1 && <span className="scope-sep">·</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
