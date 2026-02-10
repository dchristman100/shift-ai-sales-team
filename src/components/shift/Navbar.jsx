import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(7,8,32,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        transition: "box-shadow 0.3s",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698b1e039556e19fb0ebf12c/7ffcc5375_FinalV2.png"
          alt="ShiFt"
          style={{ height: 36, width: "auto" }}
        />

        {/* Links + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {[
            { label: "How It Works", href: "#how-it-works" },
            { label: "Results", href: "#proof" },
            { label: "See It Live", href: "#demo" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="font-body nav-link-hidden"
              style={{
                color: "var(--gray)",
                fontSize: "0.82rem",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--gray)")}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#calculate"
            onClick={(e) => handleClick(e, "#calculate")}
            className="font-mono"
            style={{
              background: "var(--coral)",
              color: "#fff",
              fontSize: "0.75rem",
              fontWeight: 600,
              padding: "9px 20px",
              borderRadius: 8,
              textDecoration: "none",
              transition: "all 0.2s",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "var(--coral-glow)";
              e.target.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "var(--coral)";
              e.target.style.transform = "translateY(0)";
            }}
          >
            See Your Missed Call Cost →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .nav-link-hidden { display: none !important; }
        }
      `}</style>
    </nav>
  );
}