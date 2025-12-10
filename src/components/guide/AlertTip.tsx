import { motion } from 'framer-motion';
import { Lightbulb, AlertTriangle } from 'lucide-react';
import { Language, translations } from '@/components/data/guideContent';

interface AlertTipProps {
  type: 'tip' | 'warning';
  message: string;
  language: Language;
}

const AlertTip = ({ type, message, language }: AlertTipProps) => {
  const isTip = type === 'tip';
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className={`flex items-start gap-3 p-4 rounded-lg border ${
        isTip
          ? 'bg-primary/10 border-primary/20'
          : 'bg-warning/10 border-warning/20'
      }`}
    >
      <div className={`p-2 rounded-full shrink-0 ${
        isTip ? 'bg-primary/20' : 'bg-warning/20'
      }`}>
        {isTip ? (
          <Lightbulb className="w-4 h-4 text-primary" />
        ) : (
          <AlertTriangle className="w-4 h-4 text-warning" />
        )}
      </div>
      <div>
        <p className={`text-sm font-semibold mb-1 ${
          isTip ? 'text-primary' : 'text-warning'
        }`}>
          {isTip ? translations.tip[language] : translations.warning[language]}
        </p>
        <p className="text-sm text-foreground/80">{message}</p>
      </div>
    </motion.div>
  );
};

export default AlertTip;
