import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface OptionButtonProps {
  option: string;
  index: number;
  selected: number | null;
  correct: number;
  hasAnswered: boolean;
  onClick: () => void;
}

export const OptionButton = ({
  option,
  index,
  selected,
  correct,
  hasAnswered,
  onClick,
}: OptionButtonProps) => {
  const isSelected = selected === index;
  const isCorrect = index === correct;
  const showResult = hasAnswered;

  const getStateClasses = () => {
    if (!showResult) {
      return isSelected
        ? "border-primary bg-primary/5"
        : "border-border bg-card hover:border-primary/50 hover:bg-primary/5";
    }

    if (isCorrect) {
      return "border-success bg-success/10";
    }

    if (isSelected && !isCorrect) {
      return "border-destructive bg-destructive/10";
    }

    return "border-border bg-card opacity-50";
  };

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={!hasAnswered ? { scale: 1.02 } : {}}
      whileTap={!hasAnswered ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={hasAnswered}
      className={cn(
        "w-full p-4 rounded-xl border-2 text-left transition-all duration-200",
        "flex items-center gap-3",
        getStateClasses(),
        hasAnswered && isSelected && !isCorrect && "animate-shake"
      )}
    >
      <div
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm",
          !showResult && "bg-muted text-muted-foreground",
          showResult && isCorrect && "bg-success text-success-foreground",
          showResult && isSelected && !isCorrect && "bg-destructive text-destructive-foreground"
        )}
      >
        {showResult && isCorrect ? (
          <Check className="w-4 h-4" />
        ) : showResult && isSelected && !isCorrect ? (
          <X className="w-4 h-4" />
        ) : (
          String.fromCharCode(65 + index)
        )}
      </div>
      <span className="text-foreground font-medium">{option}</span>
    </motion.button>
  );
};
