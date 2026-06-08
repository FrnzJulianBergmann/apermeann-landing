import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

function write(filePath, content) {
  const dir = path.dirname(filePath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(filePath, content, "utf8");
  console.log(`  ✅ ${filePath}`);
}

console.log("\n🧱 Rebuild Part 1 — Globals + Layout + Navbar\n");

// ── globals.css ──
write("app/globals.css", `@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

body {
  background-color: #09090b;
  color: #f2f2f3;
  font-family: 'DM Sans', sans-serif;
  overflow-x: hidden;
}

::selection { background: rgba(59,130,246,0.2); color: #f2f2f3; }

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: #09090b; }
::-webkit-scrollbar-thumb { background: #27272a; border-radius: 4px; }

@media (max-width: 768px) {
  .hide-mobile { display: none !important; }
  .show-mobile { display: flex !important; }
}
@media (min-width: 769px) {
  .show-mobile { display: none !important; }
}
`);

// ── layout.tsx ──
write("app/layout.tsx", `import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apermeann Technologies",
  description: "Operational software for logistics, AI systems, and modern infrastructure.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#09090b", color: "#f2f2f3" }}>
        {children}
      </body>
    </html>
  );
}
`);

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
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const s = {
    header: {
      position:        "fixed" as const,
      top:             0, left: 0, right: 0,
      zIndex:          50,
      transition:      "all 0.3s ease",
      backgroundColor: scrolled ? "rgba(9,9,11,0.85)" : "transparent",
      backdropFilter:  scrolled ? "blur(20px)"         : "none",
      borderBottom:    scrolled ? "1px solid #18181b"  : "none",
    },
    inner: {
      maxWidth: "1200px", margin: "0 auto",
      padding: "0 32px", height: "60px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    },
  };

  return (
    <header style={s.header}>
      <div style={s.inner}>
        {/* Logo row */}
        <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
          {/* A mark */}
          <div style={{ width:"28px", height:"28px", borderRadius:"6px", border:"1px solid #27272a", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2L12 12H2L7 2Z" stroke="#3b82f6" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
            </svg>
          </div>
          <a href="/" style={{ fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:"14px", color:"#e4e4e7", textDecoration:"none", letterSpacing:"-0.01em" }}>
            Apermeann Technologies
          </a>
        </div>

        {/* Desktop nav */}
        <nav className="hide-mobile" style={{ display:"flex", alignItems:"center", gap:"32px" }}>
          {links.map(l => (
            <a key={l.label} href={l.href}
              style={{ fontSize:"13px", color:"#71717a", textDecoration:"none", transition:"color 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#e4e4e7"}
              onMouseLeave={e => e.currentTarget.style.color = "#71717a"}>
              {l.label}
            </a>
          ))}
          <a href="#contact"
            style={{ fontSize:"12.5px", padding:"6px 16px", borderRadius:"6px", border:"1px solid #27272a", color:"#e4e4e7", textDecoration:"none", display:"flex", alignItems:"center", gap:"6px", transition:"all 0.15s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor="#3b82f6"; e.currentTarget.style.backgroundColor="rgba(59,130,246,0.06)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor="#27272a"; e.currentTarget.style.backgroundColor="transparent"; }}>
            Contact
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </a>
        </nav>

        {/* Mobile burger */}
        <button className="show-mobile" onClick={() => setOpen(!open)}
          style={{ background:"none", border:"none", cursor:"pointer", padding:"6px", flexDirection:"column", gap:"5px" }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display:"block", width:"18px", height:"1px", backgroundColor:"#71717a", transition:"all 0.3s",
              transform: open ? (i===0?"rotate(45deg) translate(4px,4px)": i===2?"rotate(-45deg) translate(4px,-4px)":"none") : "none",
              opacity: open && i===1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {open && (
        <div style={{ background:"rgba(9,9,11,0.97)", backdropFilter:"blur(20px)", borderBottom:"1px solid #18181b", padding:"16px 32px 24px", display:"flex", flexDirection:"column", gap:"16px" }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ fontSize:"14px", color:"#71717a", textDecoration:"none" }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            style={{ fontSize:"14px", color:"#e4e4e7", textDecoration:"none", border:"1px solid #27272a", borderRadius:"6px", padding:"8px 16px", width:"fit-content" }}>
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
✅  Part 1 done!
👉  Jalankan: node rebuild-part2.mjs
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
