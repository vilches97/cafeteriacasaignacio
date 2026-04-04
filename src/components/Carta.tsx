import { Coffee, Phone } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

interface MenuItem {
  name: string;
  desc: string;
  allergens?: string[];
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
      { name: "menu.tomate", desc: "1.50€", allergens: ["1", "3"] },
      { name: "menu.picadillo", desc: "2.60€", allergens: ["1", "3", "7"] },
      { name: "menu.aceite_miel", desc: "2.20€", allergens: ["1", "3"] },
      { name: "menu.mantequilla_mermelada", desc: "2.20€", allergens: ["1", "3", "7"] },
      { name: "menu.pate", desc: "2.20€", allergens: ["1", "3", "7"] },
      { name: "menu.anchoa_tomate", desc: "3.00€", allergens: ["1", "3", "4"] },
      { name: "menu.tomate_bacalao", desc: "2.60€", allergens: ["1", "3", "4"] },
      { name: "menu.tomate_atun", desc: "2.60€", allergens: ["1", "3", "4"] },
      { name: "menu.queso_azul", desc: "2.40€", allergens: ["1", "3", "7"] },
      { name: "menu.queso_azul_jamon", desc: "2.90€", allergens: ["1", "3", "7"] },
      { name: "menu.sobrasada", desc: "2.20€", allergens: ["1", "3", "7"] },
      { name: "menu.filadelfia_salmon", desc: "3.30€", allergens: ["1", "3", "4", "7"] },
      { name: "menu.queso_azul_tomate", desc: "2.60€", allergens: ["1", "3", "7"] },
      { name: "menu.queso_azul_tomate_atun", desc: "2.90€", allergens: ["1", "3", "4", "7"] },
      { name: "menu.aguacate_tomate", desc: "2.30€", allergens: ["1", "3"] },
      { name: "menu.aguacate_salmon", desc: "3.50€", allergens: ["1", "3", "4"] },
      { name: "menu.mermelada_higo_queso", desc: "2.90€", allergens: ["1", "3", "7"] },
    ],
  },
  {
    icon: "🔥",
    titleKey: "menu.tostadas_gratinadas",
    items: [
      { name: "menu.jamon_york_queso_gratinado", desc: "3.00€", allergens: ["1", "3", "7"] },
      { name: "menu.atun_queso_gratinado", desc: "3.00€", allergens: ["1", "3", "4", "7"] },
      { name: "menu.anchoa_queso_gratinado", desc: "3.50€", allergens: ["1", "3", "4", "7"] },
      { name: "menu.jamon_serrano_queso_gratinado", desc: "3.00€", allergens: ["1", "3", "7"] },
      { name: "menu.queso_gratinado", desc: "3.00€", allergens: ["1", "3", "7"] },
      { name: "menu.sobrasada_queso_gratinado", desc: "3.00€", allergens: ["1", "3", "7"] },
      { name: "menu.especial_casa", desc: "3.00€", allergens: ["1", "3", "7"] },
      { name: "menu.3_quesos", desc: "3.20€", allergens: ["1", "3", "7"] },
      { name: "menu.gratinada_salmon", desc: "3.70€", allergens: ["1", "3", "4", "7"] },
    ],
  },
  {
    icon: "🥐",
    titleKey: "menu.croissant",
    items: [
      { name: "menu.croissant_solo", desc: "2.60€", allergens: ["1", "3"] },
      { name: "menu.croissant_mermelada_higo_queso", desc: "3.50€", allergens: ["1", "3", "7"] },
      { name: "menu.croissant_mantequilla", desc: "3.50€", allergens: ["1", "3", "7"] },
      { name: "menu.croissant_jamon_york_queso", desc: "3.50€", allergens: ["1", "3", "7"] },
      { name: "menu.croissant_mantequilla_mermelada", desc: "3.50€", allergens: ["1", "3", "7"] },
      { name: "menu.croissant_filadelfia_salmon", desc: "3.50€", allergens: ["1", "3", "4", "7"] },
      { name: "menu.croissant_pate_queso", desc: "3.50€", allergens: ["1", "3", "7"] },
    ],
  },
  {
    icon: "🧁",
    titleKey: "menu.dulces",
    items: [
      { name: "menu.magdalena", desc: "1.20€", allergens: ["1", "3", "7"] },
      { name: "menu.tortas", desc: "1.30€", allergens: ["1", "3", "7"] },
      { name: "menu.dulces_variados", desc: "2.00€", allergens: ["1", "3", "7"] },
    ],
  },
  {
    icon: "☕",
    titleKey: "menu.cafe_y_bebidas_calientes",
    items: [
      { name: "menu.cafe_solo_cortado", desc: "1.50€" },
      { name: "menu.carajillo", desc: "2.00€" },
      { name: "menu.vaso_leche", desc: "1.20€", allergens: ["7"] },
      { name: "menu.capuchino", desc: "2.50€", allergens: ["7"] },
      { name: "menu.te_matcha", desc: "2.80€" },
      { name: "menu.te_especial", desc: "1.80€" },
      { name: "menu.te_normal_infusiones", desc: "1.50€" },
      { name: "menu.colacao", desc: "1.80€", allergens: ["7"] },
    ],
  },
  {
    icon: "🥤",
    titleKey: "menu.bebidas_frias",
    items: [
      { name: "menu.refrescos", desc: "2.50€" },
      { name: "menu.zumos", desc: "2.50€" },
      { name: "menu.cerveza", desc: "2.60€", allergens: ["1"] },
      { name: "menu.botellin", desc: "1.90€", allergens: ["1"] },
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

  const getAllergenDisplay = (allergens?: string[]) => {
    if (!allergens || allergens.length === 0) return null;
    
    const allergenIcons: { [key: string]: string } = {
      '1': '🌾', // Cereales con gluten
      '2': '🦐', // Crustáceos
      '3': '🥚', // Huevos
      '4': '🐟', // Pescado
      '5': '🥜', // Cacahuetes
      '6': '🫘', // Soja
      '7': '🥛', // Leche
      '8': '🌰', // Frutos de cáscara
      '9': '🌿', // Apio
      '10': '🌾', // Mostaza
      '11': '🫘', // Sésamo
      '12': '⚠️', // Sulfitos
      '13': '🌿', // Altramuces
      '14': '🐚', // Moluscos
    };
    
    return (
      <div className="flex flex-wrap gap-1 mt-2">
        {allergens.map((code) => (
          <span
            key={code}
            className="inline-flex items-center justify-center w-7 h-7 bg-orange-100 text-orange-700 text-lg rounded-full border border-orange-200"
            title={t(`allergen.${code}`)}
          >
            {allergenIcons[code] || code}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="carta" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-14">
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
              className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-xl font-bold text-primary">{t(cat.titleKey)}</h3>
              </div>
              <ul className="space-y-4">
                {cat.items.map((item) => (
                  <li key={item.name} className="border-b border-border/30 pb-3 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <p className="font-semibold text-foreground">{t(item.name)}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    {getAllergenDisplay(item.allergens)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Allergen Legend */}
        <div className="mt-12 text-center">
          <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
            <h3 className="text-lg font-semibold text-primary mb-4">
              {t('allergen.title')}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t('allergen.legend')}
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((code) => {
                const allergenIcons: { [key: string]: string } = {
                  '1': '🌾', '2': '🦐', '3': '🥚', '4': '🐟', '5': '🥜', '6': '🫘', '7': '🥛',
                  '8': '🌰', '9': '🌿', '10': '🌾', '11': '🫘', '12': '⚠️', '13': '🌿', '14': '🐚'
                };
                return (
                  <div key={code} className="flex items-center gap-2 bg-white/50 px-3 py-2 rounded-lg border border-border/30">
                    <span className="text-lg">{allergenIcons[code.toString()]}</span>
                    <span className="text-muted-foreground text-xs">{t(`allergen.${code}`)}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Phone Order Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-8 border border-green-200/50 dark:border-green-800/30">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">
              {t('menu.call_title')}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              {t('menu.call_subtitle')}
            </p>
            <a
              href="tel:+34647971023"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all active:scale-[0.97] shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              {t('menu.call_button')}
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              {t('menu.call_phone')} 647 971 023
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carta;
