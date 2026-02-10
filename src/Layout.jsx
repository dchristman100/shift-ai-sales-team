import React from "react";

export default function Layout({ children }) {
  return (
    <div className="shift-app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
        
        :root {
          --navy: #0D0F33;
          --navy-deep: #070820;
          --navy-mid: #141650;
          --navy-light: #1E2066;
          --coral: #F54A48;
          --coral-glow: #FF6B69;
          --coral-dark: #D93D3B;
          --coral-soft: rgba(245,74,72,0.10);
          --orange: #FA982F;
          --orange-glow: #FFB05E;
          --orange-soft: rgba(250,152,47,0.10);
          --green: #48BB78;
          --green-soft: rgba(72,187,120,0.10);
          --blue: #60A5FA;
          --blue-soft: rgba(96,165,250,0.10);
          --white: #F8F9FC;
          --gray: #9DA3B4;
          --gray-dark: #6B7280;
          --glass: rgba(255,255,255,0.04);
          --glass-border: rgba(255,255,255,0.08);
        }

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: var(--navy-deep);
          color: var(--white);
          font-family: 'DM Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        .font-display {
          font-family: 'Montserrat Alternates', sans-serif;
        }

        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        .font-body {
          font-family: 'DM Sans', sans-serif;
        }

        .gradient-text-coral {
          background: linear-gradient(135deg, var(--coral), var(--orange));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }

        @keyframes meshDrift1 {
          from { transform: translate(0, 0); }
          to { transform: translate(30px, 20px); }
        }

        @keyframes meshDrift2 {
          from { transform: translate(0, 0); }
          to { transform: translate(-30px, -20px); }
        }

        @keyframes bubbleIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .anim {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .anim.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .anim-delay-1 { transition-delay: 0.1s; }
        .anim-delay-2 { transition-delay: 0.2s; }
        .anim-delay-3 { transition-delay: 0.3s; }
        .anim-delay-4 { transition-delay: 0.4s; }
      `}</style>
      {children}
    </div>
  );
}