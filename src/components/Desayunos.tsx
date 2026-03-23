import { useScrollReveal } from "@/hooks/useScrollReveal";
import tostadaImg from "@/assets/tostadas-clasicas.png";
import { useTranslation } from "@/contexts/LanguageContext";

const Desayunos = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  return (
    <section id="desayunos" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="fade-up img-zoom rounded-2xl overflow-hidden shadow-xl">
            <img
              src={tostadaImg}
              alt="Tostada con tomate y aceite de oliva"
              className="w-full h-80 sm:h-96 object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="fade-up fade-up-delay-1">
            <span className="text-cafe-olive text-sm font-semibold uppercase tracking-widest mb-3 block">
              {t('desayunos.title')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary leading-tight mb-6">
              {t('desayunos.subtitle')}
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              {t('desayunos.description1')}
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              {t('desayunos.description2')}
            </p>
            <blockquote className="border-l-4 border-cafe-olive pl-5 py-2">
              <p className="font-heading italic text-primary text-lg">
                {t('desayunos.quote1')}
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Desayunos;
