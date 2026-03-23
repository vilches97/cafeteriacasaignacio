import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Desayunos from "@/components/Desayunos";
import SobreNosotros from "@/components/SobreNosotros";
import Carta from "@/components/Carta";
import Opiniones from "@/components/Opiniones";
import Horario from "@/components/Horario";
import Galeria from "@/components/Galeria";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Desayunos />
      <SobreNosotros />
      <Carta />
      <Opiniones />
      <Horario />
      <Galeria />
      <Contacto />
      <Footer />
    </>
  );
};

export default Index;
