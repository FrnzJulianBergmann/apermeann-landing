"use client";

export default function Founder() {
  return (
    <section id="about" style={{ padding: "96px 40px", backgroundColor: "#fafaf9" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "60px", alignItems: "start" }}>

          {/* Left — dark card */}
          <div style={{ backgroundColor: "#1a1a18", borderRadius: "8px", padding: "48px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "#8a8a82", marginBottom: "16px", fontWeight: 300 }}>FOUNDER</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", lineHeight: 1.2, letterSpacing: "-0.01em", color: "#f5f5f2" }}>
              Faiz Hamizan<br />Machmud
            </h2>
            <p style={{ fontSize: "12.5px", color: "#8a8a82", marginTop: "8px", fontWeight: 300 }}>
              CEO &amp; Founder, Apermeann Technologies
            </p>
          </div>

          {/* Right — plain, no container */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", paddingTop: "4px" }}>
            <div>
              <p style={{ fontSize: "14px", color: "#5a5a52", lineHeight: 1.85, marginBottom: "20px", fontWeight: 300 }}>
                Apermeann was started with a straightforward premise: the software that runs day-to-day operations at small and medium-sized businesses is often overcomplicated, underbuilt, or both.
              </p>
              <p style={{ fontSize: "14px", color: "#5a5a52", lineHeight: 1.85, fontWeight: 300 }}>
                CountFuell is the first answer to that problem. More will follow, each addressing a specific gap where better tooling creates measurable operational value.
              </p>
            </div>
            <div>
              <p style={{ fontSize: "14px", color: "#5a5a52", lineHeight: 1.85, marginBottom: "28px", fontWeight: 300 }}>
                Based in Jambi, Indonesia. Building for businesses everywhere.
              </p>
              <a href="https://mail.google.com/mail/?view=cm&to=apermeanntechnologies@gmail.com"
                style={{ fontSize: "13px", color: "#1a1a18", textDecoration: "none", borderBottom: "1px solid #c0c0b8", paddingBottom: "2px", transition: "border-color 0.2s", fontWeight: 300 }}
                onMouseEnter={e => e.currentTarget.style.borderBottomColor = "#1a1a18"}
                onMouseLeave={e => e.currentTarget.style.borderBottomColor = "#c0c0b8"}>
                apermeanntechnologies@gmail.com
              </a>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          #about > div > div { grid-template-columns: 1fr !important; }
          #about > div > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
