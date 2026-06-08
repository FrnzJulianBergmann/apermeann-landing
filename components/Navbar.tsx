"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { label: "Products",   href: "#products"   },
  { label: "Philosophy", href: "#philosophy" },
  { label: "About",      href: "#about"      },
  { label: "Contact", href: "https://mail.google.com/mail/?view=cm&to=apermeanntechnologies@gmail.com" },
];

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen]     = useState(false);

  return (
    <header style={{
      position:   "fixed",
      top: 0, left: 0, right: 0,
      zIndex:     50,
      backgroundImage: "url('/97 Vizier.jpg')",
      backgroundSize:  "100% 100%",
      backgroundColor: "#0a0a0a",
      backgroundPosition: "center",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>

        {/* Desktop */}
        <nav className="hide-mobile" style={{ display: "flex", alignItems: "center", height: "72px" }}>

          {/* Logo */}
          <img
            src="/AperX Logo1.png"
            alt="Apermeann"
            style={{ display: "block", flexShrink: 0, marginRight: "auto", height: "200px", width: "auto" }}
          />

          {/* Nav links */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                className={`nav-link${active === l.label ? " active" : ""}`}
                onClick={(e) => { e.preventDefault(); setActive(l.label); const el = document.querySelector(l.href); if(el) el.scrollIntoView({behavior:'smooth'}); }}
              >
                {l.label}
              </a>
            ))}
          </div>

        </nav>

        {/* Mobile */}
        <div className="show-mobile" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" }}>
          <Image
            src="/Apermeann SpaceX Style No background.svg"
            alt="Apermeann"
            width={130}
            height={30}
            unoptimized
          />
          <button onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", display: "flex", flexDirection: "column", gap: "5px" }}>
            {[0, 1].map(i => (
              <span key={i} style={{
                display: "block", width: "20px", height: "1.5px", backgroundColor: "#ffffff", transition: "all 0.3s",
                transform: open ? (i === 0 ? "rotate(45deg) translate(3px,3px)" : "rotate(-45deg) translate(3px,-3px)") : "none",
              }} />
            ))}
          </button>
        </div>

      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ padding: "12px 40px 20px", display: "flex", flexDirection: "column", gap: "4px" }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ fontSize: "14px", color: "#ffffff", textDecoration: "none", padding: "10px 0", opacity: 0.8 }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
