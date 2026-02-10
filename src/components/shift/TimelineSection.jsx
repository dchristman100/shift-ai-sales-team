import React from "react";

const steps = [
  { emoji: "🧮", name: "Calculate Your Gap", desc: "60-second calculator shows exactly how much revenue you're leaking each month", borderColor: "rgba(245,74,72,0.3)" },
  { emoji: "📞", name: "Reality Session", desc: "10-minute live diagnosis — we show you where the leaks are and how to plug them", borderColor: "rgba(250,152,47,0.3)" },
  { emoji: "⚙️", name: "Build & Launch", desc: "Your AI sales team goes live — trained on your services, pricing, and territory", borderColor: "rgba(72,187,120,0.3)" },
  { emoji: "📈", name: "Grow", desc: "Pre-sold appointments start appearing on your calendar. You close. We optimize.", borderColor: "rgba(96,165,250,0.3)" },
];

export default function TimelineSection() {
  return (
    <section id="timeline" style={{ padding: "100px 32px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {/* Header */}
        <div className="anim" style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="font-mono" style={{ fontSize: "0.62rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--coral)", marginBottom: 16 }}>
            Getting Started
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.03em" }}>
            Live in days. <span style={{ color: "var(--coral)" }}>Not months.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="timeline-container" style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          {/* Connecting line */}
          <div
            className="timeline-line"
            style={{
              position: "absolute",
              top: 32,
              left: "calc(12.5% + 16px)",
              right: "calc(12.5% + 16px)",
              height: 2,
              background: "linear-gradient(90deg, var(--coral), var(--orange), var(--green))",
              zIndex: 0,
            }}
          />

          <div style={{ display: "flex", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
            {steps.map((step, i) => (
              <div
                key={i}
                className={`anim anim-delay-${i + 1} timeline-step`}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "var(--navy-deep)",
                    border: `2px solid ${step.borderColor}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    marginBottom: 16,
                    transition: "transform 0.3s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  {step.emoji}
                </div>

                <div className="font-body" style={{ fontWeight: 600, fontSize: "0.88rem", marginBottom: 8 }}>
                  {step.name}
                </div>
                <div className="font-body" style={{ fontSize: "0.75rem", color: "var(--gray)", lineHeight: 1.5, maxWidth: 180 }}>
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .timeline-line { display: none !important; }
          .timeline-container > div:last-child {
            flex-direction: column !important;
            align-items: center !important;
            gap: 32px !important;
          }
          .timeline-step {
            flex: none !important;
            width: 100% !important;
            max-width: 300px !important;
          }
        }
      `}</style>
    </section>
  );
}