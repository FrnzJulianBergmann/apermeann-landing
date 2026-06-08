"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 60);
  }, []);

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 40px", backgroundColor: "#fafaf9" }}>
      <div ref={ref} style={{ maxWidth: "1120px", margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

        {/* Left */}
        <div>
          <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "#1a1a18", marginBottom: "28px", fontWeight: 300 }}>
            EST. 2026 — JAMBI, INDONESIA
          </p>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif",
            fontWeight: 400,
            fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: "#1a1a18",
            marginBottom: "28px",
          }}>
            Operational <span style={{ backgroundColor: "#1a1a18", color: "#fafaf9", padding: "0 6px" }}>software</span><br />
            for businesses that<br />
            <span style={{ fontStyle: "italic", color: "#8a8a82" }}>demand clarity.</span>
          </h1>
          <p style={{ fontSize: "14px", color: "#8a8a82", lineHeight: 1.8, maxWidth: "380px", marginBottom: "36px", fontWeight: 300 }}>
            We build specialized tools that help organizations manage logistics, track costs, and improve operational efficiency.
          </p>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <a href="#products"
              style={{ fontSize: "13px", color: "#fafaf9", backgroundColor: "#1a1a18", textDecoration: "none", padding: "10px 22px", borderRadius: "4px", transition: "opacity 0.2s", fontWeight: 300 }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
              View products
            </a>
            <a href="#philosophy"
              style={{ fontSize: "13px", color: "#8a8a82", textDecoration: "none", transition: "color 0.2s", fontWeight: 300 }}
              onMouseEnter={e => e.currentTarget.style.color = "#1a1a18"}
              onMouseLeave={e => e.currentTarget.style.color = "#8a8a82"}>
              Our philosophy
            </a>
          </div>
        </div>

        {/* Right — plain card */}
        <div style={{
          backgroundColor: "#fafaf9",
          borderRadius: "8px",
          aspectRatio: "1 / 1",
        }} />

      </div>
    </section>
  );
}
