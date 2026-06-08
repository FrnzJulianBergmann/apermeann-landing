import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

function write(filePath, content) {
  const dir = path.dirname(filePath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(filePath, content, "utf8");
  console.log(`  ✅ ${filePath}`);
}

console.log("\n🧱 Rebuild Part 2A — Hero (left side)\n");

write("components/sections/Hero.tsx", `"use client";
import { useEffect, useRef } from "react";

const stats = [
  { val: "3",     label: "Core Products"      },
  { val: "∞",     label: "Integrations Ready" },
  { val: "99.9%", label: "Uptime Target"      },
  { val: "2026",  label: "Founded"            },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 80);
  }, []);

  return (
    <section style={{ position:"relative", minHeight:"100vh", display:"flex", alignItems:"center", padding:"80px 32px 64px", overflow:"hidden" }}>
      <div style={{ maxWidth:"1200px", margin:"0 auto", width:"100%" }}>
        <div ref={ref} style={{ maxWidth:"560px" }}>

          {/* Status pill */}
          <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"4px 12px", borderRadius:"100px", border:"1px solid #1c1c1f", marginBottom:"28px" }}>
            <div style={{ width:"5px", height:"5px", borderRadius:"50%", backgroundColor:"#22c55e" }} />
            <span style={{ fontSize:"11px", color:"#71717a", letterSpacing:"0.06em" }}>Now operational — 3 products</span>
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(2.4rem,5vw,3.75rem)", lineHeight:1.02, letterSpacing:"-0.03em", color:"#f4f4f5", marginBottom:"20px" }}>
            Operational software<br />
            for the <span style={{ color:"#3b82f6" }}>modern world</span>
            <span style={{ color:"#3b82f6" }}>.</span>
          </h1>

          {/* Subtext */}
          <p style={{ fontSize:"15px", color:"#71717a", lineHeight:1.8, maxWidth:"400px", marginBottom:"32px" }}>
            We build systems that power logistics,<br />AI operations, and critical infrastructure.
          </p>

          {/* CTAs */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:"10px", marginBottom:"48px" }}>
            <a href="#products"
              style={{ display:"inline-flex", alignItems:"center", gap:"7px", padding:"10px 20px", borderRadius:"7px", backgroundColor:"#3b82f6", color:"#fff", fontSize:"13.5px", fontWeight:500, textDecoration:"none", transition:"background 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#2563eb"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "#3b82f6"}>
              Explore Products
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#philosophy"
              style={{ display:"inline-flex", alignItems:"center", gap:"7px", padding:"10px 20px", borderRadius:"7px", border:"1px solid #27272a", color:"#a1a1aa", fontSize:"13.5px", fontWeight:500, textDecoration:"none", transition:"all 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor="#3f3f46"; e.currentTarget.style.color="#f4f4f5"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor="#27272a"; e.currentTarget.style.color="#a1a1aa"; }}>
              Learn More
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Stats row */}
          <div style={{ display:"flex", gap:"32px", paddingTop:"28px", borderTop:"1px solid #18181b" }}>
            {stats.map(s => (
              <div key={s.label}>
                <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1.4rem", color:"#f4f4f5", letterSpacing:"-0.02em" }}>{s.val}</p>
                <p style={{ fontSize:"11.5px", color:"#52525a", marginTop:"2px" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
`);

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅  Part 2A done!
👉  Jalankan: node rebuild-part2b.mjs
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
