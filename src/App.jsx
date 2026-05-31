import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlowBackground from "./components/GlowBackground";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import OverviewStrip from "./components/OverviewStrip";
import Overview from "./components/Overview";
import AnalysisSection from "./components/AnalysisSection";
import BugsSection from "./components/BugsSection";
import PrioritiesSection from "./components/PrioritiesSection";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".nav",
        { y: -24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-anim",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power3.out", delay: 0.15 }
      );

      gsap.utils.toArray(".reveal-section").forEach((section) => {
        const reveals = section.querySelectorAll(".reveal");
        if (!reveals.length) return;

        gsap.fromTo(
          reveals,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray(".issue-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="app" ref={appRef}>
      <GlowBackground />
      <div className="app-content">
        <Nav />
        <Hero />
        <OverviewStrip />
        <Overview />
        <AnalysisSection />
        <BugsSection />
        <PrioritiesSection />
        <Footer />
      </div>
    </div>
  );
}
