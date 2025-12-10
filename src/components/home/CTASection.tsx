import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Prête à commencer ?</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
           Soyez le gardien de votre monde numérique {" "} <br/>
            <span className="text-gradient">grâce à notre chatbot !</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Laissez notre chatbot vous guider dans l'évaluation
             de vos pratiques en ligne en quelques minutes. 
             C'est simple, rapide et entièrement confidentiel !
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/chat">
                Lancer la discussion
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
