import React from "react";
import heroImg from "@/assets/hero-breakfast.jpg";
import { useTranslation } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Desayuno tradicional con tostadas y café"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-cafe-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-background/15 backdrop-blur-sm border border-background/20 rounded-full px-4 py-2 mb-8 fade-up visible">
          <span className="text-yellow-400 text-sm">⭐</span>
          <span className="text-background/90 text-sm font-medium">{t('hero.rating')}</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-background leading-[1.1] mb-6 fade-up visible" style={{ transitionDelay: '100ms' }}>
          {t('hero.title').split('<br />').map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index < t('hero.title').split('<br />').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>

        <p className="text-background/85 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed fade-up visible" style={{ transitionDelay: '200ms' }}>
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up visible" style={{ transitionDelay: '300ms' }}>
          <a
            href="#carta"
            className="inline-flex items-center justify-center px-8 py-4 bg-background text-primary font-semibold rounded-lg hover:bg-background/90 transition-colors duration-300 active:scale-[0.97]"
          >
            {t('hero.cta')}
          </a>
          <a
            href="https://maps.google.com/?q=Calle+Vicente+Aleixandre+12+Martos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-background/40 text-background font-semibold rounded-lg hover:bg-background/10 transition-colors duration-300 active:scale-[0.97]"
          >
            {t('hero.get_directions')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-background/40 flex justify-center pt-2">
          <div className="w-1 h-2 bg-background/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
