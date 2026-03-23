import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Clock, MapPin, Phone } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

const Horario = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  return (
    <section id="horario" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-14 fade-up">
          <span className="text-cafe-olive text-sm font-semibold uppercase tracking-widest mb-3 block">
            Información de contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Horario, Ubicación y Contacto
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Horario */}
          <div className="fade-up bg-card rounded-2xl p-8 shadow-sm border border-border/50 text-center">
            <div className="w-12 h-12 rounded-full bg-cafe-olive/10 flex items-center justify-center mx-auto mb-5">
              <Clock className="w-5 h-5 text-cafe-olive" />
            </div>
            <h3 className="font-bold text-primary text-lg mb-4">{t('hours.schedule')}</h3>
            <div className="space-y-2 text-sm text-foreground/80">
              <div className="flex justify-between">
                <span>{t('hours.weekdays')} a {t('hours.saturday')}</span>
                <span className="font-semibold">7:00 – 13:00</span>
              </div>
              <div className="flex justify-between">
                <span>{t('hours.sunday')}</span>
                <span className="font-semibold text-destructive">{t('hours.closed')}</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4 italic">
              {t('hours.note')}
            </p>
          </div>

          {/* Dirección */}
          <div className="fade-up fade-up-delay-1 bg-card rounded-2xl p-8 shadow-sm border border-border/50 text-center">
            <div className="w-12 h-12 rounded-full bg-cafe-olive/10 flex items-center justify-center mx-auto mb-5">
              <MapPin className="w-5 h-5 text-cafe-olive" />
            </div>
            <h3 className="font-bold text-primary text-lg mb-4">{t('hours.address')}</h3>
            <p className="text-sm text-foreground/80 mb-5">
              {t('hours.street')}<br />
              {t('hours.city')}
            </p>
            <a
              href="https://maps.google.com/?q=Calle+Vicente+Aleixandre+12+Martos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              {t('hours.view_on_google_maps')}
            </a>
          </div>

          {/* Teléfono */}
          <div className="fade-up fade-up-delay-2 bg-card rounded-2xl p-8 shadow-sm border border-border/50 text-center sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-full bg-cafe-olive/10 flex items-center justify-center mx-auto mb-5">
              <Phone className="w-5 h-5 text-cafe-olive" />
            </div>
            <h3 className="font-bold text-primary text-lg mb-4">{t('hours.phone')}</h3>
            <a
              href="tel:+34647971023"
              className="text-lg font-semibold text-primary hover:text-cafe-olive transition-colors"
            >
              647 971 023
            </a>
            <p className="text-xs text-muted-foreground mt-3">
              {t('hours.call_us')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Horario;
