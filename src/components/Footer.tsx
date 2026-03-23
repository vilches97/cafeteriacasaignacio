import { useTranslation } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="container-narrow">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <h4 className="font-heading text-lg font-bold mb-3">Casa Ignacio</h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
            {t('footer.about')}
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold mb-3">Horario</h4>
            <p className="text-primary-foreground/70 text-sm">Lunes a Sábado: 7:00 – 13:00</p>
            <p className="text-primary-foreground/70 text-sm">Domingo: Cerrado</p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold mb-3">Contacto</h4>
            <p className="text-primary-foreground/70 text-sm">C/ Vicente Aleixandre, 12</p>
            <p className="text-primary-foreground/70 text-sm">23600 Martos, Jaén</p>
            <p className="text-primary-foreground/70 text-sm mt-1">Tel: 647 971 023</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15 pt-6 text-center">
          <p className="text-primary-foreground/50 text-xs">
            {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
