import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { evaluationQuestions, calculateResults } from "@/components/data/evaluationQuestions";
import { ArrowLeft, ArrowRight, CheckCircle, RefreshCw, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Evaluation = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / evaluationQuestions.length) * 100;
  const question = evaluationQuestions[currentQuestion];

  const handleOptionSelect = (score: number) => {
    setSelectedOption(score);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      const newAnswers = [...answers, selectedOption];
      setAnswers(newAnswers);
      setSelectedOption(null);

      if (currentQuestion < evaluationQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1]);
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedOption(null);
    setShowResults(false);
  };

  const results = showResults ? calculateResults(answers) : null;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-hero">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {!showResults ? (
            <>
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    Question {currentQuestion + 1} sur {evaluationQuestions.length}
                  </span>
                  <span className="text-sm font-medium text-primary">
                    {question.category}
                  </span>
                </div>
                <Progress value={progress} variant="primary" className="h-3" />
              </div>

              <Card variant="glass" className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl leading-relaxed">
                    {question.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {question.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(option.score)}
                      className={cn(
                        "w-full p-4 rounded-xl text-left transition-smooth border-2",
                        selectedOption === option.score
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border bg-card hover:border-primary/50 hover:bg-muted/50"
                      )}
                    >
                      <span className="font-medium">{option.text}</span>
                    </button>
                  ))}
                </CardContent>
              </Card>

              <div className="flex justify-between mt-8">
                <Button
                  variant="ghost"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Précédent
                </Button>
                <Button
                  variant="hero"
                  onClick={handleNext}
                  disabled={selectedOption === null}
                >
                  {currentQuestion === evaluationQuestions.length - 1 ? "Voir les résultats" : "Suivant"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </>
          ) : (
            <div className="animate-fade-in">
              <Card variant="glass" className="text-center mb-8">
                <CardHeader>
                  <div className="mx-auto w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                    <CheckCircle className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-3xl">Vos Résultats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="text-6xl font-bold text-gradient mb-2">
                      {results?.percentage}%
                    </div>
                    <p className="text-muted-foreground">
                      Score : {results?.totalScore} / {results?.maxScore}
                    </p>
                  </div>

                  <div className={cn(
                    "inline-block px-6 py-2 rounded-full font-semibold",
                    results?.level === "débutant" && "bg-destructive/10 text-destructive",
                    results?.level === "intermédiaire" && "bg-primary/10 text-primary",
                    results?.level === "avancé" && "bg-secondary/10 text-secondary"
                  )}>
                    Niveau : {results?.level}
                  </div>

                  <p className="text-lg">{results?.message}</p>

                  <div className="text-left bg-muted/50 rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-4">Nos conseils pour vous :</h3>
                    <ul className="space-y-3">
                      {results?.advice.map((tip, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {index + 1}
                          </span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="ghost" onClick={handleRestart}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refaire l'évaluation
                </Button>
                <Button variant="hero" asChild>
                  <Link to="/parcours">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Continuer avec le parcours
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Evaluation;
