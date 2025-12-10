export interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
  category: string;
}

export const evaluationQuestions: Question[] = [
  {
    id: 1,
    question: "Comment gérez-vous vos mots de passe ?",
    category: "Mots de passe",
    options: [
      { text: "J'utilise le même mot de passe partout", score: 0 },
      { text: "J'ai quelques mots de passe différents", score: 1 },
      { text: "J'utilise des mots de passe différents et complexes", score: 2 },
      { text: "J'utilise un gestionnaire de mots de passe", score: 3 },
    ],
  },
  {
    id: 2,
    question: "Vérifiez-vous les paramètres de confidentialité de vos réseaux sociaux ?",
    category: "Confidentialité",
    options: [
      { text: "Je ne sais pas où les trouver", score: 0 },
      { text: "Je les ai vérifiés une fois à l'inscription", score: 1 },
      { text: "Je les vérifie de temps en temps", score: 2 },
      { text: "Je les vérifie régulièrement et les ajuste", score: 3 },
    ],
  },
  {
    id: 3,
    question: "Comment réagissez-vous face à un message suspect ou un lien inconnu ?",
    category: "Phishing",
    options: [
      { text: "Je clique souvent par curiosité", score: 0 },
      { text: "Je clique parfois si ça semble intéressant", score: 1 },
      { text: "J'hésite et je demande conseil", score: 2 },
      { text: "Je ne clique jamais et je vérifie la source", score: 3 },
    ],
  },
  {
    id: 4,
    question: "Partagez-vous des informations personnelles en ligne (adresse, numéro de téléphone, photos) ?",
    category: "Données personnelles",
    options: [
      { text: "Oui, souvent sans réfléchir", score: 0 },
      { text: "Parfois, si on me le demande", score: 1 },
      { text: "Rarement et avec prudence", score: 2 },
      { text: "Jamais sans vérifier qui demande et pourquoi", score: 3 },
    ],
  },
  {
    id: 5,
    question: "Utilisez-vous la vérification en deux étapes (2FA) ?",
    category: "Authentification",
    options: [
      { text: "Je ne sais pas ce que c'est", score: 0 },
      { text: "Je sais ce que c'est mais je ne l'utilise pas", score: 1 },
      { text: "Je l'utilise sur certains comptes importants", score: 2 },
      { text: "Je l'utilise sur tous mes comptes importants", score: 3 },
    ],
  },
  {
    id: 6,
    question: "Comment vous connectez-vous aux réseaux Wi-Fi publics ?",
    category: "Réseaux",
    options: [
      { text: "Je me connecte à tous les réseaux disponibles", score: 0 },
      { text: "Je me connecte aux réseaux gratuits sans vérifier", score: 1 },
      { text: "Je vérifie le nom du réseau avant de me connecter", score: 2 },
      { text: "J'utilise un VPN ou j'évite les Wi-Fi publics pour des opérations sensibles", score: 3 },
    ],
  },
  {
    id: 7,
    question: "Avez-vous déjà été victime de harcèlement ou d'intimidation en ligne ?",
    category: "Cyberharcèlement",
    options: [
      { text: "Oui, et je n'ai rien fait", score: 0 },
      { text: "Oui, et j'ai supprimé le contenu moi-même", score: 1 },
      { text: "Oui, et j'en ai parlé à quelqu'un", score: 2 },
      { text: "Non, ou j'ai signalé et bloqué immédiatement", score: 3 },
    ],
  },
  {
    id: 8,
    question: "Mettez-vous à jour vos applications et appareils ?",
    category: "Mises à jour",
    options: [
      { text: "Je ne fais jamais les mises à jour", score: 0 },
      { text: "Je les fais quand on me le rappelle plusieurs fois", score: 1 },
      { text: "Je les fais de temps en temps", score: 2 },
      { text: "Je les fais dès qu'elles sont disponibles", score: 3 },
    ],
  },
  {
    id: 9,
    question: "Sauvegardez-vous vos données importantes ?",
    category: "Sauvegarde",
    options: [
      { text: "Je ne fais jamais de sauvegarde", score: 0 },
      { text: "J'y pense parfois mais je ne le fais pas", score: 1 },
      { text: "Je sauvegarde occasionnellement", score: 2 },
      { text: "Je sauvegarde régulièrement sur plusieurs supports", score: 3 },
    ],
  },
  {
    id: 10,
    question: "Connaissez-vous vos droits numériques (protection des données, signalement) ?",
    category: "Droits numériques",
    options: [
      { text: "Je n'en ai jamais entendu parler", score: 0 },
      { text: "J'en ai vaguement entendu parler", score: 1 },
      { text: "Je connais quelques droits de base", score: 2 },
      { text: "Je connais mes droits et sais où les faire valoir", score: 3 },
    ],
  },
];

export function calculateResults(answers: number[]) {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const maxScore = evaluationQuestions.length * 3;
  const percentage = Math.round((totalScore / maxScore) * 100);

  let level: "débutant" | "intermédiaire" | "avancé";
  let message: string;
  let advice: string[];

  if (percentage < 40) {
    level = "débutant";
    message = "Vous êtes au début de votre parcours de sécurité numérique. Ne vous inquiétez pas, nous sommes là pour vous aider !";
    advice = [
      "Commencez par créer des mots de passe plus forts et différents pour chaque compte",
      "Apprenez à reconnaître les messages suspects et le phishing",
      "Vérifiez vos paramètres de confidentialité sur les réseaux sociaux",
      "Activez la vérification en deux étapes sur vos comptes importants",
    ];
  } else if (percentage < 70) {
    level = "intermédiaire";
    message = "Vous avez de bonnes bases ! Il reste quelques points à améliorer pour renforcer votre sécurité.";
    advice = [
      "Considérez l'utilisation d'un gestionnaire de mots de passe",
      "Faites les mises à jour de sécurité dès qu'elles sont disponibles",
      "Sauvegardez régulièrement vos données importantes",
      "Informez-vous sur vos droits numériques",
    ];
  } else {
    level = "avancé";
    message = "Excellent ! Vous avez de très bonnes pratiques de sécurité numérique. Continuez ainsi !";
    advice = [
      "Partagez vos connaissances avec votre entourage",
      "Restez informée des nouvelles menaces et bonnes pratiques",
      "Aidez d'autres femmes et filles à se protéger en ligne",
      "Suivez notre parcours avancé pour aller encore plus loin",
    ];
  }

  return { totalScore, maxScore, percentage, level, message, advice };
}
