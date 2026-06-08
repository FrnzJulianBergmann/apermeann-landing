"use client";

const metrics = [
  { icon:"↓", label:"Vendor Onboarding", sub:"Time Reduction",    val:"68%"   },
  { icon:"⟳", label:"Data Unification",  sub:"Cross-system Sync", val:"100%"  },
  { icon:"◎", label:"Fleet Visibility",  sub:"Real-time Tracking", val:"∞"    },
  { icon:"↑", label:"System Uptime",     sub:"Production Target",  val:"99.9%" },
];

const stack = ["PostgreSQL","Redis","Kafka","REST API","Webhook","OAuth 2.0","Docker","CI/CD"];

export default function Proof() {
  return (
    <section style={{ padding:"96px 32px" }}>
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
                        <div key={item} style={{ flex:1, padding:"7px 8px", borderRadius:"5px", border:`1px solid ${row.color}25`, backgroundColor:`${row.color}07`, fontSize:"11px", color:row.color, textAlign:"center" }}>
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

      <style>{`
        @media (max-width: 900px) {
          #proof-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
