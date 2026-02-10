import React from "react";

const leaks = [
  {
    emoji: "📵",
    bgColor: "var(--coral-soft)",
    title: "Missed Calls → Lost Revenue",
    desc: "Every call that hits voicemail is $3,500+ walking to your competitor. 40% of your leads never hear your voice.",
    cost: "~$14,000/month lost",
  },
  {
    emoji: "⏱",
    bgColor: "var(--orange-soft)",
    title: "Slow Response → Dead Lead",
    desc: "Prospects who wait 30+ minutes are 21x less likely to convert. Your callback delay is their booking confirmation — with someone else.",
    cost: "~$8,500/month lost",
  },
  {
    emoji: "👻",
    bgColor: "var(--blue-soft)",
    title: "No Follow-Up → Forgotten",
    desc: "80% of deals require 5+ touchpoints. Most contractors stop at 1. Interested leads go cold — not because they said no, but because nobody asked again.",
    cost: "~$11,000/month lost",
  },
];

export default function ProblemSection() {
  return (
    <section
      id="problem"
      style={{
        padding: "100px 32px",
        background: "rgba(245,74,72,0.02)",
      }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {/* Header */}
        <div className="anim" style={{ marginBottom: 48 }}>
          <div
            className="font-mono"
            style={{
              fontSize: "0.62rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--coral)",
              marginBottom: 16,
            }}
          >
            The Revenue You Can't See
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              marginBottom: 16,
            }}
          >
            Your competitors don't have
            <br />
            better marketing. They have <span style={{ color: "var(--coral)" }}>faster phones.</span>
          </h2>
          <p
            className="font-body"
            style={{
              fontSize: "1.05rem",
              color: "rgba(248,249,252,0.6)",
              maxWidth: 600,
              lineHeight: 1.75,
            }}
          >
            62% of contractor calls go unanswered. The average callback takes 4.2 hours. By then, 67% of your prospects have already booked with someone else. That's not a marketing problem — it's a revenue leak.
          </p>
        </div>

        {/* Grid */}
        <div className="problem-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          {/* Left — Leak Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {leaks.map((leak, i) => (
              <div
                key={i}
                className={`anim anim-delay-${i + 1}`}
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "18px 22px",
                  borderRadius: 12,
                  background: "var(--glass)",
                  border: "1px solid var(--glass-border)",
                  transition: "all 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(245,74,72,0.15)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--glass-border)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    minWidth: 42,
                    borderRadius: 10,
                    background: leak.bgColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  {leak.emoji}
                </div>
                <div>
                  <div className="font-body" style={{ fontWeight: 600, fontSize: "0.92rem", color: "var(--white)", marginBottom: 4 }}>
                    {leak.title}
                  </div>
                  <div className="font-body" style={{ fontSize: "0.78rem", color: "var(--gray)", lineHeight: 1.5, marginBottom: 6 }}>
                    {leak.desc}
                  </div>
                  <div className="font-mono" style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--coral)" }}>
                    {leak.cost}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Visual */}
          <div
            className="anim anim-delay-2"
            style={{
              background: "linear-gradient(135deg, rgba(245,74,72,0.06), rgba(250,152,47,0.03))",
              border: "1px solid rgba(245,74,72,0.12)",
              borderRadius: 16,
              padding: 40,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="font-display gradient-text-coral"
              style={{
                fontSize: "clamp(3rem, 8vw, 5rem)",
                fontWeight: 900,
                lineHeight: 1,
                marginBottom: 12,
              }}
            >
              $33K+
            </div>
            <div className="font-body" style={{ fontWeight: 600, fontSize: "1.1rem", color: "var(--white)", marginBottom: 12 }}>
              Monthly Revenue Leak
            </div>
            <div className="font-body" style={{ fontSize: "0.85rem", color: "var(--gray)", maxWidth: 320, lineHeight: 1.5 }}>
              The average $2M roofing company loses $30K-$100K/month in revenue they can't see — from leads they already paid for.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .problem-grid {
            grid-template-columns: 1fr !important;
          }
          .problem-grid > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}