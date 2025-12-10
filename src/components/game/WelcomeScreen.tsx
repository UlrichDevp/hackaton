import { motion } from "framer-motion";
import { Shield, Sparkles, ArrowRight, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui2/button";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-full gradient-hero shadow-glow mb-8"
        >
          <Shield className="w-12 h-12 text-primary" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-extrabold text-foreground mb-4"
        >
          CyberSafe
          <span className="text-primary"> Quiz</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-muted-foreground mb-8"
        >
          Apprenez à reconnaître les arnaques en ligne et protégez-vous des cybercriminels
          <Sparkles className="inline-block w-5 h-5 ml-2 text-warning" />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4 mb-8"
        >
          <div className="flex items-center gap-3 text-left bg-card rounded-xl p-4 shadow-soft">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-xl">📱</span>
            </div>
            <p className="text-sm text-foreground">
              <strong>10 scénarios réalistes</strong> : SMS, WhatsApp, emails, réseaux sociaux
            </p>
          </div>

          <div className="flex items-center gap-3 text-left bg-card rounded-xl p-4 shadow-soft">
            <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
              <span className="text-xl">🎯</span>
            </div>
            <p className="text-sm text-foreground">
              <strong>Explications détaillées</strong> pour comprendre chaque arnaque
            </p>
          </div>

          <div className="flex items-center gap-3 text-left bg-card rounded-xl p-4 shadow-soft">
            <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0">
              <span className="text-xl">💡</span>
            </div>
            <p className="text-sm text-foreground">
              <strong>Conseils personnalisés</strong> selon votre score
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
          className="space-y-3"
        >
          <Button
            size="lg"
            onClick={onStart}
            className="w-full gradient-hero text-primary-foreground font-bold text-lg px-8 py-6 rounded-xl shadow-glow hover:opacity-90 transition-opacity"
          >
            Commencer le quiz
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate('/guide')}
            className="w-full font-bold text-lg px-8 py-6 rounded-xl border-2"
          >
            <BookOpen className="mr-2 w-5 h-5" />
            Guide de sécurité
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};