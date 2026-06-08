import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

function write(filePath, content) {
  const dir = path.dirname(filePath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(filePath, content, "utf8");
  console.log(`  ✅ ${filePath}`);
}

console.log("\n🧱 Rebuild Part 2B — Hero right visual + split layout\n");

write("components/sections/Hero.tsx", `"use client";
import { useEffect, useRef } from "react";

const stats = [
  { val: "3",     label: "Core Products"      },
  { val: "∞",     label: "Integrations Ready" },
  { val: "99.9%", label: "Uptime Target"      },
  { val: "2026",  label: "Founded"            },
];

function InfraVisual() {
  return (
    <div style={{ position:"relative", width:"100%", minHeight:"420px", backgroundColor:"#0c0c0e", border:"1px solid #1c1c1f", borderRadius:"12px", overflow:"hidden" }}>
      {/* Grid bg */}
      <div style={{ position:"absolute", inset:0,
        backgroundImage:"linear-gradient(#1a1a1f 1px, transparent 1px), linear-gradient(90deg, #1a1a1f 1px, transparent 1px)",
        backgroundSize:"36px 36px", opacity:0.4 }} />

      {/* Corner marks */}
      {([
        { top:"12px",  left:"12px",  borderTop:"1px solid #3b82f6", borderLeft:"1px solid #3b82f6"  },
        { top:"12px",  right:"12px", borderTop:"1px solid #3b82f6", borderRight:"1px solid #3b82f6" },
        { bottom:"12px", left:"12px",  borderBottom:"1px solid #3b82f6", borderLeft:"1px solid #3b82f6"  },
        { bottom:"12px", right:"12px", borderBottom:"1px solid #3b82f6", borderRight:"1px solid #3b82f6" },
      ] as React.CSSProperties[]).map((style, i) => (
        <div key={i} style={{ position:"absolute", width:"10px", height:"10px", ...style }} />
      ))}

      {/* Label */}
      <div style={{ position:"absolute", top:"14px", left:"50%", transform:"translateX(-50%)", fontSize:"10px", color:"#3b82f6", letterSpacing:"0.18em", textTransform:"uppercase" }}>
        SYSTEM OVERVIEW
      </div>

      {/* SVG diagram */}
      <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%" }} viewBox="0 0 400 370" preserveAspectRatio="xMidYMid meet">
        {/* Lines */}
        <line x1="200" y1="88"  x2="100" y2="168" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="4 3"/>
        <line x1="200" y1="88"  x2="200" y2="168" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="4 3"/>
        <line x1="200" y1="88"  x2="300" y2="168" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="4 3"/>
        <line x1="100" y1="198" x2="100" y2="268" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="4 3"/>
        <line x1="200" y1="198" x2="200" y2="268" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="4 3"/>
        <line x1="300" y1="198" x2="300" y2="268" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="4 3"/>

        {/* Top node */}
        <rect x="155" y="66" width="90" height="28" rx="5" fill="#0f1629" stroke="#3b82f6" strokeWidth="1"/>
        <text x="200" y="84" textAnchor="middle" fill="#3b82f6" fontSize="10.5" fontFamily="DM Sans, sans-serif">Core API</text>
        <circle cx="200" cy="80" r="0" fill="#3b82f6"/>

        {/* Mid nodes */}
        {[
          { x:55,  label:"Nordvenn"  },
          { x:155, label:"Absolute"  },
          { x:255, label:"Freight"   },
        ].map(n => (
          <g key={n.label}>
            <rect x={n.x} y="168" width="90" height="28" rx="5" fill="#0d1117" stroke="#27272a" strokeWidth="1"/>
            <text x={n.x+45} y="186" textAnchor="middle" fill="#a1a1aa" fontSize="10" fontFamily="DM Sans, sans-serif">{n.label}</text>
          </g>
        ))}

        {/* Bottom nodes */}
        {[
          { x:55,  label:"PostgreSQL", color:"#52525a" },
          { x:155, label:"Redis",      color:"#52525a" },
          { x:255, label:"Kafka",      color:"#52525a" },
        ].map(n => (
          <g key={n.label}>
            <rect x={n.x} y="268" width="90" height="26" rx="5" fill="#0a0a0c" stroke="#1c1c1f" strokeWidth="1"/>
            <text x={n.x+45} y="285" textAnchor="middle" fill={n.color} fontSize="10" fontFamily="DM Sans, sans-serif">{n.label}</text>
          </g>
        ))}

        {/* Active dots */}
        <circle cx="200" cy="80" r="3" fill="#3b82f6" opacity="0.9"/>
        <circle cx="100" cy="182" r="2.5" fill="#6366f1" opacity="0.7"/>
        <circle cx="200" cy="182" r="2.5" fill="#6366f1" opacity="0.7"/>
        <circle cx="300" cy="182" r="2.5" fill="#6366f1" opacity="0.7"/>
      </svg>

      {/* Status bar */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, borderTop:"1px solid #18181b", padding:"10px 16px", display:"flex", alignItems:"center", justifyContent:"space-between", backgroundColor:"rgba(9,9,11,0.85)", backdropFilter:"blur(8px)" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"6px" }}>
          <div style={{ width:"6px", height:"6px", borderRadius:"50%", backgroundColor:"#22c55e" }} />
          <span style={{ fontSize:"10.5px", color:"#52525a", letterSpacing:"0.07em" }}>ALL SYSTEMS OPERATIONAL</span>
        </div>
        <span style={{ fontSize:"10.5px", color:"#3f3f46" }}>v2.4.1</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    [leftRef, rightRef].forEach((r, i) => {
      const el = r.current;
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, i * 140);
    });
  }, []);

  return (
    <section style={{ position:"relative", minHeight:"100vh", display:"flex", alignItems:"center", padding:"80px 32px 64px", overflow:"hidden" }}>
      {/* Subtle ambient */}
      <div style={{ position:"absolute", top:"20%", left:"40%", width:"500px", height:"500px", borderRadius:"50%", background:"rgba(59,130,246,0.03)", filter:"blur(120px)", pointerEvents:"none" }} />

      <div style={{ maxWidth:"1200px", margin:"0 auto", width:"100%", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"60px", alignItems:"center" }}>

        {/* Left */}
        <div ref={leftRef}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"4px 12px", borderRadius:"100px", border:"1px solid #1c1c1f", marginBottom:"28px" }}>
            <div style={{ width:"5px", height:"5px", borderRadius:"50%", backgroundColor:"#22c55e" }} />
            <span style={{ fontSize:"11px", color:"#71717a", letterSpacing:"0.06em" }}>Now operational — 3 products</span>
          </div>

          <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(2.4rem,4.5vw,3.75rem)", lineHeight:1.02, letterSpacing:"-0.03em", color:"#f4f4f5", marginBottom:"20px" }}>
            Operational software<br />
            for the <span style={{ color:"#3b82f6" }}>modern world</span>
            <span style={{ color:"#3b82f6" }}>.</span>
          </h1>

          <p style={{ fontSize:"15px", color:"#71717a", lineHeight:1.8, maxWidth:"400px", marginBottom:"32px" }}>
            We build systems that power logistics,<br />AI operations, and critical infrastructure.
          </p>

          <div style={{ display:"flex", flexWrap:"wrap", gap:"10px", marginBottom:"48px" }}>
            <a href="#products"
              style={{ display:"inline-flex", alignItems:"center", gap:"7px", padding:"10px 20px", borderRadius:"7px", backgroundColor:"#3b82f6", color:"#fff", fontSize:"13.5px", fontWeight:500, textDecoration:"none" }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#2563eb"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "#3b82f6"}>
              Explore Products
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#philosophy"
              style={{ display:"inline-flex", alignItems:"center", gap:"7px", padding:"10px 20px", borderRadius:"7px", border:"1px solid #27272a", color:"#a1a1aa", fontSize:"13.5px", fontWeight:500, textDecoration:"none" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor="#3f3f46"; e.currentTarget.style.color="#f4f4f5"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor="#27272a"; e.currentTarget.style.color="#a1a1aa"; }}>
              Learn More
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div style={{ display:"flex", gap:"28px", paddingTop:"28px", borderTop:"1px solid #18181b" }}>
            {stats.map(s => (
              <div key={s.label}>
                <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1.35rem", color:"#f4f4f5", letterSpacing:"-0.02em" }}>{s.val}</p>
                <p style={{ fontSize:"11px", color:"#52525a", marginTop:"2px" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div ref={rightRef}>
          <InfraVisual />
        </div>
      </div>

      <style>{\`
        @media (max-width: 900px) {
          .hero-right { display: none !important; }
        }
      \`}</style>
    </section>
  );
}
`);

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅  Part 2B done!
👉  Jalankan: node rebuild-part3.mjs
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
