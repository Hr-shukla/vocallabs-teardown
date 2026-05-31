import { LOGO_FULL } from "../constants/assets";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logos">
          <img src={LOGO_FULL} alt="VocalLabs" className="footer-logo-full" />
        </div>
        <div className="footer-text">
          Product Teardown · Tested live on vocallabs.ai
        </div>
      </div>
    </footer>
  );
}
