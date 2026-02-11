import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Export() {
  const [copied, setCopied] = useState(false);

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShiFt AI Sales Team - AI Revenue Operating System</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
    <style>
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
            line-height: 1.6;
        }

        .font-display { font-family: 'Montserrat Alternates', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .font-body { font-family: 'DM Sans', sans-serif; }

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

        /* Navbar */
        nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            background: rgba(7,8,32,0.85);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255,255,255,0.05);
            transition: box-shadow 0.3s;
        }

        nav.scrolled {
            box-shadow: 0 4px 30px rgba(0,0,0,0.3);
        }

        .nav-container {
            max-width: 1140px;
            margin: 0 auto;
            padding: 16px 32px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .nav-logo {
            height: 36px;
            width: auto;
        }

        .nav-links {
            display: flex;
            align-items: center;
            gap: 32px;
        }

        .nav-link {
            color: var(--gray);
            font-size: 0.82rem;
            text-decoration: none;
            transition: color 0.2s;
        }

        .nav-link:hover {
            color: var(--white);
        }

        .nav-cta {
            background: var(--coral);
            color: #fff;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 9px 20px;
            border-radius: 8px;
            text-decoration: none;
            transition: all 0.2s;
            letter-spacing: 0.02em;
            font-family: 'JetBrains Mono', monospace;
        }

        .nav-cta:hover {
            background: var(--coral-glow);
            transform: translateY(-1px);
        }

        /* Hero Section */
        #hero {
            padding: 160px 32px 100px;
            text-align: center;
            position: relative;
        }

        .hero-container {
            max-width: 820px;
            margin: 0 auto;
        }

        .hero-tag {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: var(--coral-soft);
            border: 1px solid rgba(245,74,72,0.2);
            padding: 7px 18px;
            border-radius: 24px;
            font-size: 0.68rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--coral);
            margin-bottom: 28px;
        }

        .pulse-dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: var(--coral);
            animation: pulse-dot 2s ease-in-out infinite;
        }

        .hero-h1 {
            font-size: clamp(2.2rem, 5.5vw, 4rem);
            font-weight: 900;
            line-height: 1.08;
            letter-spacing: -0.04em;
            margin-bottom: 24px;
        }

        .hero-subtitle {
            font-size: clamp(1rem, 2vw, 1.2rem);
            line-height: 1.7;
            color: rgba(248,249,252,0.65);
            max-width: 640px;
            margin: 0 auto 36px;
        }

        .hero-ctas {
            display: flex;
            justify-content: center;
            gap: 14px;
            flex-wrap: wrap;
            margin-bottom: 40px;
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--coral), var(--coral-dark));
            color: #fff;
            font-size: 0.82rem;
            font-weight: 600;
            padding: 14px 32px;
            border-radius: 10px;
            text-decoration: none;
            box-shadow: 0 4px 24px rgba(245,74,72,0.25);
            transition: all 0.25s;
            letter-spacing: 0.02em;
            font-family: 'JetBrains Mono', monospace;
            display: inline-block;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 32px rgba(245,74,72,0.35);
        }

        .btn-secondary {
            background: var(--glass);
            color: var(--white);
            font-size: 0.82rem;
            font-weight: 600;
            padding: 14px 32px;
            border-radius: 10px;
            text-decoration: none;
            border: 1px solid var(--glass-border);
            transition: all 0.25s;
            letter-spacing: 0.02em;
            font-family: 'JetBrains Mono', monospace;
            display: inline-block;
        }

        .btn-secondary:hover {
            border-color: rgba(255,255,255,0.2);
            background: rgba(255,255,255,0.06);
        }

        .hero-stats {
            border-top: 1px solid rgba(255,255,255,0.06);
            padding-top: 40px;
            max-width: 700px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            gap: 48px;
            flex-wrap: wrap;
        }

        .stat {
            text-align: center;
        }

        .stat-value {
            font-size: 2rem;
            font-weight: 900;
        }

        .stat-label {
            font-size: 0.72rem;
            color: var(--gray);
        }

        /* Problem Section */
        #problem {
            padding: 100px 32px;
        }

        .section-container {
            max-width: 1140px;
            margin: 0 auto;
        }

        .section-header {
            text-align: center;
            margin-bottom: 64px;
        }

        .section-tag {
            font-size: 0.62rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: var(--coral);
            margin-bottom: 16px;
        }

        .section-h2 {
            font-size: clamp(1.6rem, 3.5vw, 2.4rem);
            font-weight: 800;
            line-height: 1.12;
            letter-spacing: -0.03em;
            margin-bottom: 20px;
        }

        .section-desc {
            font-size: 1rem;
            color: rgba(248,249,252,0.5);
            max-width: 560px;
            margin: 0 auto;
            line-height: 1.7;
        }

        .leak-grid {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 40px;
            align-items: start;
        }

        .leak-card {
            background: var(--glass);
            border: 1px solid var(--glass-border);
            border-radius: 16px;
            padding: 28px;
            margin-bottom: 20px;
        }

        .leak-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 14px;
        }

        .leak-title {
            font-size: 1rem;
            font-weight: 700;
        }

        .leak-impact {
            font-size: 0.7rem;
            font-weight: 500;
            padding: 4px 12px;
            border-radius: 12px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .leak-desc {
            font-size: 0.85rem;
            color: var(--gray);
            line-height: 1.6;
            margin-bottom: 16px;
        }

        .leak-cost {
            font-size: 0.72rem;
            color: var(--coral);
            font-weight: 600;
        }

        .total-leak-card {
            background: linear-gradient(135deg, rgba(245,74,72,0.12), rgba(250,152,47,0.08));
            border: 2px solid var(--coral);
            border-radius: 20px;
            padding: 40px 32px;
            text-align: center;
            position: sticky;
            top: 120px;
        }

        /* Comparison Table */
        .comp-table {
            max-width: 900px;
            margin: 0 auto;
            border-radius: 16px;
            border: 1px solid var(--glass-border);
            overflow: hidden;
        }

        .comp-row {
            display: grid;
            grid-template-columns: 1.4fr 1fr 1fr;
            border-top: 1px solid rgba(255,255,255,0.04);
        }

        .comp-row:first-child {
            border-top: none;
        }

        .comp-cell {
            padding: 18px 22px;
            font-size: 0.78rem;
        }

        .comp-header {
            background: rgba(255,255,255,0.03);
            font-weight: 700;
            font-size: 0.9rem;
            text-align: center;
        }

        .comp-shift-header {
            background: rgba(245,74,72,0.08);
        }

        .comp-shift-cell {
            background: rgba(245,74,72,0.03);
        }

        .comp-cell-bordered {
            border-left: 1px solid rgba(255,255,255,0.04);
        }

        /* Mechanism Cards */
        .mechanism-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
        }

        .mechanism-card {
            background: var(--glass);
            border: 1px solid var(--glass-border);
            border-radius: 16px;
            padding: 32px 28px;
            transition: all 0.3s;
            cursor: pointer;
        }

        .mechanism-card:hover {
            transform: translateY(-4px);
            border-color: rgba(255,255,255,0.15);
        }

        .mechanism-emoji {
            font-size: 2.5rem;
            margin-bottom: 20px;
            display: block;
        }

        .mechanism-stage {
            font-size: 0.65rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            margin-bottom: 12px;
        }

        .mechanism-title {
            font-size: 1.3rem;
            font-weight: 800;
            margin-bottom: 14px;
            line-height: 1.2;
        }

        .mechanism-desc {
            font-size: 0.82rem;
            color: var(--gray);
            line-height: 1.65;
        }

        /* CTA Section */
        .cta-box {
            max-width: 700px;
            margin: 0 auto;
            border-radius: 24px;
            background: linear-gradient(135deg, rgba(245,74,72,0.08), rgba(250,152,47,0.05), rgba(72,187,120,0.03));
            border: 1px solid rgba(245,74,72,0.15);
            overflow: hidden;
        }

        .cta-gradient-bar {
            height: 3px;
            background: linear-gradient(90deg, var(--coral), var(--orange), var(--green));
        }

        .cta-content {
            padding: 56px 48px;
            text-align: center;
        }

        .cta-logo {
            width: auto;
            height: 64px;
            margin: 0 auto 24px;
            display: block;
        }

        .cta-h2 {
            font-size: clamp(1.4rem, 3vw, 2rem);
            font-weight: 900;
            line-height: 1.15;
            letter-spacing: -0.03em;
            margin-bottom: 18px;
        }

        .cta-desc {
            font-size: 1rem;
            color: rgba(248,249,252,0.5);
            max-width: 480px;
            margin: 0 auto 32px;
            line-height: 1.65;
        }

        .cta-note {
            font-size: 0.72rem;
            color: var(--gray);
            margin-top: 16px;
        }

        /* Footer */
        footer {
            padding: 60px 32px 40px;
            text-align: center;
            border-top: 1px solid rgba(255,255,255,0.05);
        }

        /* Responsive */
        @media (max-width: 900px) {
            .nav-link { display: none; }
            .leak-grid { grid-template-columns: 1fr; }
            .mechanism-grid { grid-template-columns: 1fr; }
            .comp-row { grid-template-columns: 1.2fr 0.9fr 0.9fr; }
            .comp-cell { padding: 12px 10px; font-size: 0.7rem; }
        }

        @media (max-width: 600px) {
            .hero-ctas { flex-direction: column; }
            .cta-content { padding: 40px 28px; }
        }
    </style>
</head>
<body>
    <!-- Background Elements -->
    <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; overflow: hidden; pointer-events: none;">
        <div style="position: absolute; top: -20%; left: -10%; width: 60%; height: 60%; background: radial-gradient(circle, rgba(245,74,72,0.08) 0%, transparent 70%); filter: blur(80px);"></div>
        <div style="position: absolute; bottom: -20%; right: -10%; width: 60%; height: 60%; background: radial-gradient(circle, rgba(250,152,47,0.06) 0%, transparent 70%); filter: blur(80px);"></div>
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px); background-size: 50px 50px; opacity: 0.3;"></div>
    </div>

    <!-- Navbar -->
    <nav id="navbar">
        <div class="nav-container">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698b1e039556e19fb0ebf12c/7ffcc5375_FinalV2.png" alt="ShiFt" class="nav-logo">
            <div class="nav-links">
                <a href="#how-it-works" class="nav-link font-body">How It Works</a>
                <a href="#proof" class="nav-link font-body">Results</a>
                <a href="#demo" class="nav-link font-body">See It Live</a>
                <a href="#calculate" class="nav-cta">See Your Missed Call Cost →</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero">
        <div class="hero-container">
            <div>
                <span class="hero-tag font-mono">
                    <span class="pulse-dot"></span>
                    Built for Roofing Contractors
                </span>
            </div>

            <h1 class="hero-h1 font-display">
                <span style="color: var(--white);">An AI Sales Team</span><br>
                <span class="gradient-text-coral">That Never Sleeps</span>
            </h1>

            <p class="hero-subtitle font-body">
                Responds to every lead in seconds, 24/7. 
                <strong style="color: var(--white); font-weight: 600;">Converts those leads into pre-sold appointments.</strong> 
                Books them directly onto your calendar — while you're on the roof.
            </p>

            <div class="hero-ctas">
                <a href="#calculate" class="btn-primary">See What Missed Calls Are Costing You →</a>
                <a href="#demo" class="btn-secondary">▶ Hear Your Next Missed Call Get Answered</a>
            </div>

            <div class="hero-stats">
                <div class="stat">
                    <div class="stat-value font-display" style="color: var(--coral);">&lt;30s</div>
                    <div class="stat-label font-body">AI Response Time</div>
                </div>
                <div class="stat">
                    <div class="stat-value font-display" style="color: var(--orange);">24/7</div>
                    <div class="stat-label font-body">Always On Coverage</div>
                </div>
                <div class="stat">
                    <div class="stat-value font-display" style="color: var(--green);">80%+</div>
                    <div class="stat-label font-body">Appointment Show Rate</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Problem Section -->
    <section id="problem">
        <div class="section-container">
            <div class="section-header">
                <div class="section-tag font-mono">The Silent Revenue Killer</div>
                <h2 class="section-h2 font-display">
                    You're losing <span style="color: var(--coral);">$50K-$100K/month</span><br>
                    in revenue you can't see.
                </h2>
                <p class="section-desc font-body">
                    Most roofing contractors think their sales process is fine. But the data tells a different story. Every missed call, delayed response, and unqualified lead is money walking away.
                </p>
            </div>

            <div class="leak-grid">
                <div>
                    <div class="leak-card">
                        <div class="leak-header">
                            <div class="leak-title font-display">Missed Calls</div>
                            <span class="leak-impact font-mono" style="background: var(--coral-soft); color: var(--coral);">Critical</span>
                        </div>
                        <p class="leak-desc font-body">You're on a roof. At dinner. On another call. 50-70% of inbound leads never get answered.</p>
                        <div class="leak-cost font-mono">💸 Est. $30-40K/month lost</div>
                    </div>

                    <div class="leak-card">
                        <div class="leak-header">
                            <div class="leak-title font-display">Slow Follow-Up</div>
                            <span class="leak-impact font-mono" style="background: var(--orange-soft); color: var(--orange);">High</span>
                        </div>
                        <p class="leak-desc font-body">By the time you call back (hours or days later), they've already called 3 competitors.</p>
                        <div class="leak-cost font-mono">💸 Est. $15-25K/month lost</div>
                    </div>

                    <div class="leak-card">
                        <div class="leak-header">
                            <div class="leak-title font-display">Unqualified Leads</div>
                            <span class="leak-impact font-mono" style="background: var(--blue-soft); color: var(--blue);">Medium</span>
                        </div>
                        <p class="leak-desc font-body">Your team wastes hours chasing tire-kickers while real buyers slip through.</p>
                        <div class="leak-cost font-mono">💸 Est. $10-20K/month lost</div>
                    </div>

                    <div class="leak-card">
                        <div class="leak-header">
                            <div class="leak-title font-display">No-Show Appointments</div>
                            <span class="leak-impact font-mono" style="background: var(--green-soft); color: var(--green);">Medium</span>
                        </div>
                        <p class="leak-desc font-body">35-50% of appointments booked never show up. That's wasted drive time, wasted prep, wasted opportunity.</p>
                        <div class="leak-cost font-mono">💸 Est. $8-15K/month lost</div>
                    </div>
                </div>

                <div class="total-leak-card">
                    <div style="font-size: 3rem; margin-bottom: 20px;">📉</div>
                    <div class="font-display" style="font-size: 1.1rem; font-weight: 700; color: var(--coral); margin-bottom: 12px;">Total Revenue Leak</div>
                    <div class="font-display" style="font-size: 3rem; font-weight: 900; color: var(--white); margin-bottom: 8px;">$63-100K</div>
                    <div class="font-body" style="font-size: 0.8rem; color: rgba(248,249,252,0.6); margin-bottom: 28px;">Per Month (Average Roofing Contractor)</div>
                    <div style="border-top: 1px solid rgba(245,74,72,0.3); padding-top: 24px;">
                        <div class="font-body" style="font-size: 0.85rem; color: rgba(248,249,252,0.7); line-height: 1.6; margin-bottom: 24px;">
                            That's <strong style="color: var(--coral); font-weight: 700;">$756K-$1.2M/year</strong> walking out the door because your current system can't keep up.
                        </div>
                        <a href="#calculate" class="btn-primary" style="font-size: 0.8rem;">Calculate Your Gap →</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Comparison Section -->
    <section id="comparison" style="padding: 100px 32px;">
        <div class="section-container">
            <div class="section-header">
                <div class="section-tag font-mono">Not Another AI Receptionist</div>
                <h2 class="section-h2 font-display">
                    AI Receptionists <span style="color: var(--gray); font-weight: 400;">answer.</span><br>
                    ShiFt <span style="color: var(--coral);">converts.</span>
                </h2>
            </div>

            <div class="comp-table">
                <div class="comp-row">
                    <div class="comp-cell comp-header"></div>
                    <div class="comp-cell comp-header comp-cell-bordered font-display" style="color: var(--gray);">AI Receptionists</div>
                    <div class="comp-cell comp-header comp-shift-header comp-cell-bordered font-display"><span style="color: var(--coral);">ShiFt</span> NeuralOS™</div>
                </div>
                <div class="comp-row">
                    <div class="comp-cell font-body" style="color: var(--gray);">Answers calls 24/7</div>
                    <div class="comp-cell comp-cell-bordered" style="text-align: center;"><span style="color: var(--green); font-size: 1rem;">✓</span></div>
                    <div class="comp-cell comp-shift-cell comp-cell-bordered" style="text-align: center;"><span style="color: var(--green); font-size: 1rem;">✓</span></div>
                </div>
                <div class="comp-row">
                    <div class="comp-cell font-body" style="color: var(--gray);">Qualifies leads by fit + intent</div>
                    <div class="comp-cell comp-cell-bordered" style="text-align: center;"><span style="color: rgba(245,74,72,0.4); font-size: 1rem;">✗</span></div>
                    <div class="comp-cell comp-shift-cell comp-cell-bordered" style="text-align: center;"><span style="color: var(--coral); font-weight: 700; font-size: 0.85rem;">✓ Scored 0-100</span></div>
                </div>
                <div class="comp-row">
                    <div class="comp-cell font-body" style="color: var(--gray);">Converts leads to appointments</div>
                    <div class="comp-cell comp-cell-bordered" style="text-align: center;"><span style="color: rgba(245,74,72,0.4); font-size: 1rem;">✗</span></div>
                    <div class="comp-cell comp-shift-cell comp-cell-bordered" style="text-align: center;"><span style="color: var(--coral); font-weight: 700; font-size: 0.85rem;">✓ Pre-sold</span></div>
                </div>
                <div class="comp-row">
                    <div class="comp-cell font-body" style="color: var(--gray);">Books pre-sold appointments</div>
                    <div class="comp-cell comp-cell-bordered" style="text-align: center;"><span style="color: var(--gray); font-size: 0.85rem;">Basic scheduling</span></div>
                    <div class="comp-cell comp-shift-cell comp-cell-bordered" style="text-align: center;"><span style="color: var(--coral); font-weight: 700; font-size: 0.85rem;">✓ 80%+ show rate</span></div>
                </div>
                <div class="comp-row">
                    <div class="comp-cell font-body" style="font-weight: 600; color: var(--white);">Result</div>
                    <div class="comp-cell comp-cell-bordered" style="text-align: center;"><span style="color: var(--gray); font-size: 0.85rem;">Messages collected</span></div>
                    <div class="comp-cell comp-shift-cell comp-cell-bordered" style="text-align: center;"><span style="color: var(--green); font-weight: 600; font-size: 0.85rem;">Revenue on calendar</span></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Mechanism Section -->
    <section id="how-it-works" style="padding: 100px 32px;">
        <div class="section-container">
            <div class="section-header">
                <div class="section-tag font-mono">The ShiFt Conversion Engine</div>
                <h2 class="section-h2 font-display">
                    From first contact to<br>
                    <span style="color: var(--coral);">booked appointment in 90 seconds</span>
                </h2>
            </div>

            <div class="mechanism-grid">
                <div class="mechanism-card" style="border-left: 3px solid var(--coral);">
                    <span class="mechanism-emoji">🎯</span>
                    <div class="mechanism-stage font-mono" style="color: var(--coral);">Stage 1 • Capture</div>
                    <h3 class="mechanism-title font-display">Instant Response</h3>
                    <p class="mechanism-desc font-body">AI picks up in &lt;30 seconds. Every call, text, form — 24/7. No more "I'll call you back."</p>
                </div>

                <div class="mechanism-card" style="border-left: 3px solid var(--orange);">
                    <span class="mechanism-emoji">🧠</span>
                    <div class="mechanism-stage font-mono" style="color: var(--orange);">Stage 2 • Qualify</div>
                    <h3 class="mechanism-title font-display">Smart Qualification</h3>
                    <p class="mechanism-desc font-body">Roofing-specific questions score leads 0-100. Identifies budget, urgency, decision-maker status in real-time.</p>
                </div>

                <div class="mechanism-card" style="border-left: 3px solid var(--green);">
                    <span class="mechanism-emoji">📅</span>
                    <div class="mechanism-stage font-mono" style="color: var(--green);">Stage 3 • Convert</div>
                    <h3 class="mechanism-title font-display">Pre-Sold Appointments</h3>
                    <p class="mechanism-desc font-body">Books directly to your calendar. Sends prep materials. Confirms via SMS. 80%+ show rate because they're educated and ready.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section id="calculate" style="padding: 80px 32px 100px;">
        <div class="section-container">
            <div class="cta-box">
                <div class="cta-gradient-bar"></div>
                <div class="cta-content">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698b1e039556e19fb0ebf12c/3ec9fe12f_FinalV2.png" alt="ShiFt Logo" class="cta-logo">
                    <h2 class="cta-h2 font-display">
                        How much revenue is leaking<br>
                        from your business <span style="color: var(--coral);">right now?</span>
                    </h2>
                    <p class="cta-desc font-body">
                        Most roofing companies lose $30K-$100K/month in revenue they can't see. The calculator takes 60 seconds and shows you exactly where it's going.
                    </p>
                    <a href="https://calc.shiftnow.io?utm_source=landing&utm_medium=cta&utm_campaign=ai-sales-team" class="btn-primary">
                        See What Missed Calls Are Costing You →
                    </a>
                    <div class="cta-note font-mono">
                        ⏱ <span style="color: var(--orange);">60 seconds</span> • No email required to start
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div style="max-width: 1140px; margin: 0 auto;">
            <div class="font-display" style="font-size: 1.1rem; font-weight: 700; margin-bottom: 8px;">
                ShiFt NeuralOS<sup style="font-size: 0.6em;">™</sup>
            </div>
            <p class="font-body" style="font-size: 0.8rem; color: var(--gray);">
                AI Revenue Operating System<br>
                © 2026 ShiFt. All rights reserved.
            </p>
        </div>
    </footer>

    <script>
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    </script>
</body>
</html>`;

  const downloadHTML = () => {
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "shift-landing-page.html";
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--navy-deep)", padding: "80px 32px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h1 className="font-display" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: 16, color: "var(--white)" }}>
            Export Your Website
          </h1>
          <p className="font-body" style={{ fontSize: "1.1rem", color: "var(--gray)", maxWidth: 600, margin: "0 auto" }}>
            Download a pure HTML version of your landing page. No dependencies, no build tools — just open the file in any browser.
          </p>
        </div>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 40 }}>
          <Button onClick={downloadHTML} size="lg" className="font-mono">
            <Download className="w-5 h-5 mr-2" />
            Download HTML File
          </Button>
          <Button onClick={copyToClipboard} variant="outline" size="lg" className="font-mono">
            {copied ? "✓ Copied!" : "Copy HTML Code"}
          </Button>
        </div>

        <div style={{
          background: "var(--glass)",
          border: "1px solid var(--glass-border)",
          borderRadius: 16,
          padding: 32,
        }}>
          <h3 className="font-display" style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 20, color: "var(--white)" }}>
            What's included:
          </h3>
          <ul className="font-body" style={{ fontSize: "0.95rem", color: "var(--gray)", lineHeight: 2, listStyle: "none", paddingLeft: 0 }}>
            <li>✓ Complete landing page with all sections</li>
            <li>✓ All CSS styles embedded (no external files needed)</li>
            <li>✓ Smooth scroll navigation with vanilla JavaScript</li>
            <li>✓ Fully responsive design for mobile and desktop</li>
            <li>✓ Google Fonts loaded from CDN</li>
            <li>✓ All images hosted and accessible</li>
            <li>✓ Works offline after first load</li>
          </ul>

          <div style={{
            marginTop: 32,
            padding: 20,
            background: "rgba(72,187,120,0.1)",
            border: "1px solid rgba(72,187,120,0.2)",
            borderRadius: 12,
          }}>
            <p className="font-body" style={{ fontSize: "0.9rem", color: "var(--green)", margin: 0 }}>
              <strong>Pro tip:</strong> You can upload this HTML file to any web host (Netlify, Vercel, GitHub Pages, AWS S3, etc.) or share it directly with clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}