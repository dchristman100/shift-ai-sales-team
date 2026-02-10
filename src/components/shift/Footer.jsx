import React from "react";

export default function Footer() {
  return (
    <footer style={{ padding: 40, borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div className="font-display" style={{ fontSize: "1rem", fontWeight: 800, marginBottom: 10 }}>
          <span style={{ color: "var(--coral)" }}>ShiFt</span>
          <span style={{ color: "var(--white)" }}> NeuralOS</span>
          <span style={{ color: "var(--gray)", fontSize: "0.55rem", verticalAlign: "super" }}>™</span>
        </div>
        <div className="font-body" style={{ fontSize: "0.75rem", color: "var(--gray)", marginBottom: 8 }}>
          Your AI sales team that never sleeps — built exclusively for roofing contractors.
        </div>
        <div className="font-body" style={{ fontSize: "0.75rem", color: "var(--gray)" }}>
          © 2026 eWorkForce Technologies Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}