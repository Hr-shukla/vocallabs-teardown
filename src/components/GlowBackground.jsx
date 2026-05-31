import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GlowBackground() {
  const orb1 = useRef(null);
  const orb2 = useRef(null);
  const orb3 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(orb1.current, {
        x: 60,
        y: 40,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(orb2.current, {
        x: -50,
        y: -30,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(orb3.current, {
        x: 30,
        y: -50,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="glow-bg" aria-hidden="true">
        <div ref={orb1} className="glow-orb glow-orb--1" />
        <div ref={orb2} className="glow-orb glow-orb--2" />
        <div ref={orb3} className="glow-orb glow-orb--3" />
      </div>
      <div className="grid-overlay" aria-hidden="true" />
    </>
  );
}
