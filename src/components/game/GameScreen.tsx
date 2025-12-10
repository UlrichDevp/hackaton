import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { questions } from "@/components/data/questions";
import { ScenarioCard } from "./ScenarioCard";
import { OptionButton } from "./OptionButton";
import { FeedbackCard } from "./FeedbackCard";
import { ProgressBar } from "./ProgressBar";
import { ResultScreen } from "./ResultScreen";

interface GameScreenProps {
  onRestart: () => void;
}

export const GameScreen = ({ onRestart }: GameScreenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleOptionClick = (index: number) => {
    if (hasAnswered) return;

    setSelectedOption(index);
    setHasAnswered(true);

    if (index === currentQuestion.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setShowResults(false);
    onRestart();
  };

  if (showResults) {
    return (
      <ResultScreen
        score={score}
        total={questions.length}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="min-h-screen px-4 py-6 max-w-lg mx-auto">
      <ProgressBar
        current={currentIndex}
        total={questions.length}
        score={score}
      />

      <div className="mt-6 space-y-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <ScenarioCard question={currentQuestion} />
          </motion.div>
        </AnimatePresence>

        <div className="space-y-3">
          <h3 className="font-bold text-foreground">
            Que feriez-vous ?
          </h3>
          {currentQuestion.options.map((option, index) => (
            <OptionButton
              key={index}
              option={option}
              index={index}
              selected={selectedOption}
              correct={currentQuestion.correct}
              hasAnswered={hasAnswered}
              onClick={() => handleOptionClick(index)}
            />
          ))}
        </div>

        <AnimatePresence>
          {hasAnswered && (
            <FeedbackCard
              isCorrect={selectedOption === currentQuestion.correct}
              explanation={currentQuestion.explanation}
              onNext={handleNext}
              isLastQuestion={isLastQuestion}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
