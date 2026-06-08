"use client";

export default function Products() {
  return (
    <section id="products" style={{ padding: "96px 40px", backgroundColor: "#fafaf9" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "56px" }}>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "#b0b0a6", marginBottom: "12px", fontWeight: 300 }}>PORTFOLIO</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1a1a18" }}>
              One product,{" "}
              <span style={{ fontStyle: "italic", color: "#8a8a82" }}>built right.</span>
            </h2>
          </div>
          <p style={{ fontSize: "13.5px", color: "#8a8a82", lineHeight: 1.8, maxWidth: "340px", fontWeight: 300, paddingTop: "4px" }}>
            More products are in development. We build slowly and deliberately — each tool solves a specific operational problem, completely.
          </p>
        </div>

        {/* Product card */}
        <div style={{ backgroundColor: "#1a1a18", borderRadius: "8px", padding: "48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>

          {/* Left */}
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "#6a6a62", marginBottom: "12px", fontWeight: 300 }}>FUEL COST ESTIMATION — 01</p>
            <h3 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "#f5f5f2", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "20px" }}>
              CountFuell
            </h3>
            <p style={{ fontSize: "14px", color: "#8a8a82", lineHeight: 1.85, marginBottom: "32px", fontWeight: 300 }}>
              A fuel cost calculator built for everyday drivers. Enter your route, pick your car, and know exactly what the trip will cost before you leave.
            </p>
            <a href="#"
              style={{ fontSize: "13px", color: "#f5f5f2", textDecoration: "none", borderBottom: "1px solid #3a3a36", paddingBottom: "2px", transition: "border-color 0.2s", fontWeight: 300 }}
              onMouseEnter={e => e.currentTarget.style.borderBottomColor = "#f5f5f2"}
              onMouseLeave={e => e.currentTarget.style.borderBottomColor = "#3a3a36"}>
              countfuell.apermeann.com
            </a>
            <br />
            <a href="https://x.com/Apermeann" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#f5f5f2", textDecoration: "none", borderBottom: "1px solid #3a3a36", paddingBottom: "2px", transition: "border-color 0.2s", fontWeight: 300, marginTop: "10px", display: "inline-block" }}
              onMouseEnter={e => e.currentTarget.style.borderBottomColor = "#f5f5f2"}
              onMouseLeave={e => e.currentTarget.style.borderBottomColor = "#3a3a36"}>
              x.com/Apermeann
            </a>
          </div>

          {/* Right — features */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { label: "Route Planning",   desc: "Compare fastest, fuel-efficient, and highway-free routes in one view." },
              { label: "Vehicle Compare",  desc: "Estimate cost differences between vehicles on the same route." },
              { label: "Cost Forecasting", desc: "Real-time fuel prices with hardcoded fallback for reliability." },
            ].map((f, i, arr) => (
              <div key={f.label} style={{ padding: "20px 0", borderBottom: i < arr.length - 1 ? "1px solid #2a2a26" : "none" }}>
                <p style={{ fontSize: "13px", color: "#d4d4cc", marginBottom: "6px", fontWeight: 400 }}>{f.label}</p>
                <p style={{ fontSize: "12.5px", color: "#6a6a62", lineHeight: 1.7, fontWeight: 300 }}>{f.desc}</p>
              </div>
            ))}
          </div>

        </div>

        {/* CountFuell Mockup Section */}
        <div style={{ marginTop: "48px", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "60px", alignItems: "stretch" }}>

          {/* Left — text dengan background hitam */}
          <div style={{ backgroundColor: "#1a1a18", borderRadius: "8px", padding: "48px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "#6a6a62", marginBottom: "16px", fontWeight: 300 }}>COUNTFUELL — IN ACTION</p>
            <h3 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#f5f5f2", marginBottom: "20px" }}>
              UNDERSTAND EVERY GALLON
            </h3>
            <p style={{ fontSize: "14px", color: "#8a8a82", lineHeight: 1.85, fontWeight: 300, maxWidth: "360px" }}>
              Calculate fuel consumption, compare routes, and make cost-efficient decisions before every trip.
            </p>
          </div>

          {/* Right — mockup */}
          <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.10)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/CountFuellMockup.png"
              alt="CountFuell Mockup"
              style={{ width: "120%", height: "100%", display: "block", objectFit: "cover" }}
            />
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          #products > div > div:first-child { flex-direction: column !important; gap: 20px !important; }
          #products > div > div:last-child { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
