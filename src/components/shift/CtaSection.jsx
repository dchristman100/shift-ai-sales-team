import React from "react";

export default function CtaSection() {
  return (
    <section id="calculate" style={{ padding: "80px 32px 100px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div
          className="anim"
          style={{
            maxWidth: 700,
            margin: "0 auto",
            borderRadius: 24,
            background: "linear-gradient(135deg, rgba(245,74,72,0.08), rgba(250,152,47,0.05), rgba(72,187,120,0.03))",
            border: "1px solid rgba(245,74,72,0.15)",
            overflow: "hidden",
          }}
        >
          {/* Top gradient bar */}
          <div style={{ height: 3, background: "linear-gradient(90deg, var(--coral), var(--orange), var(--green))" }} />

          <div style={{ padding: "56px 48px", textAlign: "center" }}>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                marginBottom: 18,
              }}
            >
              How much revenue is leaking
              <br />
              from your business <span style={{ color: "var(--coral)" }}>right now?</span>
            </h2>

            <p
              className="font-body"
              style={{
                fontSize: "1rem",
                color: "rgba(248,249,252,0.5)",
                maxWidth: 480,
                margin: "0 auto 32px",
                lineHeight: 1.65,
              }}
            >
              Most roofing companies lose $30K-$100K/month in revenue they can't see. The calculator takes 60 seconds and shows you exactly where it's going.
            </p>

            <a
              href="https://calc.shiftnow.io?utm_source=landing&utm_medium=cta&utm_campaign=ai-sales-team"
              className="font-mono"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, var(--coral), var(--coral-dark))",
                color: "#fff",
                fontSize: "0.9rem",
                fontWeight: 600,
                padding: "16px 36px",
                borderRadius: 10,
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(245,74,72,0.25)",
                transition: "all 0.25s",
                letterSpacing: "0.02em",
                marginBottom: 16,
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
              Calculate My Revenue Gap →
            </a>

            <div className="font-mono" style={{ fontSize: "0.72rem", color: "var(--gray)" }}>
              ⏱ <span style={{ color: "var(--orange)" }}>60 seconds</span> • No email required to start
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}