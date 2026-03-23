import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, MapPin, Facebook, Send } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

const Contacto = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal();
  const [form, setForm] = useState({ nombre: "", contacto: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ nombre: "", contacto: "", mensaje: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacto" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-14 fade-up">
          <span className="text-cafe-olive text-sm font-semibold uppercase tracking-widest mb-3 block">
            {t('contact.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            {t('contact.subtitle')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <div className="fade-up space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-cafe-olive/10 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-4 h-4 text-cafe-olive" />
              </div>
              <div>
                <p className="font-semibold text-primary mb-1">{t('contact.phone')}</p>
                <a href="tel:+34647971023" className="text-foreground/80 hover:text-cafe-olive transition-colors">
                  647 971 023
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-cafe-olive/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-cafe-olive" />
              </div>
              <div>
                <p className="font-semibold text-primary mb-1">{t('contact.address')}</p>
                <p className="text-foreground/80">C/ Vicente Aleixandre, 12<br />23600 Martos, Jaén</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-cafe-olive/10 flex items-center justify-center shrink-0 mt-0.5">
                <Facebook className="w-4 h-4 text-cafe-olive" />
              </div>
              <div>
                <p className="font-semibold text-primary mb-1">{t('contact.follow_us')}</p>
                <a
                  href="https://www.facebook.com/p/Cafeter%C3%ADa-Casa-Ignacio-100026539634436/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-cafe-olive transition-colors"
                >
                  Facebook · Café Casa Ignacio
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="fade-up fade-up-delay-1 space-y-5">
            <div>
              <label className="block text-sm font-medium text-primary mb-1.5">{t('contact.name')}</label>
              <input
                type="text"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cafe-olive/30 focus:border-cafe-olive transition-all text-sm"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-1.5">{t('contact.phone_email')}</label>
              <input
                type="text"
                value={form.contacto}
                onChange={(e) => setForm({ ...form, contacto: e.target.value })}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cafe-olive/30 focus:border-cafe-olive transition-all text-sm"
                placeholder="Tu teléfono o email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-1.5">{t('contact.message')}</label>
              <textarea
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cafe-olive/30 focus:border-cafe-olive transition-all text-sm resize-none"
                placeholder="Escríbenos lo que necesites"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity active:scale-[0.97] text-sm"
            >
              <Send className="w-4 h-4" />
              {t('contact.send_message')}
            </button>
            {sent && (
              <p className="text-cafe-olive font-medium text-sm mt-2">
                {t('contact.message_sent')}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
