import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Shield, UserX, AlertTriangle } from 'lucide-react';
import { GuideSection as GuideSectionType, Language } from '@/data/guideContent';
import StepCard from './StepCard';

interface GuideSectionProps {
  section: GuideSectionType;
  language: Language;
  checkedItems: Set<string>;
  onToggleItem: (id: string) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  UserX,
  AlertTriangle,
};

const GuideSection = ({ section, language, checkedItems, onToggleItem }: GuideSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const Icon = iconMap[section.icon] || Shield;

  // Calculate overall progress
  const allChecklistItems = section.steps.flatMap(step => step.checklist || []);
  const completedCount = allChecklistItems.filter(item => checkedItems.has(item.id)).length;
  const totalCount = allChecklistItems.length;
  const progressPercent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  const getBgColor = () => {
    switch (section.icon) {
      case 'Shield':
        return 'from-primary/20 to-primary/5';
      case 'UserX':
        return 'from-accent/20 to-accent/5';
      case 'AlertTriangle':
        return 'from-warning/20 to-warning/5';
      default:
        return 'from-primary/20 to-primary/5';
    }
  };

  const getIconColor = () => {
    switch (section.icon) {
      case 'Shield':
        return 'text-primary bg-primary/20';
      case 'UserX':
        return 'text-accent bg-accent/20';
      case 'AlertTriangle':
        return 'text-warning bg-warning/20';
      default:
        return 'text-primary bg-primary/20';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-2xl overflow-hidden shadow-card"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full p-6 text-left transition-all bg-gradient-to-br ${getBgColor()}`}
      >
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-xl shrink-0 ${getIconColor()}`}>
            <Icon className="w-6 h-6" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold text-foreground mb-2">
              {section.title[language]}
            </h2>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {section.introduction[language]}
            </p>
            
            {totalCount > 0 && (
              <div className="flex items-center gap-3 mt-4">
                <div className="h-2 flex-1 bg-background/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-success rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </div>
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                  {Math.round(progressPercent)}%
                </span>
              </div>
            )}
          </div>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 mt-1"
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-2 space-y-4">
              {section.steps.map((step, index) => (
                <StepCard
                  key={step.id}
                  step={step}
                  stepNumber={index + 1}
                  language={language}
                  checkedItems={checkedItems}
                  onToggleItem={onToggleItem}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GuideSection;
