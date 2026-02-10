import React, { useEffect, useRef, useState } from "react";

const messages = [
  { sender: "ai", text: "Hi! Thanks for reaching out about your roofing project. I'm here to help — can you tell me a bit about what's going on with your roof?" },
  { sender: "user", text: "Yeah, we had a bad storm last week. Some shingles came off and there might be a leak in the attic." },
  { sender: "ai", text: "Got it — storm damage with potential leak. That's definitely urgent. What's the approximate size of your roof? And is this residential or commercial?" },
  { sender: "user", text: "Residential. About 2,800 sq ft I think." },
  { sender: "ai", text: "Perfect. And do you have a homeowner's insurance policy that covers storm damage? Most do, and we work with all major carriers." },
  { sender: "user", text: "Yeah, State Farm." },
  { sender: "ai", text: "Great news — you qualify for a priority inspection. I have an opening tomorrow at 10am with our senior estimator who specializes in storm damage + insurance claims. He'll have your full project details before he arrives. Want me to lock that in?", booking: true },
];

const delays = [0.3, 1.2, 2.4, 3.6, 4.8, 6.0, 7.2];

export default function DemoSection() {
  const sectionRef = useRef(null);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setAnimKey((k) => k + 1);
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="demo" ref={sectionRef} style={{ padding: "100px 32px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {/* Header */}
        <div className="anim" style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="font-mono" style={{ fontSize: "0.62rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--coral)", marginBottom: 16 }}>
            See It In Action
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.03em" }}>
            Watch ShiFt <span style={{ color: "var(--coral)" }}>convert a lead</span>
            <br />in real time
          </h2>
        </div>

        {/* Demo Box */}
        <div
          className="anim anim-delay-1"
          style={{
            maxWidth: 800,
            margin: "0 auto",
            borderRadius: 20,
            background: "linear-gradient(135deg, rgba(245,74,72,0.05), rgba(250,152,47,0.03), rgba(72,187,120,0.02))",
            border: "1px solid rgba(245,74,72,0.15)",
            overflow: "hidden",
          }}
        >
          {/* Top gradient bar */}
          <div style={{ height: 3, background: "linear-gradient(90deg, var(--coral), var(--orange), var(--green))" }} />

          <div className="demo-inner" style={{ padding: "48px 40px", display: "flex", gap: 40, flexWrap: "wrap", justifyContent: "center" }}>
            {/* Phone */}
            <div
              style={{
                width: 280,
                height: 500,
                borderRadius: 36,
                background: "var(--navy)",
                border: "2px solid rgba(255,255,255,0.1)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              {/* Phone Header */}
              <div style={{ padding: "16px 16px 12px", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div
                  className="font-display"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--coral), var(--orange))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "0.7rem",
                    color: "#fff",
                  }}
                >
                  S
                </div>
                <div>
                  <div className="font-body" style={{ fontWeight: 600, fontSize: "0.82rem" }}>ShiFt AI</div>
                  <div className="font-body" style={{ fontSize: "0.65rem", color: "var(--green)", display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--green)", display: "inline-block" }} />
                    Active now
                  </div>
                </div>
              </div>

              {/* Chat Area */}
              <div style={{ flex: 1, overflowY: "auto", padding: "12px 12px", display: "flex", flexDirection: "column", gap: 8 }}>
                {messages.map((msg, i) => {
                  const isUser = msg.sender === "user";
                  const isBooking = msg.booking;
                  let bgColor = isUser
                    ? "rgba(255,255,255,0.08)"
                    : isBooking
                    ? "rgba(72,187,120,0.12)"
                    : "rgba(245,74,72,0.12)";
                  let borderColor = isUser
                    ? "rgba(255,255,255,0.08)"
                    : isBooking
                    ? "rgba(72,187,120,0.2)"
                    : "rgba(245,74,72,0.15)";

                  return (
                    <div
                      key={`${animKey}-${i}`}
                      style={{
                        alignSelf: isUser ? "flex-end" : "flex-start",
                        maxWidth: "85%",
                        padding: "10px 14px",
                        borderRadius: 14,
                        borderBottomLeftRadius: !isUser ? 4 : 14,
                        borderBottomRightRadius: isUser ? 4 : 14,
                        background: bgColor,
                        border: `1px solid ${borderColor}`,
                        opacity: 0,
                        animation: `bubbleIn 0.4s ease-out ${delays[i]}s forwards`,
                      }}
                    >
                      <span
                        className="font-body"
                        style={{
                          fontSize: "0.78rem",
                          lineHeight: 1.5,
                          color: isUser ? "rgba(248,249,252,0.7)" : "var(--white)",
                        }}
                      >
                        {msg.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Context */}
            <div style={{ maxWidth: 300, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div className="font-mono" style={{ fontSize: "0.68rem", fontWeight: 500, color: "var(--gray)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
                What just happened
              </div>
              <h3 className="font-display" style={{ fontWeight: 800, fontSize: "1.05rem", marginBottom: 20, letterSpacing: "-0.01em" }}>
                30 seconds to pre-sold appointment
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                {[
                  { num: "1.", color: "var(--coral)", text: "Captured the lead instantly — no voicemail" },
                  { num: "2.", color: "var(--orange)", text: "Qualified: storm damage, 2800sqft, insured (State Farm)" },
                  { num: "3.", color: "var(--green)", text: "Booked with context — estimator walks in prepared" },
                ].map((step) => (
                  <div key={step.num} style={{ display: "flex", gap: 8, fontSize: "0.8rem" }}>
                    <span className="font-body" style={{ fontWeight: 600, color: step.color }}>{step.num}</span>
                    <span className="font-body" style={{ color: "rgba(248,249,252,0.6)" }}>{step.text}</span>
                  </div>
                ))}
              </div>

              {/* Result Box */}
              <div style={{ padding: "12px 16px", borderRadius: 10, background: "rgba(72,187,120,0.06)", border: "1px solid rgba(72,187,120,0.15)" }}>
                <div className="font-mono" style={{ fontSize: "0.65rem", fontWeight: 600, color: "var(--green)", textTransform: "uppercase", marginBottom: 6 }}>
                  Result
                </div>
                <div className="font-body" style={{ fontWeight: 600, fontSize: "0.85rem", marginBottom: 4 }}>
                  Pre-sold appointment.
                </div>
                <div className="font-body" style={{ fontSize: "0.75rem", color: "var(--gray)", lineHeight: 1.5 }}>
                  Not a message. Not a callback request. A booked, qualified appointment with full project context.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .demo-inner {
            padding: 24px 16px !important;
            flex-direction: column !important;
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
}