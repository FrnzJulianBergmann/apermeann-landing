"use client";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#fafaf9", padding: "64px 40px 48px" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>

        {/* Dark card */}
        <div style={{ backgroundColor: "#1a1a18", borderRadius: "8px", padding: "48px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "60px", marginBottom: "40px" }}>

          <div>
            <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: "13px", color: "#f5f5f2", marginBottom: "12px" }}>
              Apermeann Technologies
            </p>
            <p style={{ fontSize: "13px", color: "#6a6a62", lineHeight: 1.8, maxWidth: "240px", marginBottom: "20px", fontWeight: 300 }}>
              Operational software for small and medium-sized businesses.
            </p>
            <a href="https://mail.google.com/mail/?view=cm&to=apermeanntechnologies@gmail.com"
              style={{ fontSize: "13px", color: "#8a8a82", textDecoration: "none", fontWeight: 300, transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#f5f5f2"}
              onMouseLeave={e => e.currentTarget.style.color = "#8a8a82"}>
              apermeanntechnologies@gmail.com
            </a>
            <br />
            <a href="https://x.com/Apermeann" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#8a8a82", textDecoration: "none", fontWeight: 300, transition: "color 0.2s", marginTop: "10px", display: "inline-block" }}
              onMouseEnter={e => e.currentTarget.style.color = "#f5f5f2"}
              onMouseLeave={e => e.currentTarget.style.color = "#8a8a82"}>
              x.com/Apermeann
            </a>
          </div>

          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#4a4a42", marginBottom: "16px", fontWeight: 300 }}>PRODUCTS</p>
            <a href="#products"
              style={{ display: "block", fontSize: "13px", color: "#8a8a82", textDecoration: "none", marginBottom: "10px", fontWeight: 300, transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#f5f5f2"}
              onMouseLeave={e => e.currentTarget.style.color = "#8a8a82"}>
              CountFuell
            </a>
          </div>

          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#4a4a42", marginBottom: "16px", fontWeight: 300 }}>COMPANY</p>
            {[["Philosophy", "#philosophy"], ["About", "#about"], ["Contact", "https://mail.google.com/mail/?view=cm&to=apermeanntechnologies@gmail.com"]].map(([label, href]) => (
              <a key={label} href={href}
                style={{ display: "block", fontSize: "13px", color: "#8a8a82", textDecoration: "none", marginBottom: "10px", fontWeight: 300, transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#f5f5f2"}
                onMouseLeave={e => e.currentTarget.style.color = "#8a8a82"}>
                {label}
              </a>
            ))}
          </div>

          {/* Bottom bar di dalam dark card */}
          <div style={{ paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", gridColumn: "1 / -1" }}>
            <p style={{ fontSize: "12px", color: "#4a4a42", fontWeight: 300 }}>2026 Apermeann Technologies</p>
            <p style={{ fontSize: "12px", color: "#4a4a42", fontWeight: 300 }}>Jambi, Indonesia</p>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </footer>
  );
}
