import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

function write(filePath, content) {
  const dir = path.dirname(filePath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(filePath, content, "utf8");
  console.log(`  ✅ ${filePath}`);
}

console.log("\n🔧 Fix Part 1 — globals.css + layout + page\n");

write("app/globals.css", `@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg-primary:     #0a0a0b;
  --bg-card:        #111113;
  --border:         #1f1f23;
  --text-primary:   #f2f2f3;
  --text-secondary: #8a8a8f;
  --text-muted:     #52525a;
  --accent:         #3b82f6;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }

body {
  background-color: #0a0a0b;
  color: #f2f2f3;
  font-family: 'DM Sans', sans-serif;
  overflow-x: hidden;
}

/* Dot grid */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px);
  background-size: 28px 28px;
  pointer-events: none;
  z-index: 0;
}

/* Scrollbar */
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: #0a0a0b; }
::-webkit-scrollbar-thumb { background: #1f1f23; border-radius: 4px; }

::selection { background: rgba(59,130,246,0.25); }
`);

write("app/layout.tsx", `import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apermeann Technologies",
  description: "We build software that powers operations, empowers industries, and drives progress.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#0a0a0b", color: "#f2f2f3" }}>
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
    <main style={{ position: "relative" }}>
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
✅  Fix Part 1 done!
👉  Sekarang jalankan: node fix-part2.mjs
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
