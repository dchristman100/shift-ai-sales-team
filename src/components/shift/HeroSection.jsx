import React from "react";

export default function HeroSection() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      style={{
        padding: "160px 32px 100px",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        {/* Tag */}
        <div className="anim" style={{ marginBottom: 28 }}>
          <span
            className="font-mono"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "var(--coral-soft)",
              border: "1px solid rgba(245,74,72,0.2)",
              padding: "7px 18px",
              borderRadius: 24,
              fontSize: "0.68rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--coral)",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--coral)",
                animation: "pulse-dot 2s ease-in-out infinite",
              }}
            />
            Built for Roofing Contractors
          </span>
        </div>

        {/* Headline */}
        <h1
          className="anim anim-delay-1 font-display"
          style={{
            fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: "-0.04em",
            marginBottom: 24,
          }}
        >
          <span style={{ color: "var(--white)" }}>An AI Sales Team</span>
          <br />
          <span className="gradient-text-coral">That Never Sleeps</span>
        </h1>

        {/* Subheadline */}
        <p
          className="anim anim-delay-2 font-body"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            lineHeight: 1.7,
            color: "rgba(248,249,252,0.65)",
            maxWidth: 640,
            margin: "0 auto 36px",
          }}
        >
          Responds to every lead in seconds, 24/7.{" "}
          <strong style={{ color: "var(--white)", fontWeight: 600 }}>
            Converts those leads into pre-sold appointments.
          </strong>{" "}
          Books them directly onto your calendar — while you're on the roof.
        </p>

        {/* CTAs */}
        <div
          className="anim anim-delay-3"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 14,
            flexWrap: "wrap",
            marginBottom: 40,
          }}
        >
          <a
            href="#calculate"
            onClick={(e) => handleScroll(e, "#calculate")}
            className="font-mono"
            style={{
              background: "linear-gradient(135deg, var(--coral), var(--coral-dark))",
              color: "#fff",
              fontSize: "0.82rem",
              fontWeight: 600,
              padding: "14px 32px",
              borderRadius: 10,
              textDecoration: "none",
              boxShadow: "0 4px 24px rgba(245,74,72,0.25)",
              transition: "all 0.25s",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 32px rgba(245,74,72,0.35)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 24px rgba(245,74,72,0.25)";
            }}
          >
            See What Missed Calls Are Costing You →
          </a>
          <a
            href="#demo"
            onClick={(e) => handleScroll(e, "#demo")}
            className="font-mono"
            style={{
              background: "var(--glass)",
              color: "var(--white)",
              fontSize: "0.82rem",
              fontWeight: 600,
              padding: "14px 32px",
              borderRadius: 10,
              textDecoration: "none",
              border: "1px solid var(--glass-border)",
              transition: "all 0.25s",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.2)";
              e.target.style.background = "rgba(255,255,255,0.06)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "var(--glass-border)";
              e.target.style.background = "var(--glass)";
            }}
          >
            ▶ Hear Your Next Missed Call Get Answered
          </a>
        </div>

        {/* Stats */}
        <div
          className="anim anim-delay-4"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 40,
            maxWidth: 700,
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            gap: 48,
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "<30s", color: "var(--coral)", label: "AI Response Time" },
            { value: "24/7", color: "var(--orange)", label: "Always On Coverage" },
            { value: "80%+", color: "var(--green)", label: "Appointment Show Rate" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                className="font-display"
                style={{ fontSize: "2rem", fontWeight: 900, color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="font-body" style={{ fontSize: "0.72rem", color: "var(--gray)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}