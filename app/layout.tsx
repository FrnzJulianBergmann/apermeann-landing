import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apermeann Technologies",
  description: "Operational software for small and medium-sized businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#fafaf9", color: "#1a1a18" }}>
        {children}
      </body>
    </html>
  );
}
