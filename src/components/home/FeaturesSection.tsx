import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, GraduationCap, Gamepad2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: ClipboardCheck,
    title: "Évaluation Personnalisée",
    description:
      "Répondez à notre questionnaire pour évaluer votre niveau de sécurité numérique et recevoir des conseils adaptés.",
    link: "/evaluation",
    buttonText: "Faire l'évaluation",
    color: "primary",
  },
  {
    icon: GraduationCap,
    title: "Parcours Pédagogique",
    description:
      "Suivez un parcours d'apprentissage adapté avec un langage simple et des exemples du contexte local.",
    link: "/parcours",
    buttonText: "Voir le parcours",
    color: "secondary",
  },
  {
    icon: Gamepad2,
    title: "Quiz Interactifs",
    description:
      "Testez vos connaissances de manière ludique avec nos quiz interactifs et gagnez des badges.",
    link: "/quiz",
    buttonText: "Jouer aux quiz",
    color: "accent",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Comment nous pouvons <span className="text-gradient">vous aider</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos outils conçus spécialement pour renforcer votre
            sécurité numérique de manière accessible et engageante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              variant="elevated"
              className="group"
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl bg-${feature.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                  <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{feature.description}</p>
                <Button variant="ghost" className="group/btn" asChild>
                  <Link to={feature.link}>
                    {feature.buttonText}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-smooth" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
