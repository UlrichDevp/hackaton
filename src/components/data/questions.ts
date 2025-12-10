export interface Question {
  id: number;
  type: "sms" | "whatsapp" | "facebook" | "email" | "link";
  sender?: string;
  message: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    type: "facebook",
    sender: "John M.",
    message:
      "Profil créé récemment • Pas d’amis en commun • 'Tu es très belle, j’aimerais être ton ami 😉'",
    options: [
      "Répondre gentiment",
      "Ignorer et bloquer",
      "Accepter la demande pour discuter",
    ],
    correct: 1,
    explanation:
      "Les faux comptes masculins ciblent souvent les femmes pour draguer, manipuler ou extorquer. Bloquez immédiatement.",
  },
  {
    id: 2,
    type: "whatsapp",
    sender: "Petit ami (nouveau)",
    message:
      "Envoie-moi une petite photo sexy, juste pour moi. Je ne montrerai à personne 😘",
    options: [
      "Envoyer pour lui faire confiance",
      "Refuser clairement et rappeler mes limites",
      "Demander une photo en échange",
    ],
    correct: 1,
    explanation:
      "Demander des nudes est un signe de manipulation. Ce contenu peut être utilisé pour du chantage plus tard.",
  },
  {
    id: 3,
    type: "facebook",
    sender: "Casting-mode.cm",
    message:
      "Vous êtes très jolie ! Nous recrutons des modèles. Envoyez des photos en lingerie pour participer.",
    options: [
      "Envoyer les photos pour tenter ma chance",
      "Vérifier la légitimité du casting",
      "Partager l’annonce à mes amies",
    ],
    correct: 1,
    explanation:
      "Les 'castings' demandant des photos intimes ciblent spécialement les jeunes filles. Ne jamais envoyer.",
  },
  {
    id: 4,
    type: "whatsapp",
    sender: "Numéro inconnu",
    message:
      "J’ai ta photo nue. Si tu ne payes pas 30 000 FCFA, j’envoie ça à tous tes contacts.",
    options: [
      "Payer pour éviter la honte",
      "Ne rien payer, bloquer et signaler",
      "Négocier le montant",
    ],
    correct: 1,
    explanation:
      "C’est de la sextorsion. Ne payez jamais, cela ne s’arrête pas. Bloquez, signalez et demandez de l’aide.",
  },
  {
    id: 5,
    type: "facebook",
    sender: "Aurelie N. (FAUX)",
    message: "Coucou, j’ai perdu mon compte. Accepte mon nouveau profil !",
    options: [
      "Accepter la nouvelle demande",
      "Vérifier via un appel vocal ou un message audio",
      "Partager la publication",
    ],
    correct: 1,
    explanation:
      "Les arnaqueurs créent de faux comptes de femmes pour piéger leurs contacts.",
  },
  {
    id: 6,
    type: "whatsapp",
    sender: "Groupe Classe L3",
    message:
      "Un membre : 'Les filles de la classe pensent trop, vous parlez trop hein 😂😂'",
    options: [
      "Répondre et se disputer",
      "Quitter le groupe et signaler l’admin",
      "Ignorer totalement",
    ],
    correct: 1,
    explanation:
      "Les remarques sexistes normalisent le harcèlement. Parlez à l’administrateur et signalez le comportement.",
  },
  {
    id: 7,
    type: "sms",
    sender: "Numéro inconnu",
    message:
      "Tu habites où exactement ? Je veux juste parler, promets que je ne fais rien.",
    options: [
      "Donner une localisation approximative",
      "Ne rien dire, c’est une tentative de stalking",
      "Répondre pour calmer la personne",
    ],
    correct: 1,
    explanation:
      "Ne jamais révéler son adresse à une personne inconnue. C’est un début de harcèlement.",
  },
  {
    id: 8,
    type: "facebook",
    sender: "Inconnu",
    message:
      "J’adore tes photos, tu es tellement sexy. Envoie-moi une photo spéciale 🥵",
    options: [
      "Supprimer et bloquer",
      "Répondre pour lui dire d’arrêter",
      "Regarder son profil",
    ],
    correct: 1,
    explanation:
      "Bloquer est la meilleure façon de limiter le harcèlement sexuel en ligne.",
  },
  {
    id: 9,
    type: "whatsapp",
    sender: "Petit ami",
    message: "Si tu m’aimais vraiment, tu m’enverrais la photo que je demande.",
    options: [
      "Envoyer pour ne pas le perdre",
      "Refuser et rappeler mes limites",
      "Faire semblant de coopérer",
    ],
    correct: 1,
    explanation:
      "C’est de la manipulation. Ne jamais céder à la pression émotionnelle pour envoyer des photos sensibles.",
  },
  {
    id: 10,
    type: "whatsapp",
    sender: "Ex",
    message: "Tu vas regretter de m’avoir quitté. Je sais comment te trouver.",
    options: [
      "Répondre pour calmer la situation",
      "Bloquer immédiatement et signaler",
      "Demander pardon",
    ],
    correct: 1,
    explanation:
      "C’est une menace. Ne jamais répondre. Signalez et demandez du soutien.",
  },
];


export const securityTips = {
  excellent: [
    "🌟 Bravo ! Vous êtes une vraie experte en cybersécurité !",
    "Continuez à partager vos connaissances avec vos proches.",
    "Restez vigilante : les arnaques évoluent constamment.",
  ],
  good: [
    "👏 Très bien ! Vous avez de bonnes bases en sécurité.",
    "Prenez toujours le temps de vérifier avant de cliquer.",
    "En cas de doute, demandez l'avis d'une personne de confiance.",
  ],
  average: [
    "💪 C'est un bon début ! Continuez à apprendre.",
    "Rappelez-vous : si c'est trop beau pour être vrai, c'est probablement faux.",
    "Ne cédez jamais à l'urgence créée par un message.",
  ],
  needsWork: [
    "📚 Il y a encore beaucoup à apprendre, mais c'est normal !",
    "Règle d'or : ne jamais cliquer sur un lien dans un message non sollicité.",
    "Parlez de cybersécurité avec vos amies pour apprendre ensemble.",
  ],
};
