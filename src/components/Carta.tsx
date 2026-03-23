import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Coffee, MessageCircle } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

interface MenuItem {
  name: string;
  desc: string;
}

interface MenuCategory {
  icon: string;
  titleKey: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    icon: "🍞",
    titleKey: "menu.tostadas",
    items: [
      { name: "menu.tomate", desc: "1.50€" },
      { name: "menu.picadillo", desc: "2.60€" },
      { name: "menu.aceite_miel", desc: "2.20€" },
      { name: "menu.mantequilla_mermelada", desc: "2.20€" },
      { name: "menu.pate", desc: "2.20€" },
      { name: "menu.anchoa_tomate", desc: "3.00€" },
      { name: "menu.tomate_bacalao", desc: "2.60€" },
      { name: "menu.tomate_atun", desc: "2.60€" },
      { name: "menu.queso_azul", desc: "2.40€" },
      { name: "menu.queso_azul_jamon", desc: "2.90€" },
      { name: "menu.sobrasada", desc: "2.20€" },
      { name: "menu.filadelfia_salmon", desc: "3.30€" },
      { name: "menu.queso_azul_tomate", desc: "2.60€" },
      { name: "menu.queso_azul_tomate_atun", desc: "2.90€" },
      { name: "menu.aguacate_tomate", desc: "2.30€" },
      { name: "menu.aguacate_salmon", desc: "3.50€" },
      { name: "menu.mermelada_higo_queso", desc: "2.90€" },
    ],
  },
  {
    icon: "🔥",
    titleKey: "menu.tostadas_gratinadas",
    items: [
      { name: "menu.jamon_york_queso_gratinado", desc: "3.00€" },
      { name: "menu.atun_queso_gratinado", desc: "3.00€" },
      { name: "menu.anchoa_queso_gratinado", desc: "3.50€" },
      { name: "menu.jamon_serrano_queso_gratinado", desc: "3.00€" },
      { name: "menu.queso_gratinado", desc: "3.00€" },
      { name: "menu.sobrasada_queso_gratinado", desc: "3.00€" },
      { name: "menu.especial_casa", desc: "3.00€" },
      { name: "menu.3_quesos", desc: "3.20€" },
      { name: "menu.gratinada_salmon", desc: "3.70€" },
    ],
  },
  {
    icon: "🥐",
    titleKey: "menu.croissant",
    items: [
      { name: "menu.croissant_solo", desc: "2.60€" },
      { name: "menu.croissant_mermelada_higo_queso", desc: "3.50€" },
      { name: "menu.croissant_mantequilla", desc: "3.50€" },
      { name: "menu.croissant_jamon_york_queso", desc: "3.50€" },
      { name: "menu.croissant_mantequilla_mermelada", desc: "3.50€" },
      { name: "menu.croissant_filadelfia_salmon", desc: "3.50€" },
      { name: "menu.croissant_pate_queso", desc: "3.50€" },
    ],
  },
  {
    icon: "🧁",
    titleKey: "menu.dulces",
    items: [
      { name: "menu.magdalena", desc: "1.20€" },
      { name: "menu.tortas", desc: "1.30€" },
      { name: "menu.dulces_variados", desc: "2.00€" },
    ],
  },
  {
    icon: "☕",
    titleKey: "menu.cafe_y_bebidas_calientes",
    items: [
      { name: "menu.cafe_solo_cortado", desc: "1.50€" },
      { name: "menu.carajillo", desc: "2.00€" },
      { name: "menu.vaso_leche", desc: "1.20€" },
      { name: "menu.capuchino", desc: "2.50€" },
      { name: "menu.te_matcha", desc: "2.80€" },
      { name: "menu.te_especial", desc: "1.80€" },
      { name: "menu.te_normal_infusiones", desc: "1.50€" },
      { name: "menu.colacao", desc: "1.80€" },
    ],
  },
  {
    icon: "🥤",
    titleKey: "menu.bebidas_frias",
    items: [
      { name: "menu.refrescos", desc: "2.50€" },
      { name: "menu.zumos", desc: "2.50€" },
      { name: "menu.cerveza", desc: "2.60€" },
      { name: "menu.botellin", desc: "1.90€" },
      { name: "menu.copas", desc: "2.40€" },
    ],
  },
  {
    icon: "💧",
    titleKey: "menu.agua",
    items: [
      { name: "menu.botella_agua_pequena", desc: "1.00€" },
      { name: "menu.botella_agua_grande", desc: "1.50€" },
    ],
  },
];

const Carta = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  return (
    <section id="carta" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-14 fade-up">
          <span className="text-cafe-olive text-sm font-semibold uppercase tracking-widest mb-3 block">
            Nuestra carta
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            {t('menu.carta_title')}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            {t('menu.carta_subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {menuData.map((cat, i) => (
            <div
              key={cat.titleKey}
              className={`fade-up fade-up-delay-${i + 1} bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-xl font-bold text-primary">{t(cat.titleKey)}</h3>
              </div>
              <ul className="space-y-4">
                {cat.items.map((item) => (
                  <li key={item.name} className="border-b border-border/30 pb-3 last:border-b-0 last:pb-0">
                    <p className="font-semibold text-foreground">{t(item.name)}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* WhatsApp Order Section */}
        <div className="mt-16 text-center fade-up">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-8 border border-green-200/50 dark:border-green-800/30">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">
              {t('menu.whatsapp_title')}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              {t('menu.whatsapp_subtitle')}
            </p>
            <a
              href="https://wa.me/34647971023?text=¡Hola!%20Quiero%20hacer%20un%20pedido%20para%20recoger"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all active:scale-[0.97] shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              {t('menu.whatsapp_button')}
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              {t('menu.whatsapp_phone')} 647 971 023
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carta;
