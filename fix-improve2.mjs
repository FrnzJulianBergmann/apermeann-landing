import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

function write(filePath, content) {
  const dir = path.dirname(filePath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(filePath, content, "utf8");
  console.log(`  ✅ ${filePath}`);
}

console.log("\n🔧 Fix Part 2 — Proof Section + Footer + Identity\n");

// ── Products (tighter spacing) ──
write("components/sections/Products.tsx", `"use client";

const products = [
  { name:"Nordvenn",           tag:"Vendor Management", desc:"Vendor management platform built for clarity, control, and stronger partnerships." },
  { name:"Apermeann Absolute", tag:"AI Operations",     desc:"AI-powered operational systems that unify data, processes, and decision-making." },
  { name:"Freight Haul",       tag:"Logistics",         desc:"Trucking and logistics platform for compliance, efficiency, and real-time visibility." },
];

export default function Products() {
  return (
    <section id="products" style={{ padding:"80px 24px", borderTop:"1px solid #18181b" }}>
      <div style={{ maxWidth:"1152px", margin:"0 auto" }}>
        <p style={{ fontSize:"11px", letterSpacing:"0.2em", textTransform:"uppercase", color:"#52525a", marginBottom:"36px" }}>
          Our Products
        </p>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:"12px" }}>
          {products.map(p => (
            <div key={p.name}
              style={{ backgroundColor:"#0f0f11", border:"1px solid #1f1f23", borderRadius:"12px", padding:"24px 28px", display:"flex", flexDirection:"column", gap:"12px", transition:"all 0.25s" }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor="#2a2a2f"; e.currentTarget.style.backgroundColor="#141416"; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor="#1f1f23"; e.currentTarget.style.backgroundColor="#0f0f11"; }}>
              <span style={{ fontSize:"10.5px", letterSpacing:"0.15em", textTransform:"uppercase", color:"#3b82f6", fontWeight:500 }}>
                {p.tag}
              </span>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1.15rem", color:"#f2f2f3", lineHeight:1.2 }}>
                {p.name}
              </h3>
              <p style={{ fontSize:"13.5px", color:"#71717a", lineHeight:1.7, flex:1 }}>
                {p.desc}
              </p>
              <div style={{ paddingTop:"12px", borderTop:"1px solid #1a1a1e" }}>
                <a href="#" style={{ display:"inline-flex", alignItems:"center", gap:"6px", fontSize:"12.5px", color:"#3b82f6", textDecoration:"none" }}
                  onMouseEnter={e=>(e.currentTarget.style.color="#60a5fa")}
                  onMouseLeave={e=>(e.currentTarget.style.color="#3b82f6")}>
                  View Product
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
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

// ── Proof / Infrastructure Preview ──
write("components/sections/Proof.tsx", `"use client";

const metrics = [
  { label:"Vendor Onboarding",  value:"↓ 68%",  sub:"time reduction"          },
  { label:"Data Unification",   value:"100%",   sub:"cross-system sync"        },
  { label:"Fleet Visibility",   value:"∞",      sub:"real-time tracking"       },
  { label:"System Uptime",      value:"99.9%",  sub:"production target"        },
];

const stack = ["PostgreSQL","Redis","Kafka","REST API","Webhook","OAuth 2.0","Docker","CI/CD"];

export default function Proof() {
  return (
    <section style={{ padding:"80px 24px", borderTop:"1px solid #18181b" }}>
      <div style={{ maxWidth:"1152px", margin:"0 auto" }}>
        <p style={{ fontSize:"11px", letterSpacing:"0.2em", textTransform:"uppercase", color:"#52525a", marginBottom:"36px" }}>
          Infrastructure
        </p>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" }} className="proof-grid">

          {/* Metrics */}
          <div style={{ backgroundColor:"#0f0f11", border:"1px solid #1f1f23", borderRadius:"12px", padding:"28px" }}>
            <p style={{ fontSize:"12px", color:"#52525a", marginBottom:"20px", letterSpacing:"0.05em" }}>OPERATIONAL METRICS</p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"20px" }}>
              {metrics.map(m => (
                <div key={m.label}>
                  <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1.75rem", color:"#f2f2f3", letterSpacing:"-0.02em" }}>{m.value}</p>
                  <p style={{ fontSize:"12px", color:"#3b82f6", marginTop:"2px" }}>{m.label}</p>
                  <p style={{ fontSize:"11px", color:"#52525a", marginTop:"1px" }}>{m.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture visual */}
          <div style={{ backgroundColor:"#0f0f11", border:"1px solid #1f1f23", borderRadius:"12px", padding:"28px", display:"flex", flexDirection:"column", gap:"16px" }}>
            <p style={{ fontSize:"12px", color:"#52525a", letterSpacing:"0.05em" }}>SYSTEM ARCHITECTURE</p>

            {/* Flow diagram */}
            <div style={{ display:"flex", flexDirection:"column", gap:"8px", flex:1, justifyContent:"center" }}>
              {[
                { label:"Client Layer",    color:"#3b82f6", items:["Web App","Mobile","API Client"] },
                { label:"Service Layer",   color:"#6366f1", items:["Auth","Core API","Webhooks"]    },
                { label:"Data Layer",      color:"#8b5cf6", items:["PostgreSQL","Redis","Kafka"]    },
              ].map((row, i) => (
                <div key={row.label}>
                  <p style={{ fontSize:"10px", color:"#52525a", marginBottom:"5px", letterSpacing:"0.1em" }}>{row.label}</p>
                  <div style={{ display:"flex", gap:"6px" }}>
                    {row.items.map(item => (
                      <div key={item} style={{ flex:1, padding:"6px 10px", borderRadius:"6px", border:\`1px solid \${row.color}30\`, backgroundColor:\`\${row.color}08\`, fontSize:"11px", color:row.color, textAlign:"center", whiteSpace:"nowrap" }}>
                        {item}
                      </div>
                    ))}
                  </div>
                  {i < 2 && (
                    <div style={{ display:"flex", justifyContent:"center", marginTop:"3px" }}>
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path d="M6 0v8M2 5l4 4 4-4" stroke="#2a2a2f" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div style={{ backgroundColor:"#0f0f11", border:"1px solid #1f1f23", borderRadius:"12px", padding:"28px", gridColumn:"span 2" }}>
            <p style={{ fontSize:"12px", color:"#52525a", marginBottom:"16px", letterSpacing:"0.05em" }}>TECHNOLOGY STACK</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
              {stack.map(t => (
                <span key={t} style={{ fontSize:"12px", padding:"5px 12px", borderRadius:"5px", border:"1px solid #1f1f23", color:"#71717a", backgroundColor:"#111113" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{\`
        @media (max-width: 768px) {
          .proof-grid { grid-template-columns: 1fr !important; }
          .proof-grid > div:last-child { grid-column: span 1 !important; }
        }
      \`}</style>
    </section>
  );
}
`);

// ── Philosophy (tighter) ──
write("components/sections/Philosophy.tsx", `"use client";

export default function Philosophy() {
  return (
    <section id="philosophy" style={{ padding:"80px 24px", borderTop:"1px solid #18181b" }}>
      <div style={{ maxWidth:"1152px", margin:"0 auto" }}>
        <div style={{ position:"relative", backgroundColor:"#0f0f11", border:"1px solid #1f1f23", borderRadius:"16px", padding:"56px 56px", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize:"22px 22px", pointerEvents:"none" }} />
          <div style={{ position:"absolute", top:0, right:0, width:"300px", height:"300px", background:"radial-gradient(circle, rgba(59,130,246,0.04), transparent 70%)", pointerEvents:"none" }} />
          <div style={{ position:"relative" }}>
            <p style={{ fontSize:"11px", letterSpacing:"0.2em", textTransform:"uppercase", color:"#52525a", marginBottom:"20px" }}>
              Philosophy
            </p>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"clamp(1.6rem,3.5vw,2.75rem)", lineHeight:1.1, letterSpacing:"-0.02em", color:"#f2f2f3", maxWidth:"680px" }}>
              We believe software should be simple, powerful, and built to make an impact.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
`);

// ── Founder (tighter) ──
write("components/sections/Founder.tsx", `"use client";

export default function Founder() {
  return (
    <section id="about" style={{ padding:"80px 24px", borderTop:"1px solid #18181b" }}>
      <div style={{ maxWidth:"1152px", margin:"0 auto" }}>
        <div style={{ backgroundColor:"#0f0f11", border:"1px solid #1f1f23", borderRadius:"16px", padding:"40px 48px", maxWidth:"600px" }}>
          <p style={{ fontSize:"10.5px", letterSpacing:"0.2em", textTransform:"uppercase", color:"#3b82f6", fontWeight:500, marginBottom:"16px" }}>
            Founder
          </p>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1.75rem", color:"#f2f2f3", letterSpacing:"-0.02em", marginBottom:"4px" }}>
            Faiz Hamizan Machmud
          </h2>
          <p style={{ fontSize:"13px", color:"#52525a", marginBottom:"20px" }}>
            CEO &amp; Founder of Apermeann Technologies
          </p>
          <p style={{ fontSize:"14.5px", color:"#71717a", lineHeight:1.75 }}>
            Focused on building modern software systems that solve real problems and create long-term value.
          </p>
        </div>
      </div>
    </section>
  );
}
`);

// ── Footer (upgraded) ──
write("components/sections/Footer.tsx", `"use client";

export default function Footer() {
  return (
    <footer id="contact" style={{ borderTop:"1px solid #18181b", padding:"48px 24px 32px" }}>
      <div style={{ maxWidth:"1152px", margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:"40px", marginBottom:"40px" }}>

          {/* Brand */}
          <div>
            <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"14px", color:"#f2f2f3", marginBottom:"8px" }}>
              Apermeann Technologies
            </p>
            <p style={{ fontSize:"13px", color:"#52525a", lineHeight:1.7, marginBottom:"16px", maxWidth:"220px" }}>
              Software systems for modern industries. Built in Indonesia.
            </p>
            <a href="mailto:hello@apermeann.com"
              style={{ fontSize:"13px", color:"#3b82f6", textDecoration:"none" }}
              onMouseEnter={e=>(e.currentTarget.style.color="#60a5fa")}
              onMouseLeave={e=>(e.currentTarget.style.color="#3b82f6")}>
              hello@apermeann.com
            </a>
          </div>

          {/* Products */}
          <div>
            <p style={{ fontSize:"11px", letterSpacing:"0.15em", textTransform:"uppercase", color:"#52525a", marginBottom:"14px" }}>Products</p>
            {["Nordvenn","Apermeann Absolute","Freight Haul"].map(p => (
              <a key={p} href="#products" style={{ display:"block", fontSize:"13px", color:"#71717a", textDecoration:"none", marginBottom:"8px" }}
                onMouseEnter={e=>(e.currentTarget.style.color="#f2f2f3")}
                onMouseLeave={e=>(e.currentTarget.style.color="#71717a")}>
                {p}
              </a>
            ))}
          </div>

          {/* Company */}
          <div>
            <p style={{ fontSize:"11px", letterSpacing:"0.15em", textTransform:"uppercase", color:"#52525a", marginBottom:"14px" }}>Company</p>
            {[["About","#about"],["Contact","#contact"],["Philosophy","#philosophy"]].map(([l,h]) => (
              <a key={l} href={h} style={{ display:"block", fontSize:"13px", color:"#71717a", textDecoration:"none", marginBottom:"8px" }}
                onMouseEnter={e=>(e.currentTarget.style.color="#f2f2f3")}
                onMouseLeave={e=>(e.currentTarget.style.color="#71717a")}>
                {l}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div>
            <p style={{ fontSize:"11px", letterSpacing:"0.15em", textTransform:"uppercase", color:"#52525a", marginBottom:"14px" }}>Legal</p>
            {["Privacy Policy","Terms of Service"].map(l => (
              <a key={l} href="#" style={{ display:"block", fontSize:"13px", color:"#71717a", textDecoration:"none", marginBottom:"8px" }}
                onMouseEnter={e=>(e.currentTarget.style.color="#f2f2f3")}
                onMouseLeave={e=>(e.currentTarget.style.color="#71717a")}>
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop:"24px", borderTop:"1px solid #18181b", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"12px" }}>
          <p style={{ fontSize:"12px", color:"#3f3f46" }}>
            © 2026 Apermeann Technologies. All rights reserved.
          </p>
          <p style={{ fontSize:"12px", color:"#3f3f46" }}>
            Built in Indonesia 🇮🇩
          </p>
        </div>
      </div>
    </footer>
  );
}
`);

// ── Update page.tsx to include Proof section ──
write("app/page.tsx", `import Navbar     from "@/components/Navbar";
import Hero       from "@/components/sections/Hero";
import Products   from "@/components/sections/Products";
import Proof      from "@/components/sections/Proof";
import Philosophy from "@/components/sections/Philosophy";
import Founder    from "@/components/sections/Founder";
import Footer     from "@/components/sections/Footer";

export default function Home() {
  return (
    <main style={{ position:"relative" }}>
      <Navbar />
      <Hero />
      <Products />
      <Proof />
      <Philosophy />
      <Founder />
      <Footer />
    </main>
  );
}
`);

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅  Fix Part 2 done!

👉  Deploy:
    npm run build && npx vercel --prod

🌐  https://apermeann-landing.vercel.app
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
