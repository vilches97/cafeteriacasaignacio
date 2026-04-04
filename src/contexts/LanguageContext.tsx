import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.inicio': { es: 'Inicio', en: 'Home' },
  'nav.desayunos': { es: 'Desayunos', en: 'Breakfast' },
  'nav.nosotros': { es: 'Nosotros', en: 'About' },
  'nav.carta': { es: 'Carta', en: 'Menu' },
  'nav.opiniones': { es: 'Opiniones', en: 'Reviews' },
  'nav.horario': { es: 'Horario', en: 'Hours' },
  'nav.contacto': { es: 'Contacto', en: 'Contact' },

  // Hero Section
  'hero.title': { 
    es: 'Nuestra especialidad,<br />los desayunos', 
    en: 'Our specialty,<br />breakfasts' 
  },
  'hero.subtitle': { 
    es: 'Disfruta del mejor café y tostadas en un ambiente familiar en Martos', 
    en: 'Enjoy the best coffee and toast in a family atmosphere in Martos' 
  },
  'hero.cta': { es: 'Ver carta', en: 'View menu' },
  'hero.get_directions': { es: 'Cómo llegar', en: 'Get directions' },
  'hero.rating': { es: '4,6/5 en Google · Más de 100 reseñas', en: '4,6/5 on Google · Over 100 reviews' },

  // Desayunos Section
  'desayunos.title': { es: 'Lo nuestro', en: 'Our specialty' },
  'desayunos.subtitle': { es: 'Desayunos de siempre', en: 'Traditional breakfasts' },
  'desayunos.description1': { 
    es: 'Tostadas crujientes con tomate rallado del bueno, aceite de oliva virgen extra de Jaén, pan recién hecho que cruje al morderlo. Un café que huele a mañana bien empezada.', 
    en: 'Crispy toast with good grated tomato, extra virgin olive oil from Jaén, freshly baked bread that crunches when you bite it. A coffee that smells like a well-started morning.' 
  },
  'desayunos.description2': { 
    es: 'Aquí no hay prisas ni inventos. Solo ingredientes de calidad, preparados como toda la vida, con el cariño de quien lleva décadas empezando el día contigo.', 
    en: 'There are no rushes or inventions here. Only quality ingredients, prepared as always, with the care of someone who has been starting your day for decades.' 
  },
  'desayunos.quote1': { 
    es: 'Desayunos sencillos, pero hechos como siempre: con cariño y buen producto', 
    en: 'Simple breakfasts, but made as always: with care and good product' 
  },

  // Sobre Nosotros Section
  'sobrenosotros.title': { es: 'Nuestra historia', en: 'Our story' },
  'sobrenosotros.subtitle': { es: 'Sobre nosotros', en: 'About us' },
  'sobrenosotros.description1': { 
    es: 'Café Casa Ignacio nació de la mano de Ignacio, un marteño de los de antes, que soñaba con tener un lugar donde la gente del barrio pudiera empezar bien el día. Con café caliente, una tostada en condiciones y una conversación tranquila.', 
    en: 'Café Casa Ignacio was born from the hand of Ignacio, a man from Martos from the old days, who dreamed of having a place where neighborhood people could start the day well. With hot coffee, a proper toast and a quiet conversation.' 
  },
  'sobrenosotros.description2': { 
    es: 'Hoy, sus hijas continúan esa tradición con el mismo cariño y la misma dedicación. Porque en Casa Ignacio cada cliente es familia, y cada mañana es una oportunidad de hacer las cosas bien.', 
    en: 'Today, his daughters continue that tradition with the same care and dedication. Because at Casa Ignacio every client is family, and every morning is an opportunity to do things right.' 
  },
  'sobrenosotros.description3': { 
    es: 'Llevamos décadas abriendo antes que nadie para que Martos desayune como se merece.', 
    en: 'We have been opening before anyone else for decades so that Martos can have breakfast as it deserves.' 
  },
  'sobrenosotros.quote2': { 
    es: 'Un lugar de toda la vida, donde cada desayuno sabe a casa', 
    en: 'A lifetime place, where every breakfast tastes like home' 
  },

  // Menu Section
  'menu.tostadas': { es: 'Tostadas', en: 'Toast' },
  'menu.tostadas_gratinadas': { es: 'Tostadas Gratinadas', en: 'Grilled Toast' },
  'menu.croissant': { es: 'Croissant', en: 'Croissant' },
  'menu.dulces': { es: 'Dulces', en: 'Sweets' },
  'menu.cafe_y_bebidas_calientes': { es: 'Café y Bebidas Calientes', en: 'Coffee & Hot Drinks' },
  'menu.bebidas_frias': { es: 'Bebidas Frías', en: 'Cold Drinks' },
  'menu.agua': { es: 'Agua', en: 'Water' },
  'menu.tomate': { es: '1/2 Tomate', en: '1/2 Tomato' },
  'menu.picadillo': { es: '1/2 Picadillo', en: '1/2 Minced Meat' },
  'menu.aceite_miel': { es: '1/2 Aceite y Miel', en: '1/2 Oil & Honey' },
  'menu.mantequilla_mermelada': { es: '1/2 Mantequilla y Mermelada', en: '1/2 Butter & Jam' },
  'menu.pate': { es: '1/2 Paté', en: '1/2 Pâté' },
  'menu.anchoa_tomate': { es: '1/2 Anchoa con Tomate', en: '1/2 Anchovy with Tomato' },
  'menu.tomate_bacalao': { es: '1/2 Tomate y Bacalao', en: '1/2 Tomato & Cod' },
  'menu.tomate_atun': { es: '1/2 Tomate y Atún', en: '1/2 Tomato & Tuna' },
  'menu.queso_azul': { es: '1/2 Queso Azul', en: '1/2 Blue Cheese' },
  'menu.queso_azul_jamon': { es: '1/2 Queso Azul y Jamón', en: '1/2 Blue Cheese & Ham' },
  'menu.sobrasada': { es: '1/2 Sobrasada', en: '1/2 Sobrasada' },
  'menu.filadelfia_salmon': { es: '1/2 Filadelfia con Salmón', en: '1/2 Cream Cheese & Salmon' },
  'menu.queso_azul_tomate': { es: '1/2 Queso Azul con Tomate', en: '1/2 Blue Cheese with Tomato' },
  'menu.queso_azul_tomate_atun': { es: '1/2 Queso Azul, Tomate y Atún', en: '1/2 Blue Cheese, Tomato & Tuna' },
  'menu.aguacate_tomate': { es: '1/2 Aguacate con Tomate', en: '1/2 Avocado with Tomato' },
  'menu.aguacate_salmon': { es: '1/2 Aguacate con Salmón', en: '1/2 Avocado with Salmon' },
  'menu.mermelada_higo_queso': { es: '1/2 Mermelada, Higo y Queso', en: '1/2 Jam, Fig & Cheese' },
  'menu.jamon_york_queso_gratinado': { es: '1/2 Jamón York y Queso Gratinado', en: '1/2 York Ham & Grilled Cheese' },
  'menu.atun_queso_gratinado': { es: '1/2 Atún y Queso Gratinado', en: '1/2 Tuna & Grilled Cheese' },
  'menu.anchoa_queso_gratinado': { es: '1/2 Anchoa y Queso Gratinado', en: '1/2 Anchovy & Grilled Cheese' },
  'menu.jamon_serrano_queso_gratinado': { es: '1/2 Jamón Serrano y Queso Gratinado', en: '1/2 Serrano Ham & Grilled Cheese' },
  'menu.queso_gratinado': { es: '1/2 Queso Gratinado', en: '1/2 Grilled Cheese' },
  'menu.sobrasada_queso_gratinado': { es: '1/2 Sobrasada con Queso Gratinado', en: '1/2 Sobrasada with Grilled Cheese' },
  'menu.especial_casa': { es: '1/2 Especial de la Casa (Queso Fundido y Mermelada)', en: '1/2 House Special (Melted Cheese & Jam)' },
  'menu.3_quesos': { es: '1/2 Gratinada con 3 Quesos', en: '1/2 3-Cheese Grilled' },
  'menu.gratinada_salmon': { es: '1/2 Gratinada de Salmón', en: '1/2 Grilled Salmon' },
  'menu.croissant_solo': { es: 'Croissant Solo', en: 'Plain Croissant' },
  'menu.croissant_mermelada_higo_queso': { es: 'Croissant Mermelada, Higo y Queso', en: 'Croissant with Jam, Fig & Cheese' },
  'menu.croissant_mantequilla': { es: 'Croissant con Mantequilla', en: 'Croissant with Butter' },
  'menu.croissant_jamon_york_queso': { es: 'Croissant Jamón York y Queso', en: 'Croissant with York Ham & Cheese' },
  'menu.croissant_mantequilla_mermelada': { es: 'Croissant Mantequilla y Mermelada', en: 'Croissant with Butter & Jam' },
  'menu.croissant_filadelfia_salmon': { es: 'Croissant Filadelfia con Mermelada', en: 'Croissant with Cream Cheese & Jam' },
  'menu.croissant_pate_queso': { es: 'Croissant de Paté y Queso', en: 'Croissant with Pâté & Cheese' },
  'menu.magdalena': { es: 'Magdalena', en: 'Muffin' },
  'menu.tortas': { es: 'Tortas', en: 'Cakes' },
  'menu.dulces_variados': { es: 'Dulces variados', en: 'Assorted sweets' },
  'menu.cafe_solo_cortado': { es: 'Café solo/con leche', en: 'Espresso/Coffee with milk' },
  'menu.carajillo': { es: 'Carajillo', en: 'Carajillo (Coffee with liquor)' },
  'menu.vaso_leche': { es: 'Vaso de leche', en: 'Glass of milk' },
  'menu.capuchino': { es: 'Capuchino', en: 'Cappuccino' },
  'menu.te_matcha': { es: 'Té matcha', en: 'Matcha tea' },
  'menu.te_especial': { es: 'Té especial', en: 'Special tea' },
  'menu.te_normal_infusiones': { es: 'Té normal/ infusiones', en: 'Regular tea/Herbal infusions' },
  'menu.colacao': { es: 'ColaCao', en: 'ColaCao' },
  'menu.refrescos': { es: 'Refrescos', en: 'Soft drinks' },
  'menu.zumos': { es: 'Zumos', en: 'Juices' },
  'menu.cerveza': { es: 'Cerveza', en: 'Beer' },
  'menu.botellin': { es: 'Botellín', en: 'Small bottle' },
  'menu.copas': { es: 'Copas', en: 'Spirits/Glasses' },
  'menu.botella_agua_pequena': { es: 'Botella de agua pequeña', en: 'Small water bottle' },
  'menu.botella_agua_grande': { es: 'Botella de agua grande', en: 'Large water bottle' },
  'menu.carta_title': { es: 'Carta de desayunos', en: 'Breakfast Menu' },
  'menu.carta_subtitle': { es: 'Todo lo que necesitas para empezar el día con energía', en: 'Everything you need to start the day with energy' },
  'menu.call_title': { es: '¿Quieres hacer tu pedido?', en: 'Do you want to place your order?' },
  'menu.call_subtitle': { es: 'Llámanos y recoge tu desayuno cuando quieras.', en: 'Call us and pick up your breakfast anytime.' },
  'menu.call_button': { es: 'Llamar por teléfono', en: 'Call by phone' },
  'menu.call_phone': { es: 'Teléfono:', en: 'Phone:' },

  // Reviews Section
  'reviews.title': { es: 'Lo que dicen de nosotros', en: 'What they say about us' },
  'reviews.subtitle': { es: 'Opiniones de nuestros clientes', en: 'Customer Reviews' },
  'reviews.rating': { es: '4,6/5 valoración media', en: '4,6/5 average rating' },
  'reviews.reviews_count': { es: 'Más de 100 reseñas en Google', en: 'Over 100 reviews on Google' },
  'reviews.number_one': { es: 'Nº1 en cafeterías en Martos', en: '#1 Cafeteria in Martos' },
  'reviews.leave_review': { es: '¿Quieres dejar tu opinión?', en: 'Want to leave a review?' },
  'reviews.leave_review_subtitle': { es: 'Nos encanta saber lo que piensas. Tu opinión nos ayuda a mejorar.', en: 'We love to know what you think. Your opinion helps us improve.' },
  'reviews.your_name': { es: 'Tu nombre', en: 'Your name' },
  'reviews.your_name_placeholder': { es: 'Tu nombre', en: 'Your name' },
  'reviews.your_opinion': { es: 'Tu opinión', en: 'Your opinion' },
  'reviews.rating_label': { es: 'Valoración', en: 'Rating' },
  'reviews.send_review': { es: 'Enviar opinión', en: 'Send review' },
  'reviews.thanks': { es: '¡Gracias por tu opinión! La valoramos mucho.', en: 'Thank you for your review! We really appreciate it.' },

  // Customer Reviews Content
  'review.maria.text': { 
    es: 'Las mejores tostadas de Martos, sin ninguna duda. El picadillo está riquísimo y el café siempre en su punto. Venimos todos los sábados.', 
    en: 'The best toast in Martos, without a doubt. The picadillo is delicious and the coffee is always perfect. We come every Saturday.' 
  },
  'review.antonio.text': { 
    es: 'El trato es increíble, te sientes como en casa. Las chicas son encantadoras y siempre te reciben con una sonrisa. Sitio de toda la vida.', 
    en: 'The treatment is incredible, you feel like at home. The girls are charming and always greet you with a smile. A lifetime place.' 
  },
  'review.carmen.text': { 
    es: 'El ambiente es muy acogedor, con las fotos antiguas en las paredes. Un café con mucha personalidad. Las tostadas gratinadas son una maravilla.', 
    en: 'The atmosphere is very cozy, with old photos on the walls. A coffee with a lot of personality. The grilled toast is wonderful.' 
  },

  // Contact Section
  'contact.title': { es: 'Escríbenos', en: 'Write to us' },
  'contact.subtitle': { es: 'Contacto', en: 'Contact' },
  'contact.phone': { es: 'Teléfono', en: 'Phone' },
  'contact.address': { es: 'Dirección', en: 'Address' },
  'contact.follow_us': { es: 'Síguenos', en: 'Follow us' },
  'contact.name': { es: 'Nombre', en: 'Name' },
  'contact.phone_email': { es: 'Teléfono o email', en: 'Phone or email' },
  'contact.message': { es: 'Mensaje', en: 'Message' },
  'contact.send_message': { es: 'Enviar mensaje', en: 'Send message' },
  'contact.message_sent': { es: '¡Mensaje enviado! Te responderemos lo antes posible.', en: 'Message sent! We\'ll reply as soon as possible.' },

  // Hours Section
  'hours.find_us': { es: 'Encuéntranos', en: 'Find us' },
  'hours.title': { es: 'Horario', en: 'Hours' },
  'hours.subtitle': { es: 'Estamos aquí para ti', en: 'We\'re here for you' },
  'hours.schedule': { es: 'Horario', en: 'Schedule' },
  'hours.weekdays': { es: 'Lunes a Viernes', en: 'Monday to Friday' },
  'hours.saturday': { es: 'Sábado', en: 'Saturday' },
  'hours.sunday': { es: 'Domingo', en: 'Sunday' },
  'hours.closed': { es: 'Cerrado', en: 'Closed' },
  'hours.note': { es: 'El horario puede variar en festivos', en: 'Hours may vary on holidays' },
  'hours.address': { es: 'Dirección', en: 'Address' },
  'hours.street': { es: 'C/ Vicente Aleixandre, 12', en: 'C/ Vicente Aleixandre, 12' },
  'hours.city': { es: '23600 Martos, Jaén', en: '23600 Martos, Jaén' },
  'hours.view_on_google_maps': { es: 'Ver en Google Maps', en: 'View on Google Maps' },
  'hours.phone': { es: 'Teléfono', en: 'Phone' },
  'hours.call_us': { es: 'Llámanos para cualquier consulta', en: 'Call us for any questions' },

  // Footer
  'footer.about': { es: 'Cafetería de toda la vida en Martos. Desayunos tradicionales con el mejor producto y el mejor trato.', en: 'A lifetime cafeteria in Martos. Traditional breakfasts with the best product and treatment.' },
  'footer.contact_info': { es: 'Contacto', en: 'Contact' },
  'footer.hours_label': { es: 'Horario', en: 'Hours' },
  'footer.copyright': { es: '© {year} Café Casa Ignacio · Todos los derechos reservados', en: '© {year} Café Casa Ignacio · All rights reserved' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
