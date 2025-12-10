import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
  score: number;
}

export const ProgressBar = ({ current, total, score }: ProgressBarProps) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground font-medium">
          Question {current + 1} / {total}
        </span>
        <motion.span
          key={score}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          className="font-bold text-primary"
        >
          Score : {score} pts
        </motion.span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full gradient-hero rounded-full"
        />
      </div>
    </div>
  );
};
