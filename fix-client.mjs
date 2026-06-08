import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

function write(filePath, content) {
  const dir = path.dirname(filePath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(filePath, content, "utf8");
  console.log(`  ✅ ${filePath}`);
}

console.log("\n🔧 Fix — Footer + Philosophy + Founder (use client)\n");

write("components/sections/Footer.tsx", `"use client";

export default function Footer() {
  return (
    <footer id="contact" style={{ borderTop:"1px solid #1f1f23", padding:"64px 24px" }}>
      <div style={{ maxWidth:"1152px", margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(160px,1fr))", gap:"40px" }}>
        <div>
          <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"14px", color:"#f2f2f3", marginBottom:"8px" }}>
            Apermeann Technologies
          </p>
          <p style={{ fontSize:"13px", color:"#52525a" }}>Software systems for modern industries.</p>
        </div>

        <div>
          <p style={{ fontSize:"11px", letterSpacing:"0.15em", textTransform:"uppercase", color:"#52525a", marginBottom:"16px" }}>Products</p>
          {["Nordvenn","Apermeann Absolute","Freight Haul"].map(p => (
            <a key={p} href="#products"
              style={{ display:"block", fontSize:"13px", color:"#8a8a8f", textDecoration:"none", marginBottom:"8px" }}
              onMouseEnter={e=>(e.currentTarget.style.color="#f2f2f3")}
              onMouseLeave={e=>(e.currentTarget.style.color="#8a8a8f")}>
              {p}
            </a>
          ))}
        </div>

        <div>
          <p style={{ fontSize:"11px", letterSpacing:"0.15em", textTransform:"uppercase", color:"#52525a", marginBottom:"16px" }}>Company</p>
          {[["About","#about"],["Contact","#contact"]].map(([label,href]) => (
            <a key={label} href={href}
              style={{ display:"block", fontSize:"13px", color:"#8a8a8f", textDecoration:"none", marginBottom:"8px" }}
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

write("components/sections/Philosophy.tsx", `"use client";

export default function Philosophy() {
  return (
    <section id="philosophy" style={{ padding:"112px 24px", borderTop:"1px solid #1f1f23" }}>
      <div style={{ maxWidth:"1152px", margin:"0 auto" }}>
        <div style={{ position:"relative", backgroundColor:"#111113", border:"1px solid #1f1f23", borderRadius:"20px", padding:"80px 64px", overflow:"hidden" }}>
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

write("components/sections/Founder.tsx", `"use client";

export default function Founder() {
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

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅  Fix done! Browser harusnya auto-refresh.
🌐  Cek: http://localhost:3001
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
