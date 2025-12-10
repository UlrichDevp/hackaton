import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Lock, Eye, MessageSquareWarning } from "lucide-react";

const stats = [
  {
    icon: AlertTriangle,
    value: "73%",
    label: "des femmes ont subi du harcèlement en ligne",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    icon: Lock,
    value: "58%",
    label: "n'utilisent pas de mots de passe forts",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Eye,
    value: "65%",
    label: "ne vérifient pas leurs paramètres de confidentialité",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: MessageSquareWarning,
    value: "82%",
    label: "ne signalent pas les incidents de cyberviolence",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

export function StatisticsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Pourquoi c'est <span className="text-gradient">important</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Les femmes et filles sont particulièrement vulnérables aux menaces
            numériques. Voici quelques statistiques qui montrent l'urgence d'agir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              variant="elevated"
              className="text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className={`w-16 h-16 rounded-2xl ${stat.bgColor} flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
