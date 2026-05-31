import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { swotData } from "../data/swotData";

gsap.registerPlugin(ScrollTrigger);

const QUADRANTS = [
  {
    label: "Strengths",
    key: "strengths",
    letter: "S",
    className: "swot-card--strengths",
    items: swotData.strengths,
  },
  {
    label: "Weaknesses",
    key: "weaknesses",
    letter: "W",
    className: "swot-card--weaknesses",
    items: swotData.weaknesses,
  },
  {
    label: "Opportunities",
    key: "opportunities",
    letter: "O",
    className: "swot-card--opportunities",
    items: swotData.opportunities,
  },
  {
    label: "Threats",
    key: "threats",
    letter: "T",
    className: "swot-card--threats",
    items: swotData.threats,
  },
];

export default function SwotGrid() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".swot-header > *",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".swot-card",
        { opacity: 0, y: 56, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".swot-grid",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="swot-section" ref={sectionRef}>
      <div className="swot-header">
        <span className="swot-eyebrow">Framework</span>
        <h3 className="swot-title">SWOT — Quick Picture</h3>
        <p className="swot-desc">
          A snapshot of where Vocallabs stands today — moats, gaps, and market forces shaping the next move.
        </p>
      </div>

      <div className="swot-grid">
        {QUADRANTS.map((q) => (
          <article key={q.key} className={`swot-card ${q.className}`}>
            <div className="swot-card-top">
              <div className="swot-badge">{q.letter}</div>
              <div>
                <h4 className="swot-label">{q.label}</h4>
                <span className="swot-count">{q.items.length} points</span>
              </div>
            </div>
            <ul className="swot-list">
              {q.items.map((item, i) => (
                <li key={i} className="swot-item">{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
