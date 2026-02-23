import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import Nosotros from "@/components/Nosotros";
import Servicios from "@/components/Servicios";
import Laboratorio from "@/components/Laboratorio";
import Documentos from "@/components/Documentos";
import Calidad from "@/components/Calidad";
import PPSS from "@/components/PPSS";
import Contacto from "@/components/Contacto";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <HeroBanner />
      <Nosotros />
      <Servicios />
      <Laboratorio />
      <Documentos />
      <Calidad />
      <PPSS />
      <Contacto />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
