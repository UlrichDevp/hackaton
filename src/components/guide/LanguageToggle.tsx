import { motion } from 'framer-motion';
import { Language } from '@/data/guideContent';

interface LanguageToggleProps {
  language: Language;
  onToggle: (lang: Language) => void;
}

const LanguageToggle = ({ language, onToggle }: LanguageToggleProps) => {
  return (
    <div className="flex items-center gap-2 bg-gray-600 rounded-full p-1">
      <motion.button
        onClick={() => onToggle('fr')}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
          language === 'fr'
            ? 'bg-primary text-primary-foreground'
            : 'text-secondary-foreground hover:bg-muted'
        }`}
        whileTap={{ scale: 0.95 }}
      >
        FR
      </motion.button>
      <motion.button
        onClick={() => onToggle('en')}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
          language === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'text-secondary-foreground hover:bg-muted'
        }`}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
    </div>
  );
};

export default LanguageToggle;
