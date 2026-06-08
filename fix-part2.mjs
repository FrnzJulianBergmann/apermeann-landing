import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

function write(filePath, content) {
  const dir = path.dirname(filePath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(filePath, content, "utf8");
  console.log(`  ✅ ${filePath}`);
}

console.log("\n🔧 Fix Part 2 — All Components\n");

// ── Navbar ──
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

  const nav: React.CSSProperties = {
    position:        "fixed",
    top:             0,
    left:            0,
    right:           0,
    zIndex:          50,
    transition:      "all 0.3s",
    backgroundColor: scrolled ? "rgba(10,10,11,0.92)" : "transparent",
    backdropFilter:  scrolled ? "blur(12px)"           : "none",
    borderBottom:    scrolled ? "1px solid #1f1f23"    : "none",
  };

  const inner: React.CSSProperties = {
    maxWidth:      "1152px",
    margin:        "0 auto",
    padding:       "0 24px",
    height:        "64px",
    display:       "flex",
    alignItems:    "center",
    justifyContent:"space-between",
  };

  return (
    <header style={nav}>
      <div style={inner}>
        <a href="/" style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"15px", color:"#f2f2f3", textDecoration:"none", letterSpacing:"-0.01em" }}>
          Apermeann Technologies
        </a>

        {/* Desktop */}
        <nav style={{ display:"flex", alignItems:"center", gap:"32px" }} className="hide-mobile">
          {links.map(l => (
            <a key={l.label} href={l.href} style={{ fontSize:"13px", color:"#8a8a8f", textDecoration:"none", transition:"color 0.2s" }}
              onMouseEnter={e=>(e.currentTarget.style.color="#f2f2f3")}
              onMouseLeave={e=>(e.currentTarget.style.color="#8a8a8f")}>
              {l.label}
            </a>
          ))}
          <a href="#contact" style={{ fontSize:"13px", padding:"6px 16px", borderRadius:"6px", border:"1px solid #1f1f23", color:"#f2f2f3", textDecoration:"none", transition:"border-color 0.2s" }}
            onMouseEnter={e=>(e.currentTarget.style.borderColor="#3b82f6")}
            onMouseLeave={e=>(e.currentTarget.style.borderColor="#1f1f23")}>
            Contact
          </a>
        </nav>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} className="show-mobile"
          style={{ background:"none", border:"none", cursor:"pointer", padding:"8px", display:"flex", flexDirection:"column", gap:"5px" }}>
          {[0,1,2].map(i => (
            <span key={i} style={{ display:"block", width:"20px", height:"1px", backgroundColor:"#8a8a8f",
              transition:"all 0.3s",
              transform: open ? (i===0?"rotate(45deg) translate(4px,4px)": i===2?"rotate(-45deg) translate(4px,-4px)":"none") : "none",
              opacity:   open && i===1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor:"rgba(10,10,11,0.97)", backdropFilter:"blur(12px)", borderBottom:"1px solid #1f1f23", padding:"16px 24px 24px", display:"flex", flexDirection:"column", gap:"16px" }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={()=>setOpen(false)}
              style={{ fontSize:"14px", color:"#8a8a8f", textDecoration:"none" }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={()=>setOpen(false)}
            style={{ fontSize:"14px", color:"#f2f2f3", textDecoration:"none", border:"1px solid #1f1f23", borderRadius:"6px", padding:"8px 16px", width:"fit-content" }}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
`);

// ── Hero ──
write("components/sections/Hero.tsx", `"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section style={{ position:"relative", minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", padding:"96px 24px 80px", overflow:"hidden" }}>
      {/* Blue ambient */}
      <div style={{ position:"absolute", top:"30%", right:"20%", width:"500px", height:"500px", borderRadius:"50%", background:"rgba(59,130,246,0.04)", filter:"blur(100px)", pointerEvents:"none" }} />

      <div ref={ref} style={{ position:"relative", maxWidth:"1152px", margin:"0 auto", width:"100%" }}>
        <p style={{ fontSize:"11px", letterSpacing:"0.2em", textTransform:"uppercase", color:"#3b82f6", marginBottom:"28px", fontWeight:500 }}>
          Software Infrastructure
        </p>

        <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(3rem,8vw,6.5rem)", lineHeight:0.95, letterSpacing:"-0.03em", color:"#f2f2f3", maxWidth:"800px" }}>
          Apermeann<br />Technologies
        </h1>

        <p style={{ marginTop:"28px", fontSize:"clamp(1rem,2vw,1.125rem)", color:"#8a8a8f", maxWidth:"480px", lineHeight:1.7 }}>
          We build software that powers operations, empowers industries, and drives progress.
        </p>

        <div style={{ marginTop:"44px", display:"flex", flexWrap:"wrap", gap:"12px" }}>
          <a href="#products" style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"12px 24px", borderRadius:"7px", backgroundColor:"#3b82f6", color:"#fff", fontSize:"14px", fontWeight:500, textDecoration:"none", transition:"background 0.2s" }}
            onMouseEnter={e=>(e.currentTarget.style.backgroundColor="#2563eb")}
            onMouseLeave={e=>(e.currentTarget.style.backgroundColor="#3b82f6")}>
            Explore Products
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#philosophy" style={{ display:"inline-flex", alignItems:"center", padding:"12px 24px", borderRadius:"7px", border:"1px solid #1f1f23", color:"#f2f2f3", fontSize:"14px", fontWeight:500, textDecoration:"none", transition:"border-color 0.2s" }}
            onMouseEnter={e=>(e.currentTarget.style.borderColor="#52525a")}
            onMouseLeave={e=>(e.currentTarget.style.borderColor="#1f1f23")}>
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"120px", background:"linear-gradient(to top, #0a0a0b, transparent)", pointerEvents:"none" }} />
    </section>
  );
}
`);

// ── Products ──
write("components/sections/Products.tsx", `"use client";

const products = [
  { name:"Nordvenn",           tag:"Vendor Management", desc:"Vendor management platform built for clarity, control, and stronger partnerships." },
  { name:"Apermeann Absolute", tag:"AI Operations",     desc:"AI-powered operational systems that unify data, processes, and decision-making." },
  { name:"Freight Haul",       tag:"Logistics",         desc:"Trucking and logistics platform for compliance, efficiency, and real-time visibility." },
];

export default function Products() {
  return (
    <section id="products" style={{ padding:"112px 24px", borderTop:"1px solid #1f1f23" }}>
      <div style={{ maxWidth:"1152px", margin:"0 auto" }}>
        <p style={{ fontSize:"11px", letterSpacing:"0.2em", textTransform:"uppercase", color:"#52525a", marginBottom:"48px" }}>
          Our Products
        </p>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:"16px" }}>
          {products.map(p => (
            <div key={p.name}
              style={{ backgroundColor:"#111113", border:"1px solid #1f1f23", borderRadius:"12px", padding:"28px", display:"flex", flexDirection:"column", gap:"14px", transition:"all 0.25s", cursor:"default" }}
              onMouseEnter={e=>{ const el=e.currentTarget; el.style.borderColor="#2a2a2f"; el.style.backgroundColor="#141416"; }}
              onMouseLeave={e=>{ const el=e.currentTarget; el.style.borderColor="#1f1f23"; el.style.backgroundColor="#111113"; }}>
              <span style={{ fontSize:"11px", letterSpacing:"0.15em", textTransform:"uppercase", color:"#3b82f6", fontWeight:500 }}>
                {p.tag}
              </span>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1.2rem", color:"#f2f2f3", lineHeight:1.2 }}>
                {p.name}
              </h3>
              <p style={{ fontSize:"14px", color:"#8a8a8f", lineHeight:1.7, flex:1 }}>
                {p.desc}
              </p>
              <div style={{ paddingTop:"16px", borderTop:"1px solid #1f1f23" }}>
                <a href="#" style={{ display:"inline-flex", alignItems:"center", gap:"6px", fontSize:"13px", color:"#3b82f6", textDecoration:"none" }}
                  onMouseEnter={e=>(e.currentTarget.style.color="#60a5fa")}
                  onMouseLeave={e=>(e.currentTarget.style.color="#3b82f6")}>
                  View Product
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

// ── Philosophy ──
write("components/sections/Philosophy.tsx", `export default function Philosophy() {
  return (
    <section id="philosophy" style={{ padding:"112px 24px", borderTop:"1px solid #1f1f23" }}>
      <div style={{ maxWidth:"1152px", margin:"0 auto" }}>
        <div style={{ position:"relative", backgroundColor:"#111113", border:"1px solid #1f1f23", borderRadius:"20px", padding:"80px 64px", overflow:"hidden" }}>
          {/* Dot overlay */}
          <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize:"24px 24px", pointerEvents:"none" }} />
          <div style={{ position:"relative" }}>
            <p style={{ fontSize:"11px", letterSpacing:"0.2em", textTransform:"uppercase", color:"#52525a", marginBottom:"24px" }}>
              Philosophy
            </p>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"clamp(1.75rem,4vw,3rem)", lineHeight:1.1, letterSpacing:"-0.02em", color:"#f2f2f3", maxWidth:"700px" }}>
              We believe software should be simple, powerful, and built to make an impact.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
`);

// ── Founder ──
write("components/sections/Founder.tsx", `export default function Founder() {
  return (
    <section id="about" style={{ padding:"112px 24px", borderTop:"1px solid #1f1f23" }}>
      <div style={{ maxWidth:"1152px", margin:"0 auto" }}>
        <div style={{ backgroundColor:"#111113", border:"1px solid #1f1f23", borderRadius:"20px", padding:"56px 64px", maxWidth:"640px" }}>
          <p style={{ fontSize:"11px", letterSpacing:"0.2em", textTransform:"uppercase", color:"#3b82f6", fontWeight:500, marginBottom:"20px" }}>
            Founder
          </p>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1.875rem", color:"#f2f2f3", letterSpacing:"-0.02em", marginBottom:"6px" }}>
            Faiz Hamizan Machmud
          </h2>
          <p style={{ fontSize:"13px", color:"#52525a", marginBottom:"24px" }}>
            CEO &amp; Founder of Apermeann Technologies
          </p>
          <p style={{ fontSize:"15px", color:"#8a8a8f", lineHeight:1.75 }}>
            Focused on building modern software systems that solve real problems and create long-term value.
          </p>
        </div>
      </div>
    </section>
  );
}
`);

// ── Footer ──
write("components/sections/Footer.tsx", `export default function Footer() {
  return (
    <footer id="contact" style={{ borderTop:"1px solid #1f1f23", padding:"64px 24px" }}>
      <div style={{ maxWidth:"1152px", margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(160px,1fr))", gap:"40px" }}>
        <div style={{ gridColumn:"span 1" }}>
          <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"14px", color:"#f2f2f3", marginBottom:"8px" }}>
            Apermeann Technologies
          </p>
          <p style={{ fontSize:"13px", color:"#52525a" }}>Software systems for modern industries.</p>
        </div>

        <div>
          <p style={{ fontSize:"11px", letterSpacing:"0.15em", textTransform:"uppercase", color:"#52525a", marginBottom:"16px" }}>Products</p>
          {["Nordvenn","Apermeann Absolute","Freight Haul"].map(p => (
            <a key={p} href="#products" style={{ display:"block", fontSize:"13px", color:"#8a8a8f", textDecoration:"none", marginBottom:"8px" }}
              onMouseEnter={e=>(e.currentTarget.style.color="#f2f2f3")}
              onMouseLeave={e=>(e.currentTarget.style.color="#8a8a8f")}>
              {p}
            </a>
          ))}
        </div>

        <div>
          <p style={{ fontSize:"11px", letterSpacing:"0.15em", textTransform:"uppercase", color:"#52525a", marginBottom:"16px" }}>Company</p>
          {[["About","#about"],["Contact","#contact"]].map(([label,href]) => (
            <a key={label} href={href} style={{ display:"block", fontSize:"13px", color:"#8a8a8f", textDecoration:"none", marginBottom:"8px" }}
              onMouseEnter={e=>(e.currentTarget.style.color="#f2f2f3")}
              onMouseLeave={e=>(e.currentTarget.style.color="#8a8a8f")}>
              {label}
            </a>
          ))}
        </div>

        <div style={{ textAlign:"right" }}>
          <p style={{ fontSize:"13px", color:"#52525a", lineHeight:1.7 }}>
            © 2026 Apermeann Technologies<br />All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
`);

// ── Mobile CSS helper ──
write("app/responsive.css", `@media (max-width: 768px) {
  .hide-mobile { display: none !important; }
  .show-mobile { display: flex !important; }
}
@media (min-width: 769px) {
  .show-mobile { display: none !important; }
}
`);

// Append responsive import to globals
import { readFileSync } from "fs";
const globals = readFileSync("app/globals.css", "utf8");
if (!globals.includes("responsive.css")) {
  writeFileSync("app/globals.css", globals + `\n@import "./responsive.css";\n`, "utf8");
  console.log("  ✅ responsive.css imported");
}

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅  Fix Part 2 done!

👉  Stop server (Ctrl+C) lalu:
    npm run dev -- -p 3001

🌐  Buka: http://localhost:3001
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
