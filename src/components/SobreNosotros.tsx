import { useScrollReveal } from "@/hooks/useScrollReveal";
import interiorImg from "@/assets/interior.png";
import { useTranslation } from "@/contexts/LanguageContext";

const SobreNosotros = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  return (
    <section id="nosotros" className="section-padding bg-cafe-cream" ref={ref}>
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text first on desktop */}
          <div className="fade-up order-2 md:order-1">
            <span className="text-cafe-olive text-sm font-semibold uppercase tracking-widest mb-3 block">
              {t('sobrenosotros.title')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary leading-tight mb-6">
              {t('sobrenosotros.subtitle')}
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              {t('sobrenosotros.description1')}
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              {t('sobrenosotros.description2')}
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              {t('sobrenosotros.description3')}
            </p>
            <blockquote className="border-l-4 border-cafe-olive pl-5 py-2">
              <p className="font-heading italic text-primary text-lg">
                {t('sobrenosotros.quote2')}
              </p>
            </blockquote>
          </div>

          {/* Image */}
          <div className="fade-up fade-up-delay-1 order-1 md:order-2 img-zoom rounded-2xl overflow-hidden shadow-xl">
            <img
              src={interiorImg}
              alt="Interior acogedor de Café Casa Ignacio"
              className="w-full h-80 sm:h-96 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
