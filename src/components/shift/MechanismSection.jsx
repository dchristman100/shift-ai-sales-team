import React from "react";

const cards = [
  {
    tag: "Layer 1 — Capture",
    tagColor: "var(--coral)",
    emoji: "⚡",
    emojiBg: "var(--coral-soft)",
    title: "Instant Response",
    body: "Every lead gets a response in under 30 seconds — call, text, or web. No voicemail. No 'we'll call you back.' Your AI answers with roofing intelligence, not a generic script.",
    badge: "0% calls to voicemail",
    badgeColor: "var(--coral)",
    badgeBg: "var(--coral-soft)",
  },
  {
    tag: "Layer 2 — Convert",
    tagColor: "var(--orange)",
    emoji: "🎯",
    emojiBg: "var(--orange-soft)",
    title: "Smart Qualification",
    body: "AI scores every lead on fit (ICP match, project size, urgency) and intent (timeline, budget signal, competitor status). Only qualified prospects reach your calendar. No tire-kickers. No $500 patch jobs.",
    badge: "70+ intent score to book",
    badgeColor: "var(--orange)",
    badgeBg: "var(--orange-soft)",
  },
  {
    tag: "Layer 3 — Book",
    tagColor: "var(--green)",
    emoji: "📅",
    emojiBg: "var(--green-soft)",
    title: "Pre-Sold Appointments",
    body: "Qualified leads get booked directly onto your calendar — with full context. Project type, budget range, timeline, urgency level. You don't educate. You diagnose and close. 8-10 minutes, not 45.",
    badge: "80%+ show rate",
    badgeColor: "var(--green)",
    badgeBg: "var(--green-soft)",
  },
];

export default function MechanismSection() {
  return (
    <section id="how-it-works" style={{ padding: "100px 32px", background: "rgba(250,152,47,0.02)" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {/* Header */}
        <div className="anim" style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="font-mono" style={{ fontSize: "0.62rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--coral)", marginBottom: 16 }}>
            The Engine Under The Hood
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.03em", marginBottom: 16 }}>
            Three layers. One outcome:
            <br />
            <span style={{ color: "var(--coral)" }}>Pre-sold appointments on your calendar.</span>
          </h2>
          <p className="font-body" style={{ fontSize: "1.05rem", color: "rgba(248,249,252,0.6)", maxWidth: 600, margin: "0 auto", lineHeight: 1.65 }}>
            AI receptionists stop at "message taken." ShiFt runs a 3-stage conversion engine that captures, qualifies, and books — so you walk into every call already knowing it's worth your time.
          </p>
        </div>

        {/* Cards */}
        <div className="mechanism-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 960, margin: "0 auto" }}>
          {cards.map((card, i) => (
            <div
              key={i}
              className={`anim anim-delay-${i + 1}`}
              style={{
                padding: "32px 28px",
                borderRadius: 16,
                background: "var(--glass)",
                border: "1px solid var(--glass-border)",
                transition: "all 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--glass-border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div className="font-mono" style={{ fontSize: "0.6rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.15em", color: card.tagColor, marginBottom: 16 }}>
                {card.tag}
              </div>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: card.emojiBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: 18 }}>
                {card.emoji}
              </div>
              <h3 className="font-display" style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 12, letterSpacing: "-0.01em" }}>
                {card.title}
              </h3>
              <p className="font-body" style={{ fontSize: "0.88rem", color: "rgba(248,249,252,0.55)", lineHeight: 1.65, marginBottom: 20 }}>
                {card.body}
              </p>
              <div className="font-mono" style={{ fontSize: "0.72rem", fontWeight: 600, color: card.badgeColor, background: card.badgeBg, padding: "8px 14px", borderRadius: 8, display: "inline-block" }}>
                {card.badge}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .mechanism-grid {
            grid-template-columns: 1fr !important;
            max-width: 500px !important;
          }
        }
      `}</style>
    </section>
  );
}