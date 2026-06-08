import { execSync } from "child_process";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

const ROOT = "apermeann-landing";

function run(cmd, cwd = ".") {
  console.log(`\n▶ ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd });
}

function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  const dir = path.dirname(full);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(full, content, "utf8");
  console.log(`  ✅ ${filePath}`);
}

// ─────────────────────────────────────────
// 1. CREATE NEXT.JS PROJECT
// ─────────────────────────────────────────
console.log("\n🧱 Creating Next.js project...");
if (!existsSync(path.join(ROOT, "package.json"))) {
  run(`npx create-next-app@latest ${ROOT} --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --yes`);
} else {
  console.log("  ⚠️  Project already exists, skipping...");
}

// ─────────────────────────────────────────
// 2. INSTALL DEPENDENCIES
// ─────────────────────────────────────────
console.log("\n📦 Installing dependencies...");
run(`npm install framer-motion clsx tailwind-merge`, ROOT);

// ─────────────────────────────────────────
// 3. CONFIG FILES
// ─────────────────────────────────────────
console.log("\n📝 Writing config + base files...");

write("tailwind.config.ts", `import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary":     "#0a0a0b",
        "bg-secondary":   "#111113",
        "bg-card":        "#141416",
        "bg-card-hover":  "#1a1a1d",
        "border-base":    "#1f1f23",
        "text-primary":   "#f2f2f3",
        "text-secondary": "#8a8a8f",
        "text-muted":     "#52525a",
        "accent-blue":    "#3b82f6",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        sans:    ["DM Sans", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
`);

write("app/globals.css", `@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg-primary:     #0a0a0b;
  --bg-secondary:   #111113;
  --bg-card:        #141416;
  --bg-card-hover:  #1a1a1d;
  --border:         #1f1f23;
  --text-primary:   #f2f2f3;
  --text-secondary: #8a8a8f;
  --text-muted:     #52525a;
  --accent-blue:    #3b82f6;
  --font-display:   'Syne', sans-serif;
  --font-body:      'DM Sans', sans-serif;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  overflow-x: hidden;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: radial-gradient(circle, #ffffff05 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  z-index: 0;
}

::-webkit-scrollbar             { width: 6px; }
::-webkit-scrollbar-track       { background: var(--bg-primary); }
::-webkit-scrollbar-thumb       { background: var(--border); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--text-muted); }

::selection {
  background: rgba(59,130,246,0.2);
  color: var(--text-primary);
}

.section-pad { padding: 7rem 0; }
@media (max-width: 768px) { .section-pad { padding: 4rem 0; } }
`);

write("app/layout.tsx", `import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apermeann Technologies",
  description: "We build software that powers operations, empowers industries, and drives progress.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0a0b] text-[#f2f2f3] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
`);

write("app/page.tsx", `import Navbar     from "@/components/Navbar";
import Hero       from "@/components/sections/Hero";
import Products   from "@/components/sections/Products";
import Philosophy from "@/components/sections/Philosophy";
import Founder    from "@/components/sections/Founder";
import Footer     from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Products />
      <Philosophy />
      <Founder />
      <Footer />
    </main>
  );
}
`);

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅  Part 1 done!

👉  Sekarang jalankan:

    node setup-part2.mjs

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
