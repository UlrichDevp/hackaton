import { motion } from "framer-motion";
import { Trophy, Star, Shield, RefreshCw, Share2, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui2/button";
import { securityTips } from "@/components/data/questions";

interface ResultScreenProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export const ResultScreen = ({ score, total, onRestart }: ResultScreenProps) => {
  const navigate = useNavigate();
  const percentage = Math.round((score / total) * 100);

  const getLevel = () => {
    if (percentage >= 90) return { label: "Experte", emoji: "🏆", tips: securityTips.excellent };
    if (percentage >= 70) return { label: "Vigilante", emoji: "🌟", tips: securityTips.good };
    if (percentage >= 50) return { label: "Apprentie", emoji: "💪", tips: securityTips.average };
    return { label: "Débutante", emoji: "📚", tips: securityTips.needsWork };
  };

  const level = getLevel();

  const getScoreColor = () => {
    if (percentage >= 70) return "text-success";
    if (percentage >= 50) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Score Card */}
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="bg-card rounded-3xl shadow-card p-8 text-center mb-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-hero shadow-glow mb-6"
          >
            <Trophy className="w-10 h-10 text-primary-foreground" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold text-foreground mb-2"
          >
            Quiz terminé !
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6"
          >
            <div className={`text-6xl font-extrabold ${getScoreColor()} mb-2`}>
              {score}/{total}
            </div>
            <p className="text-muted-foreground">
              {percentage}% de bonnes réponses
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10"
          >
            <span className="text-2xl">{level.emoji}</span>
            <span className="font-bold text-primary">Niveau : {level.label}</span>
          </motion.div>
        </motion.div>

        {/* Tips Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-card rounded-2xl shadow-soft p-6 mb-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-foreground">Conseils personnalisés</h3>
          </div>
          <ul className="space-y-3">
            {level.tips.map((tip, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-2"
              >
                <Star className="w-4 h-4 text-warning flex-shrink-0 mt-1" />
                <span className="text-sm text-muted-foreground">{tip}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="space-y-3"
        >
          <Button
            onClick={onRestart}
            className="w-full gradient-hero text-primary-foreground font-bold py-6 rounded-xl hover:opacity-90 transition-opacity"
          >
            <RefreshCw className="mr-2 w-5 h-5" />
            Recommencer le quiz
          </Button>

          <Button
            variant="outline"
            className="w-full font-bold py-6 rounded-xl border-2"
            onClick={() => navigate('/guide')}
          >
            <BookOpen className="mr-2 w-5 h-5" />
            Consulter le guide de sécurité
          </Button>

          <Button
            variant="ghost"
            className="w-full font-medium py-6 rounded-xl"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "CyberSafe Quiz",
                  text: `J'ai obtenu ${score}/${total} au quiz CyberSafe ! Et toi, sauras-tu reconnaître les arnaques ?`,
                });
              }
            }}
          >
            <Share2 className="mr-2 w-5 h-5" />
            Partager mon score
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};