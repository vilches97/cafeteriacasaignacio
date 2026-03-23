import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Send } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/contexts/LanguageContext";

interface Review {
  name: string;
  textKey: string;
  stars: number;
}

const reviews: Review[] = [
  {
    name: "María L.",
    textKey: "review.maria.text",
    stars: 5,
  },
  {
    name: "Antonio R.",
    textKey: "review.antonio.text",
    stars: 5,
  },
  {
    name: "Carmen P.",
    textKey: "review.carmen.text",
    stars: 5,
  },
];

const Opiniones = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal();
  const [form, setForm] = useState({ nombre: "", opinion: "", stars: 5 });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="opiniones" className="section-padding bg-cafe-cream" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-14 fade-up">
          <span className="text-cafe-olive text-sm font-semibold uppercase tracking-widest mb-3 block">
            {t('reviews.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {t('reviews.subtitle')}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" /> {t('reviews.rating')}
            </span>
            <span>{t('reviews.reviews_count')}</span>
            <span>{t('reviews.number_one')}</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`fade-up fade-up-delay-${i + 1} bg-background rounded-2xl p-6 sm:p-8 shadow-sm border border-border/50`}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed mb-5 text-sm">"{t(r.textKey)}"</p>
              <p className="font-semibold text-primary text-sm">{r.name}</p>
            </div>
          ))}
        </div>

        {/* Review Form */}
        <div className="mt-16 fade-up">
          <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              {t('reviews.leave_review')}
            </h3>
            <p className="text-muted-foreground mb-8 text-center">
              {t('reviews.leave_review_subtitle')}
            </p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">{t('reviews.your_name')}</label>
                <input
                  type="text"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cafe-olive/30 focus:border-cafe-olive transition-all text-sm"
                  placeholder={t('reviews.your_name_placeholder')}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Tu opinión</label>
                <textarea
                  value={form.opinion}
                  onChange={(e) => setForm({ ...form, opinion: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cafe-olive/30 focus:border-cafe-olive transition-all text-sm resize-none"
                  placeholder="Cuéntanos tu experiencia..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Valoración</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setForm({ ...form, stars: star })}
                      className={`p-2 rounded-lg transition-all ${
                        form.stars >= star
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                      }`}
                    >
                      <Star className="w-5 h-5" fill={form.stars >= star ? "currentColor" : "none"} />
                    </button>
                  ))}
                </div>
              </div>
              
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  if (form.nombre && form.opinion) {
                    setSubmitted(true);
                    setForm({ nombre: "", opinion: "", stars: 5 });
                    setTimeout(() => setSubmitted(false), 4000);
                  }
                }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity active:scale-[0.97] text-sm"
              >
                <Send className="w-4 h-4" />
                {t('reviews.send_review')}
              </button>
              
              {submitted && (
                <p className="text-cafe-olive font-medium text-sm mt-3 text-center">
                  {t('reviews.thanks')}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opiniones;
