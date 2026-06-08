import Navbar     from "@/components/Navbar";
import Hero       from "@/components/sections/Hero";
import Products   from "@/components/sections/Products";
import Philosophy from "@/components/sections/Philosophy";
import Founder    from "@/components/sections/Founder";
import Footer     from "@/components/sections/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#fafaf9" }}>
      <Navbar />
      <Hero />
      <Products />
      <Philosophy />
      <Founder />
      <Footer />
    </main>
  );
}
