import React from "react";

const rows = [
  { feature: "Answers calls 24/7", competitor: { type: "check" }, shift: { type: "check" } },
  { feature: "Takes messages", competitor: { type: "check" }, shift: { type: "check" } },
  { feature: "Qualifies leads by fit + intent", competitor: { type: "x" }, shift: { type: "coral", text: "✓ Scored 0-100" } },
  { feature: "Converts leads to appointments", competitor: { type: "x" }, shift: { type: "coral", text: "✓ Pre-sold" } },
  { feature: "Multi-channel follow-up", competitor: { type: "x" }, shift: { type: "coral", text: "✓ Call + SMS + Email" } },
  { feature: "Diagnoses revenue gaps", competitor: { type: "x" }, shift: { type: "coral", text: "✓ Calculator + AI" } },
  { feature: "Books pre-sold appointments", competitor: { type: "dim", text: "Basic scheduling" }, shift: { type: "coral", text: "✓ 80%+ show rate" } },
  { feature: "Roofing-specific intelligence", competitor: { type: "dim", text: "Generic scripts" }, shift: { type: "coral", text: "✓ Built for roofers" } },
  { feature: "Prospect arrives pre-educated", competitor: { type: "x" }, shift: { type: "coral", text: "✓ Ready to close" } },
  { feature: "Result", competitor: { type: "dim", text: "Messages collected" }, shift: { type: "green", text: "Revenue on calendar" }, isResult: true },
];

function CellValue({ cell }) {
  if (cell.type === "check") return <span style={{ color: "var(--green)", fontSize: "1rem" }}>✓</span>;
  if (cell.type === "x") return <span style={{ color: "rgba(245,74,72,0.4)", fontSize: "1rem" }}>✗</span>;
  if (cell.type === "coral") return <span style={{ color: "var(--coral)", fontWeight: 700, fontSize: "0.85rem" }}>{cell.text}</span>;
  if (cell.type === "green") return <span style={{ color: "var(--green)", fontWeight: 600, fontSize: "0.85rem" }}>{cell.text}</span>;
  if (cell.type === "dim") return <span style={{ color: "var(--gray)", fontSize: "0.85rem" }}>{cell.text}</span>;
  return null;
}

export default function ComparisonSection() {
  return (
    <section id="comparison" style={{ padding: "100px 32px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {/* Header */}
        <div className="anim" style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="font-mono" style={{ fontSize: "0.62rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--coral)", marginBottom: 16 }}>
            Not Another AI Receptionist
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.03em" }}>
            AI Receptionists <span style={{ color: "var(--gray)", fontWeight: 400 }}>answer.</span>
            <br />
            ShiFt <span style={{ color: "var(--coral)" }}>converts.</span>
          </h2>
        </div>

        {/* Table */}
        <div
          className="anim anim-delay-1"
          style={{
            maxWidth: 900,
            margin: "0 auto",
            borderRadius: 16,
            border: "1px solid var(--glass-border)",
            overflow: "hidden",
          }}
        >
          {/* Header Row */}
          <div className="comp-table-row" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr" }}>
            <div style={{ padding: "18px 22px", background: "rgba(255,255,255,0.03)" }} />
            <div
              className="font-display"
              style={{
                padding: "18px 22px",
                background: "rgba(255,255,255,0.03)",
                textAlign: "center",
                fontWeight: 700,
                fontSize: "0.9rem",
                borderLeft: "1px solid rgba(255,255,255,0.04)",
                color: "var(--gray)",
              }}
            >
              AI Receptionists
            </div>
            <div
              className="font-display"
              style={{
                padding: "18px 22px",
                background: "rgba(245,74,72,0.08)",
                textAlign: "center",
                fontWeight: 700,
                fontSize: "0.9rem",
                borderLeft: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <span style={{ color: "var(--coral)" }}>ShiFt</span> NeuralOS™
            </div>
          </div>

          {/* Data Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="comp-table-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 1fr 1fr",
                borderTop: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <div
                className="font-body"
                style={{
                  padding: "18px 22px",
                  fontSize: "0.78rem",
                  fontWeight: row.isResult ? 600 : 500,
                  color: row.isResult ? "var(--white)" : "var(--gray)",
                }}
              >
                {row.feature}
              </div>
              <div style={{ padding: "18px 22px", textAlign: "center", borderLeft: "1px solid rgba(255,255,255,0.04)" }}>
                <CellValue cell={row.competitor} />
              </div>
              <div style={{ padding: "18px 22px", textAlign: "center", borderLeft: "1px solid rgba(255,255,255,0.04)", background: "rgba(245,74,72,0.03)" }}>
                <CellValue cell={row.shift} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .comp-table-row {
            grid-template-columns: 1.2fr 0.9fr 0.9fr !important;
          }
          .comp-table-row > div {
            padding: 12px 10px !important;
            font-size: 0.7rem !important;
          }
        }
      `}</style>
    </section>
  );
}