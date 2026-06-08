import { writeFileSync } from "fs";

const content = `"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

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
          <a href="#products"
            style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"12px 24px", borderRadius:"7px", backgroundColor:"#3b82f6", color:"#fff", fontSize:"14px", fontWeight:500, textDecoration:"none" }}
            onMouseEnter={e=>(e.currentTarget.style.backgroundColor="#2563eb")}
            onMouseLeave={e=>(e.currentTarget.style.backgroundColor="#3b82f6")}>
            Explore Products
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#philosophy"
            style={{ display:"inline-flex", alignItems:"center", padding:"12px 24px", borderRadius:"7px", border:"1px solid #1f1f23", color:"#f2f2f3", fontSize:"14px", fontWeight:500, textDecoration:"none" }}
            onMouseEnter={e=>(e.currentTarget.style.borderColor="#52525a")}
            onMouseLeave={e=>(e.currentTarget.style.borderColor="#1f1f23")}>
            Learn More
          </a>
        </div>
      </div>

      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"120px", background:"linear-gradient(to top, #0a0a0b, transparent)", pointerEvents:"none" }} />
    </section>
  );
}
`;

writeFileSync("components/sections/Hero.tsx", content, "utf8");
console.log("✅ Hero.tsx fixed!");
console.log("\n👉 Sekarang jalankan:");
console.log("   npm run build");
console.log("   npx vercel --prod");
