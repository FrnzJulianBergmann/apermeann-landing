import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

function write(filePath, content) {
  const dir = path.dirname(filePath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(filePath, content, "utf8");
  console.log(`  ✅ ${filePath}`);
}

console.log("\n🧱 Rebuild Part 3A — Products Header + Intro\n");

write("components/sections/Products.tsx", `"use client";

const products = [
  {
    name: "Nordvenn",
    tag:  "Vendor Management",
    desc: "Vendor management platform built for clarity, control, and stronger partnerships.",
    id:   "N",
  },
  {
    name: "Apermeann Absolute",
    tag:  "AI Operations",
    desc: "AI-powered operational systems that unify data, processes, and decision-making.",
    id:   "A",
  },
  {
    name: "Freight Haul",
    tag:  "Logistics",
    desc: "Trucking and logistics platform for compliance, efficiency, and real-time visibility.",
    id:   "F",
  },
];

export default function Products() {
  return (
    <section id="products" style={{ padding:"96px 32px", borderTop:"1px solid #18181b" }}>
      <div style={{ maxWidth:"1200px", margin:"0 auto" }}>

        {/* Header row */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"48px", marginBottom:"56px", alignItems:"start" }}>
          <div>
            <p style={{ fontSize:"11px", letterSpacing:"0.18em", textTransform:"uppercase", color:"#52525a", marginBottom:"16px" }}>
              Our Products
            </p>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"clamp(1.75rem,3.5vw,2.75rem)", lineHeight:1.08, letterSpacing:"-0.025em", color:"#f4f4f5" }}>
              Software that runs the systems<br />the world depends on.
            </h2>
          </div>
          <div style={{ display:"flex", alignItems:"center" }}>
            <p style={{ fontSize:"14.5px", color:"#71717a", lineHeight:1.8, maxWidth:"360px" }}>
              From vendor management to AI operations and freight logistics, our products work together to deliver operational clarity and execution at scale.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"12px" }}>
          {products.map((p, i) => (
            <div key={p.name}
              style={{ backgroundColor:"#0c0c0e", border:"1px solid #1c1c1f", borderRadius:"10px", padding:"24px", display:"flex", flexDirection:"column", gap:"14px", transition:"all 0.2s", cursor:"default" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor="#2a2a2f"; e.currentTarget.style.backgroundColor="#0f0f12"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor="#1c1c1f"; e.currentTarget.style.backgroundColor="#0c0c0e"; }}>

              {/* Icon mark */}
              <div style={{ width:"32px", height:"32px", borderRadius:"7px", border:"1px solid #27272a", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"13px", color:"#3b82f6" }}>{p.id}</span>
              </div>

              <div>
                <p style={{ fontSize:"10.5px", letterSpacing:"0.14em", textTransform:"uppercase", color:"#3b82f6", marginBottom:"8px", fontWeight:500 }}>
                  {p.tag}
                </p>
                <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1.125rem", color:"#f4f4f5", lineHeight:1.2 }}>
                  {p.name}
                </h3>
              </div>

              <p style={{ fontSize:"13.5px", color:"#71717a", lineHeight:1.75, flex:1 }}>
                {p.desc}
              </p>

              <div style={{ paddingTop:"14px", borderTop:"1px solid #18181b" }}>
                <a href="#"
                  style={{ display:"inline-flex", alignItems:"center", gap:"6px", fontSize:"12.5px", color:"#71717a", textDecoration:"none", transition:"color 0.15s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#f4f4f5"}
                  onMouseLeave={e => e.currentTarget.style.color = "#71717a"}>
                  View Product
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{\`
        @media (max-width: 900px) {
          #products > div > div:first-child { grid-template-columns: 1fr !important; }
          #products > div > div:last-child  { grid-template-columns: 1fr !important; }
        }
      \`}</style>
    </section>
  );
}
`);

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅  Part 3A done!
👉  Jalankan: node rebuild-part3b.mjs
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
