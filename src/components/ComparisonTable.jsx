const HEADERS = ["Platform", "Public Pricing", "Self-Serve Signup", "Live Demo/Playground", "India/Hindi Support"];

function cellClass(value) {
  if (value.startsWith("✗")) return "cell-bad";
  if (value.startsWith("~")) return "cell-warn";
  if (value.startsWith("✓")) return "cell-good";
  return "";
}

export default function ComparisonTable({ rows }) {
  return (
    <div className="table-wrap">
      <table className="comparison-table">
        <thead>
          <tr>
            {HEADERS.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i === 0 ? "highlight" : ""}>
              <td>{row.platform}</td>
              <td className={cellClass(row.pricing)}>{row.pricing}</td>
              <td className={cellClass(row.signup)}>{row.signup}</td>
              <td className={cellClass(row.demo)}>{row.demo}</td>
              <td className={cellClass(row.india)}>{row.india}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
