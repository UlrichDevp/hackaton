import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[url('/woman.jpg')] bg-cover bg-center sm:bg-right md:bg-center lg:bg-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center pt-10 sm:pt-16 md:pt-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6 animate-slide-up text-white leading-tight">
            Protégez votre{" "}
            <span className="text-gradient">vie numérique</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto animate-slide-up text-white px-4" style={{ animationDelay: "0.1s" }}>
            Évaluez vos connaissances en sécurité numérique, découvrez des
            conseils personnalisés et renforcez vos compétences avec nos
            parcours adaptés aux femmes et filles.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up px-4" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
              <Link to="/evaluation">
                Commencer l'évaluation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild className="w-full sm:w-auto">
              <Link to="/parcours">
                Découvrir le parcours
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12 md:mt-16 animate-fade-in px-4" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col items-center gap-2 p-3 sm:p-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-primary transition-all hover:scale-110" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white">100%</span>
              <span className="text-xs sm:text-sm text-muted-foreground text-white">Gratuit</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 sm:p-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-2">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-secondary transition-all hover:scale-110" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white">500+</span>
              <span className="text-xs sm:text-sm text-muted-foreground text-white">Participantes</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 col-span-2 md:col-span-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-2">
                <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-accent transition-all hover:scale-110" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white">15+</span>
              <span className="text-xs sm:text-sm text-muted-foreground text-white">Modules</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}