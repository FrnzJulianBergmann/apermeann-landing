"use client";

export default function Philosophy() {
  return (
    <section id="philosophy" style={{ padding: "96px 40px", backgroundColor: "#fafaf9" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>

          <div style={{ backgroundColor: "#1a1a18", borderRadius: "8px", padding: "40px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "#4a4a42", marginBottom: "16px", fontWeight: 300 }}>PHILOSOPHY</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#f5f5f2" }}>
              Simplicity is not the<br />
              absence of complexity.<br />
              <span style={{ fontStyle: "italic", color: "#6a6a62" }}>It is the mastery of it.</span>
            </h2>
          </div>

          <div style={{ paddingTop: "8px" }}>
            {[
              "Most operational software is built to impress procurement committees, not to be used by the people who actually run operations. We build the other kind.",
              "Every product we ship starts from a real problem. We stay close to that problem until the solution is complete — not feature-complete, but genuinely useful.",
              "We are a small company by design. Small means focused. Focused means the work is good.",
            ].map((text, i) => (
              <p key={i} style={{ fontSize: "14px", color: "#5a5a52", lineHeight: 1.85, marginBottom: i < 2 ? "20px" : "0", fontWeight: 300 }}>
                {text}
              </p>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          #philosophy > div > div { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
