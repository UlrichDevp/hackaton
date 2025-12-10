import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui2/button";

interface FeedbackCardProps {
  isCorrect: boolean;
  explanation: string;
  onNext: () => void;
  isLastQuestion: boolean;
}

export const FeedbackCard = ({
  isCorrect,
  explanation,
  onNext,
  isLastQuestion,
}: FeedbackCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`rounded-2xl p-5 ${
        isCorrect ? "bg-success/10 border border-success/30" : "bg-destructive/10 border border-destructive/30"
      }`}
    >
      <div className="flex items-start gap-3 mb-4">
        {isCorrect ? (
          <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-6 h-6 text-success-foreground" />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-destructive flex items-center justify-center flex-shrink-0">
            <XCircle className="w-6 h-6 text-destructive-foreground" />
          </div>
        )}
        <div>
          <h3 className={`font-bold text-lg ${isCorrect ? "text-success" : "text-destructive"}`}>
            {isCorrect ? "Excellente réponse ! 🎉" : "Attention, piège ! ⚠️"}
          </h3>
          <p className="text-muted-foreground text-sm">
            {isCorrect ? "+1 point" : "+0 point"}
          </p>
        </div>
      </div>

      <div className="bg-card rounded-xl p-4 mb-4 flex items-start gap-3">
        <Lightbulb className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
        <p className="text-foreground text-sm leading-relaxed">{explanation}</p>
      </div>

      <Button
        onClick={onNext}
        className="w-full gradient-hero text-primary-foreground font-bold py-6 rounded-xl hover:opacity-90 transition-opacity"
      >
        {isLastQuestion ? "Voir mes résultats" : "Question suivante"}
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </motion.div>
  );
};
