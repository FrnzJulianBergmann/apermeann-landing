import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

const ROOT = "apermeann-landing";

function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  const dir = path.dirname(full);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(full, content, "utf8");
  console.log(`  ✅ ${filePath}`);
}

console.log("\n📝 Writing all components...\n");

// ── components/Navbar.tsx ──
write("components/Navbar.tsx", `"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Products",   href: "#products"   },
  { label: "Philosophy", href: "#philosophy" },
  { label: "About",      href: "#about"      },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={\`fixed top-0 inset-x-0 z-50 transition-all duration-300 \${
        scrolled
          ? "bg-[#0a0a0b]/90 backdrop-blur-md border-b border-[#1f1f23]"
          : ""
      }\`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          className="font-display font-bold text-[15px] tracking-tight text-[#f2f2f3] hover:text-white transition-colors"
        >
          Apermeann Technologies
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] text-[#8a8a8f] hover:text-[#f2f2f3] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[13px] px-4 py-1.5 rounded border border-[#1f1f23] text-[#f2f2f3] hover:border-[#3b82f6] transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={\`block w-5 h-px bg-[#8a8a8f] transition-all duration-300 \${menuOpen ? "rotate-45 translate-y-[7px]" : ""}\`} />
          <span className={\`block w-5 h-px bg-[#8a8a8f] transition-all duration-300 \${menuOpen ? "opacity-0" : ""}\`} />
          <span className={\`block w-5 h-px bg-[#8a8a8f] transition-all duration-300 \${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}\`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0a0a0b]/95 backdrop-blur-md border-b border-[#1f1f23] px-6 pb-6 pt-2 flex flex-col gap-4"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#8a8a8f] hover:text-[#f2f2f3] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm w-fit px-4 py-2 rounded border border-[#1f1f23] text-[#f2f2f3] hover:border-[#3b82f6] transition-all"
          >
            Contact
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
`);

// ── components/sections/Hero.tsx ──
write("components/sections/Hero.tsx", `"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-20 overflow-hidden">
      {/* subtle blue glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.p {...fadeUp(0.1)}
          className="text-xs uppercase tracking-[0.2em] text-[#3b82f6] mb-8 font-medium">
          Software Infrastructure
        </motion.p>

        <motion.h1 {...fadeUp(0.2)}
          className="font-display font-bold text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.03em] text-[#f2f2f3] max-w-4xl">
          Apermeann<br />Technologies
        </motion.h1>

        <motion.p {...fadeUp(0.35)}
          className="mt-8 text-[clamp(1rem,2vw,1.15rem)] text-[#8a8a8f] max-w-lg leading-relaxed">
          We build software that powers operations,{" "}
          empowers industries, and drives progress.
        </motion.p>

        <motion.div {...fadeUp(0.5)} className="mt-12 flex flex-wrap gap-3">
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#3b82f6] text-white text-sm font-medium hover:bg-[#2563eb] transition-colors"
          >
            Explore Products
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#philosophy"
            className="inline-flex items-center px-6 py-3 rounded border border-[#1f1f23] text-[#f2f2f3] text-sm font-medium hover:border-[#52525a] transition-colors"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0a0a0b] to-transparent pointer-events-none" />
    </section>
  );
}
`);

// ── components/sections/Products.tsx ──
write("components/sections/Products.tsx", `"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "Nordvenn",
    tag:  "Vendor Management",
    desc: "Vendor management platform built for clarity, control, and stronger partnerships.",
  },
  {
    name: "Apermeann Absolute",
    tag:  "AI Operations",
    desc: "AI-powered operational systems that unify data, processes, and decision-making.",
  },
  {
    name: "Freight Haul",
    tag:  "Logistics",
    desc: "Trucking and logistics platform for compliance, efficiency, and real-time visibility.",
  },
];

export default function Products() {
  return (
    <section id="products" className="section-pad px-6 border-t border-[#1f1f23]">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.2em] text-[#52525a] mb-12"
        >
          Our Products
        </motion.p>

        <div className="grid md:grid-cols-3 gap-4">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-[#111113] border border-[#1f1f23] rounded-xl p-7 flex flex-col gap-4 hover:border-[#2a2a2f] hover:bg-[#141416] transition-all duration-300"
            >
              <span className="text-[11px] uppercase tracking-[0.15em] text-[#3b82f6] font-medium">
                {p.tag}
              </span>
              <h3 className="font-display font-bold text-[1.2rem] text-[#f2f2f3] leading-tight">
                {p.name}
              </h3>
              <p className="text-[0.875rem] text-[#8a8a8f] leading-relaxed flex-1">
                {p.desc}
              </p>
              <div className="pt-4 border-t border-[#1f1f23]">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[13px] text-[#3b82f6] hover:text-blue-400 transition-colors"
                >
                  View Product
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

// ── components/sections/Philosophy.tsx ──
write("components/sections/Philosophy.tsx", `"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section id="philosophy" className="section-pad px-6 border-t border-[#1f1f23]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-[#111113] border border-[#1f1f23] rounded-2xl px-10 py-16 md:px-16 overflow-hidden"
        >
          {/* dot pattern */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff08 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.2em] text-[#52525a] mb-6">
              Philosophy
            </p>
            <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-[#f2f2f3] max-w-2xl">
              We believe software should be simple, powerful, and built to make an impact.
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
`);

// ── components/sections/Founder.tsx ──
write("components/sections/Founder.tsx", `"use client";

import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section id="about" className="section-pad px-6 border-t border-[#1f1f23]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#111113] border border-[#1f1f23] rounded-2xl px-10 py-12 md:px-16 max-w-2xl"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#3b82f6] font-medium mb-5">
            Founder
          </p>
          <h2 className="font-display font-bold text-[1.75rem] text-[#f2f2f3] tracking-tight mb-1">
            Faiz Hamizan Machmud
          </h2>
          <p className="text-sm text-[#52525a] mb-6">
            CEO &amp; Founder of Apermeann Technologies
          </p>
          <p className="text-[0.9375rem] text-[#8a8a8f] leading-relaxed">
            Focused on building modern software systems that solve real problems and create long-term value.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
`);

// ── components/sections/Footer.tsx ──
write("components/sections/Footer.tsx", `export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#1f1f23] px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display font-bold text-[14px] text-[#f2f2f3] mb-2">
            Apermeann Technologies
          </p>
          <p className="text-[13px] text-[#52525a]">
            Software systems for modern industries.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-[#52525a] mb-4">Products</p>
          <ul className="flex flex-col gap-2">
            {["Nordvenn", "Apermeann Absolute", "Freight Haul"].map((p) => (
              <li key={p}>
                <a href="#products" className="text-[13px] text-[#8a8a8f] hover:text-[#f2f2f3] transition-colors">
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-[#52525a] mb-4">Company</p>
          <ul className="flex flex-col gap-2">
            {["About", "Contact"].map((p) => (
              <li key={p}>
                <a href={\`#\${p.toLowerCase()}\`} className="text-[13px] text-[#8a8a8f] hover:text-[#f2f2f3] transition-colors">
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1 md:text-right">
          <p className="text-[13px] text-[#52525a]">
            © 2026 Apermeann Technologies<br />All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
`);

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅  Part 2 done! Semua components siap.

👉  Sekarang jalankan:

    cd apermeann-landing
    npm run dev -- -p 3001

🌐  Buka: http://localhost:3001
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
