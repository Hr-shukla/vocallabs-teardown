import { LOGO_FULL } from "../constants/assets";
import { scrollTo } from "../utils/scrollTo";

const NAV_SECTIONS = ["overview", "analysis", "bugs", "priorities"];

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <img src={LOGO_FULL} alt="VocalLabs" className="nav-logo" />
        <span className="nav-badge">Product Teardown 2026</span>
      </div>
      <div className="nav-links">
        {NAV_SECTIONS.map((s) => (
          <button key={s} type="button" className="nav-link" onClick={() => scrollTo(s)}>
            {s}
          </button>
        ))}
      </div>
    </nav>
  );
}
