import { useScrollReveal } from "@/hooks/useScrollReveal";
import exteriorImg from "@/assets/exterior.png";
import interiorImg from "@/assets/interior.png";
import baristaImg from "@/assets/barista.png";
import tostadaGratinadaImg from "@/assets/tostada-gratinada.png";
import tostadasPicadilloImg from "@/assets/tostadas-picadillo.png";
import tartaChocolateImg from "@/assets/tarta-chocolate.png";
import chocolateCalienteImg from "@/assets/chocolate-caliente.png";
import hijasIgnacioImg from "@/assets/hijas-ignacio.png";
import foto1Img from "@/assets/1.jpg";
import foto2Img from "@/assets/2.jpg";
import foto3Img from "@/assets/3.jpg";
import foto4Img from "@/assets/4.jpg";
import foto5Img from "@/assets/5.jpg";
import foto6Img from "@/assets/6.jpg";
import foto7Img from "@/assets/7.jpg";
import foto8Img from "@/assets/8.jpg";
import foto9Img from "@/assets/9.jpg";

const images = [
  { src: hijasIgnacioImg, alt: "Las hijas de Ignacio, al frente de la cafetería" },
  { src: tostadaGratinadaImg, alt: "Tostada gratinada con café con leche" },
  { src: tostadasPicadilloImg, alt: "Tostadas de picadillo con zumo de naranja" },
  { src: foto1Img, alt: "Especialidad de la casa" },
  { src: foto2Img, alt: "Desayuno tradicional" },
  { src: foto3Img, alt: "Tostas gourmet" },
  { src: foto4Img, alt: "Café especial" },
  { src: foto5Img, alt: "Postre casero" },
  { src: foto6Img, alt: "Ambiente acogedor" },
  { src: foto7Img, alt: "Detalle del menú" },
  { src: foto8Img, alt: "Producto fresco" },
  { src: foto9Img, alt: "Momento especial" },
  { src: interiorImg, alt: "Salón del café con fotos y ambiente familiar" },
  { src: tartaChocolateImg, alt: "Tarta de chocolate casera con nata" },
  { src: chocolateCalienteImg, alt: "Chocolate caliente con nata montada" },
  { src: exteriorImg, alt: "Fachada de Café Casa Ignacio en Martos" },
];

const Galeria = () => {
  const ref = useScrollReveal();

  return (
    <section id="galeria" className="section-padding bg-cafe-cream" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-14 fade-up">
          <span className="text-cafe-olive text-sm font-semibold uppercase tracking-widest mb-3 block">
            Nuestro rincón
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Galería
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`fade-up fade-up-delay-${(i % 4) + 1} img-zoom rounded-xl overflow-hidden shadow-sm ${
                i === 0 ? "row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover ${i === 0 ? "h-full" : "h-48 sm:h-56"}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeria;
