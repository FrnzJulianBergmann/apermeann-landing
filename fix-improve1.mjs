import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

function write(filePath, content) {
  const dir = path.dirname(filePath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(filePath, content, "utf8");
  console.log(`  ✅ ${filePath}`);
}

console.log("\n🔧 Fix Part 1 — Spacing + Hero copy + Navbar\n");

// ── Hero ──
write("components/sections/Hero.tsx", `"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section style={{ position:"relative", minHeight:"92vh", display:"flex", flexDirection:"column", justifyContent:"center", padding:"80px 24px 64px", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:"30%", right:"20%", width:"480px", height:"480px", borderRadius:"50%", background:"rgba(59,130,246,0.05)", filter:"blur(100px)", pointerEvents:"none" }} />

      <div ref={ref} style={{ position:"relative", maxWidth:"1152px", margin:"0 auto", width:"100%" }}>
        <p style={{ fontSize:"11px", letterSpacing:"0.2em", textTransform:"uppercase", color:"#3b82f6", marginBottom:"24px", fontWeight:500 }}>
          Software Infrastructure
        </p>

        <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(2.75rem,7.5vw,6rem)", lineHeight:0.95, letterSpacing:"-0.03em", color:"#f2f2f3", maxWidth:"800px" }}>
          Apermeann<br />Technologies
        </h1>

        <p style={{ marginTop:"24px", fontSize:"clamp(0.95rem,1.8vw,1.1rem)", color:"#8a8a8f", maxWidth:"520px", lineHeight:1.75 }}>
          Operational software for logistics, AI systems,<br />and modern infrastructure.
        </p>

        <div style={{ marginTop:"36px", display:"flex", flexWrap:"wrap", gap:"10px" }}>
          <a href="#products"
            style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"11px 22px", borderRadius:"8px", backgroundColor:"#3b82f6", color:"#fff", fontSize:"13.5px", fontWeight:500, textDecoration:"none", transition:"background 0.2s" }}
            onMouseEnter={e=>(e.currentTarget.style.backgroundColor="#2563eb")}
            onMouseLeave={e=>(e.currentTarget.style.backgroundColor="#3b82f6")}>
            Explore Products
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#philosophy"
            style={{ display:"inline-flex", alignItems:"center", padding:"11px 22px", borderRadius:"8px", border:"1px solid #2a2a2f", color:"#a1a1aa", fontSize:"13.5px", fontWeight:500, textDecoration:"none", transition:"all 0.2s" }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor="#52525a"; e.currentTarget.style.color="#f2f2f3"; }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor="#2a2a2f"; e.currentTarget.style.color="#a1a1aa"; }}>
            Learn More
          </a>
        </div>

        {/* Stat bar */}
        <div style={{ marginTop:"56px", paddingTop:"32px", borderTop:"1px solid #1a1a1e", display:"flex", flexWrap:"wrap", gap:"40px" }}>
          {[
            { val:"3",    label:"Core Products"         },
            { val:"∞",    label:"Integrations Ready"    },
            { val:"99.9%",label:"Uptime Target"         },
            { val:"2026", label:"Founded"               },
          ].map(s => (
            <div key={s.label}>
              <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1.5rem", color:"#f2f2f3", letterSpacing:"-0.02em" }}>{s.val}</p>
              <p style={{ fontSize:"12px", color:"#52525a", marginTop:"2px" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"100px", background:"linear-gradient(to top, #0a0a0b, transparent)", pointerEvents:"none" }} />
    </section>
  );
}
`);

// ── Navbar (more premium contact button) ──
write("components/Navbar.tsx", `"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "Products",   href: "#products"   },
  { label: "Philosophy", href: "#philosophy" },
  { label: "About",      href: "#about"      },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position:"fixed", top:0, left:0, right:0, zIndex:50,
      transition:"all 0.3s",
      backgroundColor: scrolled ? "rgba(10,10,11,0.88)" : "transparent",
      backdropFilter:  scrolled ? "blur(16px)" : "none",
      borderBottom:    scrolled ? "1px solid #18181b" : "none",
    }}>
      <div style={{ maxWidth:"1152px", margin:"0 auto", padding:"0 24px", height:"60px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <a href="/" style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"14.5px", color:"#f2f2f3", textDecoration:"none", letterSpacing:"-0.01em" }}>
          Apermeann Technologies
        </a>

        <nav style={{ display:"flex", alignItems:"center", gap:"28px" }} className="hide-mobile">
          {links.map(l => (
            <a key={l.label} href={l.href}
              style={{ fontSize:"13px", color:"#71717a", textDecoration:"none", transition:"color 0.2s" }}
              onMouseEnter={e=>(e.currentTarget.style.color="#f2f2f3")}
              onMouseLeave={e=>(e.currentTarget.style.color="#71717a")}>
              {l.label}
            </a>
          ))}
          <a href="#contact"
            style={{ fontSize:"12.5px", padding:"7px 18px", borderRadius:"8px", border:"1px solid #27272a", color:"#d4d4d8", textDecoration:"none", transition:"all 0.2s", letterSpacing:"0.01em" }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor="#3b82f6"; e.currentTarget.style.color="#fff"; e.currentTarget.style.backgroundColor="rgba(59,130,246,0.06)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor="#27272a"; e.currentTarget.style.color="#d4d4d8"; e.currentTarget.style.backgroundColor="transparent"; }}>
            Contact
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="show-mobile"
          style={{ background:"none", border:"none", cursor:"pointer", padding:"8px", display:"flex", flexDirection:"column", gap:"5px" }}>
          {[0,1,2].map(i => (
            <span key={i} style={{ display:"block", width:"20px", height:"1px", backgroundColor:"#71717a", transition:"all 0.3s",
              transform: open ? (i===0?"rotate(45deg) translate(4px,4px)": i===2?"rotate(-45deg) translate(4px,-4px)":"none") : "none",
              opacity: open && i===1 ? 0 : 1 }} />
          ))}
        </button>
      </div>

      {open && (
        <div style={{ backgroundColor:"rgba(10,10,11,0.97)", backdropFilter:"blur(16px)", borderBottom:"1px solid #18181b", padding:"16px 24px 24px", display:"flex", flexDirection:"column", gap:"16px" }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={()=>setOpen(false)}
              style={{ fontSize:"14px", color:"#71717a", textDecoration:"none" }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={()=>setOpen(false)}
            style={{ fontSize:"14px", color:"#f2f2f3", textDecoration:"none", border:"1px solid #27272a", borderRadius:"8px", padding:"8px 16px", width:"fit-content" }}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
`);

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅  Fix Part 1 done!
👉  Jalankan: node fix-improve2.mjs
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
