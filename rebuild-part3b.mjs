import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

function write(filePath, content) {
  const dir = path.dirname(filePath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(filePath, content, "utf8");
  console.log(`  ✅ ${filePath}`);
}

console.log("\n🧱 Rebuild Part 3B — Infra + Philosophy + Founder + Footer + page.tsx\n");

// ── Infrastructure ──
write("components/sections/Proof.tsx", `"use client";

const metrics = [
  { icon:"↓", label:"Vendor Onboarding", sub:"Time Reduction",    val:"68%"   },
  { icon:"⟳", label:"Data Unification",  sub:"Cross-system Sync", val:"100%"  },
  { icon:"◎", label:"Fleet Visibility",  sub:"Real-time Tracking", val:"∞"    },
  { icon:"↑", label:"System Uptime",     sub:"Production Target",  val:"99.9%" },
];

const stack = ["PostgreSQL","Redis","Kafka","REST API","Webhook","OAuth 2.0","Docker","CI/CD"];

export default function Proof() {
  return (
    <section style={{ padding:"96px 32px", borderTop:"1px solid #18181b" }}>
      <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
        <p style={{ fontSize:"11px", letterSpacing:"0.18em", textTransform:"uppercase", color:"#52525a", marginBottom:"36px" }}>
          Infrastructure Overview
        </p>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" }}>

          {/* Left — headline + metrics */}
          <div style={{ backgroundColor:"#0c0c0e", border:"1px solid #1c1c1f", borderRadius:"10px", padding:"32px" }}>
            <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"clamp(1.4rem,2.5vw,2rem)", lineHeight:1.15, letterSpacing:"-0.02em", color:"#f4f4f5", marginBottom:"32px" }}>
              Built on a robust, scalable,<br />and secure infrastructure.
            </h3>
            <div style={{ display:"flex", flexDirection:"column", gap:"20px" }}>
              {metrics.map(m => (
                <div key={m.label} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", paddingBottom:"20px", borderBottom:"1px solid #18181b" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
                    <div style={{ width:"32px", height:"32px", borderRadius:"7px", border:"1px solid #1c1c1f", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"13px", color:"#52525a" }}>
                      {m.icon}
                    </div>
                    <div>
                      <p style={{ fontSize:"13px", color:"#a1a1aa", lineHeight:1 }}>{m.label}</p>
                      <p style={{ fontSize:"11px", color:"#52525a", marginTop:"3px" }}>{m.sub}</p>
                    </div>
                  </div>
                  <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1.5rem", color:"#f4f4f5", letterSpacing:"-0.02em" }}>{m.val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — architecture */}
          <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
            <div style={{ backgroundColor:"#0c0c0e", border:"1px solid #1c1c1f", borderRadius:"10px", padding:"28px", flex:1 }}>
              <p style={{ fontSize:"11px", letterSpacing:"0.14em", textTransform:"uppercase", color:"#52525a", marginBottom:"20px" }}>
                System Architecture
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
                {[
                  { label:"Client Layer",  color:"#3b82f6", items:["Web App","Mobile","API Client"] },
                  { label:"Service Layer", color:"#6366f1", items:["Auth","Core API","Webhooks"]    },
                  { label:"Data Layer",    color:"#8b5cf6", items:["PostgreSQL","Redis","Kafka"]    },
                ].map((row, i, arr) => (
                  <div key={row.label}>
                    <p style={{ fontSize:"10px", color:"#52525a", marginBottom:"6px", letterSpacing:"0.1em" }}>{row.label}</p>
                    <div style={{ display:"flex", gap:"6px" }}>
                      {row.items.map(item => (
                        <div key={item} style={{ flex:1, padding:"7px 8px", borderRadius:"5px", border:\`1px solid \${row.color}25\`, backgroundColor:\`\${row.color}07\`, fontSize:"11px", color:row.color, textAlign:"center" }}>
                          {item}
                        </div>
                      ))}
                    </div>
                    {i < arr.length - 1 && (
                      <div style={{ display:"flex", justifyContent:"center", margin:"4px 0" }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M5 0v8M2 5l3 3 3-3" stroke="#27272a" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div style={{ backgroundColor:"#0c0c0e", border:"1px solid #1c1c1f", borderRadius:"10px", padding:"24px" }}>
              <p style={{ fontSize:"11px", letterSpacing:"0.14em", textTransform:"uppercase", color:"#52525a", marginBottom:"14px" }}>
                Technology Stack
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"6px" }}>
                {stack.map(t => (
                  <span key={t} style={{ fontSize:"12px", padding:"4px 10px", borderRadius:"4px", border:"1px solid #1c1c1f", color:"#71717a" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{\`
        @media (max-width: 900px) {
          #proof-grid { grid-template-columns: 1fr !important; }
        }
      \`}</style>
    </section>
  );
}
`);

// ── Philosophy ──
write("components/sections/Philosophy.tsx", `"use client";

export default function Philosophy() {
  return (
    <section id="philosophy" style={{ padding:"96px 32px", borderTop:"1px solid #18181b" }}>
      <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"64px", alignItems:"center" }}>
          <div>
            <p style={{ fontSize:"11px", letterSpacing:"0.18em", textTransform:"uppercase", color:"#52525a", marginBottom:"20px" }}>
              Our Philosophy
            </p>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"clamp(1.75rem,3.5vw,2.75rem)", lineHeight:1.08, letterSpacing:"-0.025em", color:"#f4f4f5" }}>
              Simplicity is not the absence of complexity.<br />
              <span style={{ color:"#52525a" }}>It is the mastery of it.</span>
            </h2>
          </div>
          <div>
            <p style={{ fontSize:"15px", color:"#71717a", lineHeight:1.8, marginBottom:"24px" }}>
              We build systems that solve real problems and create long-term value.
            </p>
            <a href="#about"
              style={{ display:"inline-flex", alignItems:"center", gap:"7px", fontSize:"13.5px", color:"#a1a1aa", textDecoration:"none", transition:"color 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#f4f4f5"}
              onMouseLeave={e => e.currentTarget.style.color = "#a1a1aa"}>
              Read our philosophy
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
`);

// ── Founder ──
write("components/sections/Founder.tsx", `"use client";

export default function Founder() {
  return (
    <section id="about" style={{ padding:"96px 32px", borderTop:"1px solid #18181b" }}>
      <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"64px", alignItems:"center" }}>
          <div>
            <p style={{ fontSize:"11px", letterSpacing:"0.18em", textTransform:"uppercase", color:"#52525a", marginBottom:"20px" }}>
              Founder
            </p>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"clamp(1.5rem,3vw,2.25rem)", lineHeight:1.1, letterSpacing:"-0.025em", color:"#f4f4f5", marginBottom:"6px" }}>
              Faiz Hamizan Machmud
            </h2>
            <p style={{ fontSize:"13px", color:"#52525a", marginBottom:"20px" }}>
              CEO &amp; Founder of Apermeann Technologies
            </p>
          </div>
          <div>
            <p style={{ fontSize:"15px", color:"#71717a", lineHeight:1.8 }}>
              Focused on building modern software systems that solve real problems and create long-term value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
`);

// ── Footer ──
write("components/sections/Footer.tsx", `"use client";

export default function Footer() {
  return (
    <footer id="contact" style={{ borderTop:"1px solid #18181b", padding:"56px 32px 36px" }}>
      <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:"40px", marginBottom:"48px" }}>

          {/* Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"12px" }}>
              <div style={{ width:"24px", height:"24px", borderRadius:"5px", border:"1px solid #27272a", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2L12 12H2L7 2Z" stroke="#3b82f6" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"13.5px", color:"#f4f4f5" }}>
                Apermeann Technologies
              </p>
            </div>
            <p style={{ fontSize:"13px", color:"#52525a", lineHeight:1.75, marginBottom:"16px", maxWidth:"200px" }}>
              Operational software for logistics, AI systems, and modern infrastructure.
            </p>
            <a href="mailto:hello@apermeann.com"
              style={{ fontSize:"13px", color:"#71717a", textDecoration:"none", transition:"color 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#f4f4f5"}
              onMouseLeave={e => e.currentTarget.style.color = "#71717a"}>
              hello@apermeann.com
            </a>
          </div>

          {/* Products */}
          <div>
            <p style={{ fontSize:"11px", letterSpacing:"0.15em", textTransform:"uppercase", color:"#52525a", marginBottom:"14px" }}>Products</p>
            {["Nordvenn","Apermeann Absolute","Freight Haul"].map(p => (
              <a key={p} href="#products" style={{ display:"block", fontSize:"13px", color:"#71717a", textDecoration:"none", marginBottom:"9px", transition:"color 0.15s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#f4f4f5"}
                onMouseLeave={e => e.currentTarget.style.color = "#71717a"}>
                {p}
              </a>
            ))}
          </div>

          {/* Company */}
          <div>
            <p style={{ fontSize:"11px", letterSpacing:"0.15em", textTransform:"uppercase", color:"#52525a", marginBottom:"14px" }}>Company</p>
            {[["About","#about"],["Philosophy","#philosophy"],["Contact","#contact"]].map(([l,h]) => (
              <a key={l} href={h} style={{ display:"block", fontSize:"13px", color:"#71717a", textDecoration:"none", marginBottom:"9px", transition:"color 0.15s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#f4f4f5"}
                onMouseLeave={e => e.currentTarget.style.color = "#71717a"}>
                {l}
              </a>
            ))}
          </div>

          {/* System Status */}
          <div>
            <p style={{ fontSize:"11px", letterSpacing:"0.15em", textTransform:"uppercase", color:"#52525a", marginBottom:"14px" }}>System Status</p>
            <div style={{ display:"flex", alignItems:"center", gap:"7px", padding:"8px 12px", borderRadius:"6px", border:"1px solid #1c1c1f", width:"fit-content" }}>
              <div style={{ width:"6px", height:"6px", borderRadius:"50%", backgroundColor:"#22c55e" }} />
              <span style={{ fontSize:"12px", color:"#a1a1aa" }}>Operational</span>
            </div>
            <p style={{ fontSize:"12px", color:"#52525a", marginTop:"8px" }}>99.9% Uptime</p>
            <div style={{ marginTop:"20px" }}>
              <p style={{ fontSize:"11px", letterSpacing:"0.15em", textTransform:"uppercase", color:"#52525a", marginBottom:"10px" }}>Legal</p>
              {["Privacy Policy","Terms of Service"].map(l => (
                <a key={l} href="#" style={{ display:"block", fontSize:"13px", color:"#71717a", textDecoration:"none", marginBottom:"8px", transition:"color 0.15s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#f4f4f5"}
                  onMouseLeave={e => e.currentTarget.style.color = "#71717a"}>
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
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

// ── page.tsx ──
write("app/page.tsx", `import Navbar     from "@/components/Navbar";
import Hero       from "@/components/sections/Hero";
import Products   from "@/components/sections/Products";
import Proof      from "@/components/sections/Proof";
import Philosophy from "@/components/sections/Philosophy";
import Founder    from "@/components/sections/Founder";
import Footer     from "@/components/sections/Footer";

export default function Home() {
  return (
    <main style={{ position:"relative", backgroundColor:"#09090b" }}>
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
✅  Part 3B done! Semua sections siap.

👉  Cek localhost:
    npm run dev -- -p 3001

👉  Deploy ke Vercel:
    npm run build && npx vercel --prod

🌐  http://localhost:3001
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
