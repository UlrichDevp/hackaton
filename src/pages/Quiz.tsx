import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WelcomeScreen } from "@/components/game/WelcomeScreen";
import { GameScreen } from "@/components/game/GameScreen";
import { Navbar } from "@/components/layout/Navbar";
const Index = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStart = () => {
    setGameStarted(true);
  };

  const handleRestart = () => {
    setGameStarted(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
    <main className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {!gameStarted ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <WelcomeScreen onStart={handleStart} />
          </motion.div>
        ) : (
          <motion.div
            key="game"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <GameScreen onRestart={handleRestart} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
    </div>
  );
};

export default Index;
