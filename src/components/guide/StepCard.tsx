import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { Step, Language, translations } from '@/components/data/guideContent';
import ChecklistItem from './ChecklistItem';
import AlertTip from './AlertTip';
import { Button } from '@/components/ui2/button';

interface StepCardProps {
  step: Step;
  stepNumber: number;
  language: Language;
  checkedItems: Set<string>;
  onToggleItem: (id: string) => void;
}

const StepCard = ({ step, stepNumber, language, checkedItems, onToggleItem }: StepCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const checklistItems = step.checklist || [];
  const completedCount = checklistItems.filter(item => checkedItems.has(item.id)).length;
  const totalCount = checklistItems.length;
  const progressPercent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-xl overflow-hidden shadow-soft"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-5 flex items-center gap-4 text-left hover:bg-muted/30 transition-colors"
      >
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
          <span className="text-primary font-bold">{stepNumber}</span>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">
            {step.title[language]}
          </h3>
          {totalCount > 0 && (
            <div className="flex items-center gap-2 mt-1">
              <div className="h-1.5 flex-1 bg-muted rounded-full overflow-hidden max-w-[120px]">
                <motion.div
                  className="h-full bg-success rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <span className="text-xs text-muted-foreground">
                {completedCount}/{totalCount}
              </span>
            </div>
          )}
        </div>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description[language]}
              </p>

              {step.action && step.link && (
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => window.open(step.link, '_blank')}
                >
                  <ExternalLink className="w-4 h-4" />
                  {step.action[language]}
                </Button>
              )}

              {step.tip && (
                <AlertTip
                  type="tip"
                  message={step.tip[language]}
                  language={language}
                />
              )}

              {step.warning && (
                <AlertTip
                  type="warning"
                  message={step.warning[language]}
                  language={language}
                />
              )}

              {checklistItems.length > 0 && (
                <div className="space-y-1 pt-2">
                  <p className="text-sm font-semibold text-foreground mb-2">
                    {translations.checklist[language]}
                  </p>
                  <div className="bg-muted/30 rounded-lg">
                    {checklistItems.map((item) => (
                      <ChecklistItem
                        key={item.id}
                        id={item.id}
                        text={item.text[language]}
                        checked={checkedItems.has(item.id)}
                        onToggle={onToggleItem}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default StepCard;
