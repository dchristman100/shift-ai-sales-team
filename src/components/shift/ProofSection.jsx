import React from "react";

const metrics = [
  { value: "9.3×", color: "var(--coral)", label: "Revenue growth with ShiFt infrastructure" },
  { value: "<30s", color: "var(--orange)", label: "Average response time (was 4+ hours)" },
  { value: "0%", color: "var(--green)", label: "Calls going to voicemail (was 40%+)" },
  { value: "80%+", color: "var(--blue)", label: "Appointment show rate (industry avg: 50-60%)" },
];

export default function ProofSection() {
  return (
    <section id="proof" style={{ padding: "100px 32px", background: "rgba(72,187,120,0.02)" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {/* Header */}
        <div className="anim" style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="font-mono" style={{ fontSize: "0.62rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--coral)", marginBottom: 16 }}>
            Proven Results
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.03em" }}>
            From $750K to $7M
            <br />in <span style={{ color: "var(--coral)" }}>six years.</span>
          </h2>
        </div>

        {/* Proof Card */}
        <div
          className="anim anim-delay-1 proof-card"
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            padding: 48,
            borderRadius: 20,
            background: "var(--glass)",
            border: "1px solid var(--glass-border)",
          }}
        >
          {/* Left — Metrics */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {metrics.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "16px 20px",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <div
                  className="font-display"
                  style={{ fontWeight: 900, fontSize: "1.6rem", color: m.color, minWidth: 80 }}
                >
                  {m.value}
                </div>
                <div className="font-body" style={{ fontSize: "0.82rem", color: "rgba(248,249,252,0.6)", lineHeight: 1.4 }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Right — Story */}
          <div style={{ borderLeft: "3px solid var(--coral)", paddingLeft: 24 }}>
            <h3 className="font-display" style={{ fontWeight: 700, fontSize: "1.15rem", marginBottom: 18 }}>
              Titan Roofing — Case Study
            </h3>
            <p className="font-body" style={{ fontSize: "0.92rem", color: "rgba(248,249,252,0.55)", lineHeight: 1.7, marginBottom: 16 }}>
              Titan was a $750K residential roofing company losing 40% of inbound leads to voicemail. Their owner was answering calls between roof inspections, missing storm damage emergencies, and watching competitors close jobs he never knew existed.
            </p>
            <p className="font-body" style={{ fontSize: "0.92rem", color: "rgba(248,249,252,0.55)", lineHeight: 1.7, marginBottom: 20 }}>
              ShiFt replaced hope-based lead management with an AI revenue system that captures every lead, qualifies by fit and intent, and books pre-sold appointments — 24 hours a day, 365 days a year.
            </p>
            <p className="font-body" style={{ fontSize: "0.88rem", color: "rgba(248,249,252,0.45)", lineHeight: 1.6, fontStyle: "italic" }}>
              "We didn't hire more salespeople. We didn't increase our ad spend. We just stopped losing the leads we were already paying for."
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proof-card {
            grid-template-columns: 1fr !important;
            padding: 28px 24px !important;
          }
          .proof-card > div:last-child {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 3px solid var(--coral);
            padding-top: 24px;
          }
        }
      `}</style>
    </section>
  );
}