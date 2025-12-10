import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Lock, Eye, Shield, MessageSquare, Smartphone, Wifi, 
  AlertTriangle, FileText, CheckCircle, ChevronRight, 
  BookOpen, Clock, Star
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Module {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  duration: string;
  difficulty: "facile" | "moyen" | "avancé";
  content: {
    introduction: string;
    points: string[];
    tips: string[];
    example?: string;
  };
}

const modules: Module[] = [
  {
    id: 1,
    title: "Créer des mots de passe solides",
    description: "Apprenez à créer et gérer des mots de passe que personne ne peut deviner.",
    icon: Lock,
    duration: "10 min",
    difficulty: "facile",
    content: {
      introduction: "Un mot de passe fort est votre première ligne de défense contre les pirates. C'est comme la clé de votre maison - plus elle est unique et complexe, plus votre maison est en sécurité.",
      points: [
        "Utilisez au moins 12 caractères",
        "Mélangez lettres majuscules, minuscules, chiffres et symboles",
        "N'utilisez jamais d'informations personnelles (date de naissance, nom...)",
        "Utilisez un mot de passe différent pour chaque compte",
      ],
      tips: [
        "Créez une phrase secrète : 'MonChien@Mange3Pommes!' est facile à retenir mais difficile à deviner",
        "Utilisez un gestionnaire de mots de passe gratuit comme Bitwarden",
        "Changez immédiatement un mot de passe si vous pensez qu'il a été compromis",
      ],
      example: "Au lieu de 'marie2000', utilisez 'J@ime-Lire-Le$-Livres#2024'",
    },
  },
  {
    id: 2,
    title: "Protéger sa vie privée sur les réseaux sociaux",
    description: "Contrôlez qui peut voir vos informations et photos sur Facebook, Instagram, etc.",
    icon: Eye,
    duration: "15 min",
    difficulty: "facile",
    content: {
      introduction: "Vos réseaux sociaux contiennent beaucoup d'informations sur vous. En ajustant quelques paramètres, vous pouvez décider qui voit quoi.",
      points: [
        "Vérifiez vos paramètres de confidentialité régulièrement",
        "Limitez qui peut voir vos publications (amis seulement)",
        "Désactivez la géolocalisation sur vos photos",
        "Réfléchissez avant de publier une photo ou information",
      ],
      tips: [
        "Faites le ménage dans votre liste d'amis - gardez uniquement les personnes que vous connaissez vraiment",
        "Désactivez les tags automatiques sur les photos",
        "Ne partagez jamais votre localisation en temps réel",
      ],
    },
  },
  {
    id: 3,
    title: "Reconnaître les arnaques en ligne (Phishing)",
    description: "Apprenez à identifier les faux messages qui veulent voler vos informations.",
    icon: AlertTriangle,
    duration: "12 min",
    difficulty: "moyen",
    content: {
      introduction: "Le phishing, c'est quand quelqu'un essaie de vous tromper pour obtenir vos informations personnelles, souvent par email ou message.",
      points: [
        "Méfiez-vous des messages urgents demandant vos informations",
        "Vérifiez l'adresse email de l'expéditeur",
        "Ne cliquez jamais sur des liens suspects",
        "Les banques ne demandent JAMAIS vos mots de passe par email",
      ],
      tips: [
        "En cas de doute, contactez directement l'entreprise par leur numéro officiel",
        "Regardez si le message contient des fautes d'orthographe",
        "Si une offre semble trop belle pour être vraie, c'est probablement une arnaque",
      ],
      example: "Un message disant 'Votre compte sera fermé dans 24h, cliquez ici' est presque toujours une arnaque.",
    },
  },
  {
    id: 4,
    title: "Sécuriser son téléphone",
    description: "Protégez votre smartphone et les informations qu'il contient.",
    icon: Smartphone,
    duration: "10 min",
    difficulty: "facile",
    content: {
      introduction: "Votre téléphone contient toute votre vie : photos, messages, contacts, comptes bancaires. Il est essentiel de le protéger.",
      points: [
        "Utilisez un code PIN ou mot de passe long (pas 1234 !)",
        "Activez le verrouillage automatique après 1 minute",
        "Faites les mises à jour dès qu'elles sont disponibles",
        "N'installez des applications que depuis les stores officiels",
      ],
      tips: [
        "Activez 'Localiser mon appareil' pour le retrouver en cas de perte",
        "Désactivez le Bluetooth quand vous ne l'utilisez pas",
        "Vérifiez les permissions des applications régulièrement",
      ],
    },
  },
  {
    id: 5,
    title: "Se protéger sur les Wi-Fi publics",
    description: "Utilisez Internet en sécurité dans les cafés, hôtels et lieux publics.",
    icon: Wifi,
    duration: "8 min",
    difficulty: "moyen",
    content: {
      introduction: "Les Wi-Fi publics sont pratiques mais peuvent être dangereux. Des personnes malveillantes peuvent intercepter vos données.",
      points: [
        "Évitez de vous connecter à votre banque sur un Wi-Fi public",
        "Vérifiez le nom exact du réseau avec le personnel",
        "Désactivez le Wi-Fi quand vous ne l'utilisez pas",
        "Préférez utiliser vos données mobiles pour les opérations sensibles",
      ],
      tips: [
        "Un VPN peut vous protéger sur les réseaux publics (il existe des options gratuites)",
        "Ne laissez pas votre téléphone se connecter automatiquement aux Wi-Fi ouverts",
        "Déconnectez-vous toujours de vos comptes après utilisation",
      ],
    },
  },
  {
    id: 6,
    title: "Faire face au cyberharcèlement",
    description: "Reconnaître, se protéger et agir contre le harcèlement en ligne.",
    icon: MessageSquare,
    duration: "15 min",
    difficulty: "moyen",
    content: {
      introduction: "Le cyberharcèlement est un problème sérieux qui touche particulièrement les femmes et les filles. Savoir comment réagir est essentiel.",
      points: [
        "Ne répondez pas aux messages harcelants",
        "Gardez des captures d'écran comme preuves",
        "Bloquez et signalez les harceleurs",
        "Parlez-en à quelqu'un de confiance",
      ],
      tips: [
        "Vous n'êtes JAMAIS responsable du comportement des harceleurs",
        "Le cyberharcèlement est puni par la loi",
        "Des associations peuvent vous aider gratuitement",
        "Désactivez les commentaires si nécessaire",
      ],
    },
  },
  {
    id: 7,
    title: "Protéger ses données personnelles",
    description: "Comprenez quelles informations ne jamais partager et comment protéger les autres.",
    icon: FileText,
    duration: "12 min",
    difficulty: "facile",
    content: {
      introduction: "Vos données personnelles ont de la valeur. Des entreprises et des pirates veulent les obtenir. Apprenez à les protéger.",
      points: [
        "Ne partagez jamais votre numéro de carte d'identité en ligne",
        "Votre numéro de téléphone ne doit pas être visible publiquement",
        "Réfléchissez avant de remplir un formulaire en ligne",
        "Vous avez le droit de demander la suppression de vos données",
      ],
      tips: [
        "Utilisez une adresse email secondaire pour les inscriptions",
        "Lisez (au moins rapidement) les politiques de confidentialité",
        "Supprimez les comptes que vous n'utilisez plus",
      ],
    },
  },
  {
    id: 8,
    title: "La vérification en deux étapes",
    description: "Ajoutez une couche de protection supplémentaire à vos comptes importants.",
    icon: Shield,
    duration: "10 min",
    difficulty: "moyen",
    content: {
      introduction: "La vérification en deux étapes (2FA) demande une deuxième preuve de votre identité, comme un code envoyé sur votre téléphone.",
      points: [
        "Activez la 2FA sur vos comptes les plus importants (email, banque, réseaux sociaux)",
        "Préférez une application d'authentification plutôt que les SMS",
        "Gardez des codes de récupération en lieu sûr",
        "Même si votre mot de passe est volé, personne ne peut accéder à votre compte",
      ],
      tips: [
        "Commencez par l'activer sur votre compte email principal",
        "Google Authenticator et Microsoft Authenticator sont gratuits",
        "Ne partagez JAMAIS les codes reçus avec quelqu'un",
      ],
    },
  },
];

const Parcours = () => {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [completedModules, setCompletedModules] = useState<number[]>([]);

  const overallProgress = (completedModules.length / modules.length) * 100;

  const handleCompleteModule = (moduleId: number) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
    }
    setSelectedModule(null);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "facile": return "bg-secondary/10 text-secondary";
      case "moyen": return "bg-primary/10 text-primary";
      case "avancé": return "bg-accent/10 text-accent";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-hero">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {!selectedModule ? (
            <>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm font-medium">OS2.1 - Parcours Pédagogique</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                  Votre parcours vers une{" "}
                  <span className="text-gradient">sécurité numérique</span> renforcée
                </h1>
                <p className="text-muted-foreground text-lg mb-8">
                  Un parcours adapté avec un langage simple et des exemples concrets
                  pour maîtriser les bases de la sécurité numérique.
                </p>

                <Card variant="glass" className="mb-8">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Votre progression</span>
                      <span className="text-sm text-muted-foreground">
                        {completedModules.length} / {modules.length} modules
                      </span>
                    </div>
                    <Progress value={overallProgress} variant="secondary" className="h-3" />
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {modules.map((module, index) => {
                  const isCompleted = completedModules.includes(module.id);
                  return (
                    <Card
                      key={module.id}
                      variant="elevated"
                      className={cn(
                        "cursor-pointer group",
                        isCompleted && "ring-2 ring-secondary"
                      )}
                      onClick={() => setSelectedModule(module)}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center",
                            isCompleted ? "bg-secondary/10" : "bg-primary/10"
                          )}>
                            {isCompleted ? (
                              <CheckCircle className="w-6 h-6 text-secondary" />
                            ) : (
                              <module.icon className="w-6 h-6 text-primary" />
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={cn("text-xs px-2 py-1 rounded-full", getDifficultyColor(module.difficulty))}>
                              {module.difficulty}
                            </span>
                          </div>
                        </div>
                        <CardTitle className="text-lg mt-4 group-hover:text-primary transition-smooth">
                          {index + 1}. {module.title}
                        </CardTitle>
                        <CardDescription>{module.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {module.duration}
                          </div>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-smooth" />
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="max-w-3xl mx-auto animate-fade-in">
              <Button
                variant="ghost"
                onClick={() => setSelectedModule(null)}
                className="mb-6"
              >
                ← Retour au parcours
              </Button>

              <Card variant="glass">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <selectedModule.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <span className={cn("text-xs px-2 py-1 rounded-full", getDifficultyColor(selectedModule.difficulty))}>
                        {selectedModule.difficulty}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <Clock className="w-4 h-4" />
                        {selectedModule.duration}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{selectedModule.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <p className="text-lg leading-relaxed">{selectedModule.content.introduction}</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-primary" />
                      Points clés à retenir
                    </h3>
                    <ul className="space-y-3">
                      {selectedModule.content.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-3 bg-muted/50 p-3 rounded-lg">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {index + 1}
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-secondary" />
                      Conseils pratiques
                    </h3>
                    <ul className="space-y-3">
                      {selectedModule.content.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedModule.content.example && (
                    <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                      <h4 className="font-bold text-accent mb-2">💡 Exemple concret</h4>
                      <p>{selectedModule.content.example}</p>
                    </div>
                  )}

                  <div className="flex justify-center pt-4">
                    <Button
                      variant="hero"
                      size="lg"
                      onClick={() => handleCompleteModule(selectedModule.id)}
                    >
                      <CheckCircle className="w-5 h-5 mr-2" />
                      J'ai compris, module terminé !
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Parcours;
