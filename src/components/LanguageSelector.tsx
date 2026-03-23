import { useTranslation } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage, t } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-background transition-all text-sm font-medium"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4" />
      <span>{language === 'es' ? 'EN' : 'ES'}</span>
    </button>
  );
};

export default LanguageSelector;
