import React, { useEffect } from "react";
import Navbar from "../components/shift/Navbar";
import HeroSection from "../components/shift/HeroSection";
import ProblemSection from "../components/shift/ProblemSection";
import ComparisonSection from "../components/shift/ComparisonSection";
import MechanismSection from "../components/shift/MechanismSection";
import DemoSection from "../components/shift/DemoSection";
import ProofSection from "../components/shift/ProofSection";
import TimelineSection from "../components/shift/TimelineSection";
import CtaSection from "../components/shift/CtaSection";
import Footer from "../components/shift/Footer";

export default function Home() {
  useEffect(() => {
    // Scroll-triggered animations
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".anim").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--navy-deep)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Atmosphere */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Mesh Gradient 1 — coral, top-right */}
        <div
          style={{
            position: "absolute",
            top: "-15%",
            right: "-10%",
            width: 1100,
            height: 1100,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,74,72,0.07) 0%, transparent 70%)",
            animation: "meshDrift1 25s ease-in-out infinite alternate",
          }}
        />
        {/* Mesh Gradient 2 — orange, bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            left: "-10%",
            width: 900,
            height: 900,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(250,152,47,0.04) 0%, transparent 70%)",
            animation: "meshDrift2 20s ease-in-out infinite alternate-reverse",
          }}
        />
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <ComparisonSection />
        <MechanismSection />
        <DemoSection />
        <ProofSection />
        <TimelineSection />
        <CtaSection />
        <Footer />
      </div>
    </div>
  );
}