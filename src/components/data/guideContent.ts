export type Language = 'fr' | 'en';

export interface ChecklistItem {
  id: string;
  text: {
    fr: string;
    en: string;
  };
}

export interface Step {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  action?: {
    fr: string;
    en: string;
  };
  link?: string;
  checklist?: ChecklistItem[];
  tip?: {
    fr: string;
    en: string;
  };
  warning?: {
    fr: string;
    en: string;
  };
}

export interface GuideSection {
  id: string;
  icon: string;
  title: {
    fr: string;
    en: string;
  };
  introduction: {
    fr: string;
    en: string;
  };
  steps: Step[];
}

export const guideData: GuideSection[] = [
  {
    id: 'secure-facebook',
    icon: 'Shield',
    title: {
      fr: 'Sécuriser son compte Facebook',
      en: 'Secure Your Facebook Account'
    },
    introduction: {
      fr: 'Protégez votre compte Facebook en suivant ces étapes simples mais essentielles. Un compte bien sécurisé est votre première ligne de défense contre les pirates.',
      en: 'Protect your Facebook account by following these simple but essential steps. A well-secured account is your first line of defense against hackers.'
    },
    steps: [
      {
        id: 'password',
        title: {
          fr: 'Créer un mot de passe fort',
          en: 'Create a Strong Password'
        },
        description: {
          fr: 'Utilisez un mot de passe unique d\'au moins 12 caractères, combinant lettres majuscules, minuscules, chiffres et symboles. Ne réutilisez jamais le même mot de passe sur plusieurs sites.',
          en: 'Use a unique password of at least 12 characters, combining uppercase, lowercase letters, numbers, and symbols. Never reuse the same password across multiple sites.'
        },
        action: {
          fr: 'Changer mon mot de passe',
          en: 'Change my password'
        },
        link: 'https://www.facebook.com/settings?tab=security',
        checklist: [
          { id: 'pw1', text: { fr: 'Mon mot de passe a au moins 12 caractères', en: 'My password has at least 12 characters' } },
          { id: 'pw2', text: { fr: 'J\'utilise des majuscules et minuscules', en: 'I use uppercase and lowercase letters' } },
          { id: 'pw3', text: { fr: 'J\'ai ajouté des chiffres et symboles', en: 'I added numbers and symbols' } },
          { id: 'pw4', text: { fr: 'Ce mot de passe est unique à Facebook', en: 'This password is unique to Facebook' } }
        ],
        tip: {
          fr: 'Utilisez un gestionnaire de mots de passe comme Bitwarden (gratuit) pour créer et stocker des mots de passe sécurisés.',
          en: 'Use a password manager like Bitwarden (free) to create and store secure passwords.'
        }
      },
      {
        id: '2fa',
        title: {
          fr: 'Activer l\'authentification à deux facteurs (2FA)',
          en: 'Enable Two-Factor Authentication (2FA)'
        },
        description: {
          fr: 'L\'authentification à deux facteurs ajoute une couche de sécurité supplémentaire. Même si quelqu\'un obtient votre mot de passe, il ne pourra pas accéder à votre compte sans le code envoyé à votre téléphone.',
          en: 'Two-factor authentication adds an extra layer of security. Even if someone gets your password, they won\'t be able to access your account without the code sent to your phone.'
        },
        action: {
          fr: 'Activer la 2FA',
          en: 'Enable 2FA'
        },
        link: 'https://www.facebook.com/security/2fac/setup/intro',
        checklist: [
          { id: '2fa1', text: { fr: 'J\'ai activé l\'authentification à deux facteurs', en: 'I enabled two-factor authentication' } },
          { id: '2fa2', text: { fr: 'J\'ai enregistré mes codes de récupération', en: 'I saved my recovery codes' } }
        ],
        warning: {
          fr: 'Conservez vos codes de récupération dans un endroit sûr ! Sans eux, vous pourriez perdre l\'accès à votre compte.',
          en: 'Keep your recovery codes in a safe place! Without them, you could lose access to your account.'
        }
      },
      {
        id: 'privacy',
        title: {
          fr: 'Vérifier les paramètres de confidentialité',
          en: 'Check Privacy Settings'
        },
        description: {
          fr: 'Contrôlez qui peut voir vos publications, vous envoyer des demandes d\'amis et vous trouver. Limitez l\'accès à vos informations personnelles.',
          en: 'Control who can see your posts, send you friend requests, and find you. Limit access to your personal information.'
        },
        action: {
          fr: 'Ouvrir les paramètres de confidentialité',
          en: 'Open privacy settings'
        },
        link: 'https://www.facebook.com/settings?tab=privacy',
        checklist: [
          { id: 'priv1', text: { fr: 'Mes publications sont visibles par "Amis" uniquement', en: 'My posts are visible to "Friends" only' } },
          { id: 'priv2', text: { fr: 'Seuls mes amis peuvent m\'envoyer des messages', en: 'Only friends can send me messages' } },
          { id: 'priv3', text: { fr: 'Mon profil n\'apparaît pas dans les moteurs de recherche', en: 'My profile doesn\'t appear in search engines' } }
        ],
        tip: {
          fr: 'Faites régulièrement un "Privacy Checkup" proposé par Facebook pour réviser vos paramètres.',
          en: 'Regularly do a "Privacy Checkup" offered by Facebook to review your settings.'
        }
      },
      {
        id: 'sessions',
        title: {
          fr: 'Vérifier les connexions actives',
          en: 'Check Active Sessions'
        },
        description: {
          fr: 'Vérifiez quels appareils sont connectés à votre compte. Si vous voyez une connexion suspecte, déconnectez-la immédiatement.',
          en: 'Check which devices are connected to your account. If you see a suspicious connection, disconnect it immediately.'
        },
        action: {
          fr: 'Voir les connexions',
          en: 'View sessions'
        },
        link: 'https://www.facebook.com/settings?tab=security',
        checklist: [
          { id: 'sess1', text: { fr: 'J\'ai vérifié toutes les sessions actives', en: 'I checked all active sessions' } },
          { id: 'sess2', text: { fr: 'J\'ai déconnecté les appareils non reconnus', en: 'I disconnected unrecognized devices' } }
        ],
        warning: {
          fr: 'Si vous voyez des connexions depuis des lieux inconnus, changez immédiatement votre mot de passe !',
          en: 'If you see connections from unknown locations, change your password immediately!'
        }
      },
      {
        id: 'apps',
        title: {
          fr: 'Gérer les applications connectées',
          en: 'Manage Connected Apps'
        },
        description: {
          fr: 'Révoquez l\'accès aux applications que vous n\'utilisez plus ou qui semblent suspectes. Chaque application connectée peut accéder à certaines de vos données.',
          en: 'Revoke access to apps you no longer use or that seem suspicious. Each connected app can access some of your data.'
        },
        action: {
          fr: 'Gérer les applications',
          en: 'Manage apps'
        },
        link: 'https://www.facebook.com/settings?tab=applications',
        checklist: [
          { id: 'app1', text: { fr: 'J\'ai examiné toutes les applications connectées', en: 'I reviewed all connected apps' } },
          { id: 'app2', text: { fr: 'J\'ai supprimé les applications non utilisées', en: 'I removed unused apps' } }
        ]
      }
    ]
  },
  {
    id: 'detect-fake',
    icon: 'UserX',
    title: {
      fr: 'Détecter un faux compte',
      en: 'Detect a Fake Account'
    },
    introduction: {
      fr: 'Les faux comptes sont utilisés pour l\'arnaque, le harcèlement ou l\'usurpation d\'identité. Apprenez à les repérer avant qu\'il ne soit trop tard.',
      en: 'Fake accounts are used for scams, harassment, or identity theft. Learn to spot them before it\'s too late.'
    },
    steps: [
      {
        id: 'profile-check',
        title: {
          fr: 'Analyser la photo de profil',
          en: 'Analyze the Profile Picture'
        },
        description: {
          fr: 'Les faux comptes utilisent souvent des photos volées ou générées par IA. Faites une recherche d\'image inversée pour vérifier si la photo apparaît ailleurs sur Internet.',
          en: 'Fake accounts often use stolen or AI-generated photos. Do a reverse image search to check if the photo appears elsewhere on the Internet.'
        },
        action: {
          fr: 'Recherche d\'image Google',
          en: 'Google Image Search'
        },
        link: 'https://images.google.com/',
        checklist: [
          { id: 'prof1', text: { fr: 'J\'ai vérifié la photo avec une recherche inversée', en: 'I checked the photo with a reverse search' } },
          { id: 'prof2', text: { fr: 'La photo ne semble pas être une photo de stock', en: 'The photo doesn\'t seem to be a stock photo' } }
        ],
        tip: {
          fr: 'Utilisez TinEye ou Google Images pour rechercher une photo. Les photos de stock ou volées apparaîtront sur plusieurs sites.',
          en: 'Use TinEye or Google Images to search for a photo. Stock or stolen photos will appear on multiple sites.'
        }
      },
      {
        id: 'activity-check',
        title: {
          fr: 'Examiner l\'activité du compte',
          en: 'Examine Account Activity'
        },
        description: {
          fr: 'Un vrai compte a généralement une historique d\'activité : anciennes publications, commentaires, photos tagguées par des amis. Un faux compte aura peu ou pas d\'historique.',
          en: 'A real account usually has activity history: old posts, comments, photos tagged by friends. A fake account will have little or no history.'
        },
        checklist: [
          { id: 'act1', text: { fr: 'Le compte a des publications régulières sur plusieurs mois/années', en: 'The account has regular posts over several months/years' } },
          { id: 'act2', text: { fr: 'Il y a des interactions naturelles avec d\'autres personnes', en: 'There are natural interactions with other people' } },
          { id: 'act3', text: { fr: 'Les amis semblent être de vraies personnes', en: 'The friends seem to be real people' } }
        ],
        warning: {
          fr: 'Méfiez-vous des comptes créés récemment qui vous contactent avec des offres alléchantes ou des déclarations d\'amour soudaines.',
          en: 'Beware of recently created accounts that contact you with enticing offers or sudden declarations of love.'
        }
      },
      {
        id: 'friends-check',
        title: {
          fr: 'Vérifier la liste d\'amis',
          en: 'Check the Friends List'
        },
        description: {
          fr: 'Examinez les amis du compte suspect. Un faux compte aura souvent des amis aléatoires sans liens apparents, ou beaucoup de comptes eux-mêmes suspects.',
          en: 'Examine the friends of the suspicious account. A fake account will often have random friends with no apparent connections, or many accounts that are themselves suspicious.'
        },
        checklist: [
          { id: 'fr1', text: { fr: 'Les amis semblent avoir des liens logiques entre eux', en: 'Friends seem to have logical connections' } },
          { id: 'fr2', text: { fr: 'Il y a des amis en commun que je connais personnellement', en: 'There are mutual friends I know personally' } }
        ]
      },
      {
        id: 'info-check',
        title: {
          fr: 'Analyser les informations du profil',
          en: 'Analyze Profile Information'
        },
        description: {
          fr: 'Les faux comptes ont souvent des informations incohérentes : études dans une université qui n\'existe pas, travail vague, ou informations qui ne correspondent pas à ce que la personne prétend.',
          en: 'Fake accounts often have inconsistent information: studies at a non-existent university, vague work, or information that doesn\'t match what the person claims.'
        },
        checklist: [
          { id: 'info1', text: { fr: 'Les informations professionnelles sont vérifiables', en: 'Professional information is verifiable' } },
          { id: 'info2', text: { fr: 'L\'historique (études, travail) semble cohérent', en: 'History (education, work) seems consistent' } },
          { id: 'info3', text: { fr: 'La localisation correspond aux activités affichées', en: 'Location matches displayed activities' } }
        ],
        tip: {
          fr: 'Faites une recherche Google avec le nom de la personne pour voir si elle existe vraiment et si les informations correspondent.',
          en: 'Do a Google search with the person\'s name to see if they really exist and if the information matches.'
        }
      },
      {
        id: 'report',
        title: {
          fr: 'Signaler le faux compte',
          en: 'Report the Fake Account'
        },
        description: {
          fr: 'Si vous êtes sûr(e) qu\'il s\'agit d\'un faux compte, signalez-le à Facebook. Cela aide à protéger les autres utilisateurs.',
          en: 'If you\'re sure it\'s a fake account, report it to Facebook. This helps protect other users.'
        },
        action: {
          fr: 'Comment signaler',
          en: 'How to report'
        },
        link: 'https://www.facebook.com/help/306643639690823',
        checklist: [
          { id: 'rep1', text: { fr: 'J\'ai signalé le compte suspect à Facebook', en: 'I reported the suspicious account to Facebook' } },
          { id: 'rep2', text: { fr: 'J\'ai bloqué le compte pour ma sécurité', en: 'I blocked the account for my safety' } }
        ]
      }
    ]
  },
  {
    id: 'handle-blackmail',
    icon: 'AlertTriangle',
    title: {
      fr: 'Réagir au chantage en ligne',
      en: 'Respond to Online Blackmail'
    },
    introduction: {
      fr: 'Le chantage en ligne (sextorsion, revenge porn, intimidation) est un crime. Vous n\'êtes pas seul(e) et il existe des solutions. Voici comment réagir et vous protéger.',
      en: 'Online blackmail (sextortion, revenge porn, intimidation) is a crime. You are not alone and there are solutions. Here\'s how to respond and protect yourself.'
    },
    steps: [
      {
        id: 'dont-pay',
        title: {
          fr: 'Ne payez jamais !',
          en: 'Never Pay!'
        },
        description: {
          fr: 'Payer ne garantit pas que les menaces s\'arrêteront. Au contraire, cela encourage souvent le maître-chanteur à demander plus. Gardez votre calme et ne cédez pas à la panique.',
          en: 'Paying doesn\'t guarantee the threats will stop. On the contrary, it often encourages the blackmailer to ask for more. Stay calm and don\'t panic.'
        },
        warning: {
          fr: 'Les victimes qui paient sont souvent ciblées à nouveau. Le paiement n\'est JAMAIS une solution.',
          en: 'Victims who pay are often targeted again. Payment is NEVER a solution.'
        },
        checklist: [
          { id: 'pay1', text: { fr: 'Je comprends que payer n\'est pas une solution', en: 'I understand that paying is not a solution' } }
        ]
      },
      {
        id: 'evidence',
        title: {
          fr: 'Rassembler les preuves',
          en: 'Gather Evidence'
        },
        description: {
          fr: 'Faites des captures d\'écran de toutes les conversations, menaces, et profils impliqués. Ces preuves seront essentielles pour la police et les plateformes.',
          en: 'Take screenshots of all conversations, threats, and profiles involved. This evidence will be essential for police and platforms.'
        },
        checklist: [
          { id: 'ev1', text: { fr: 'J\'ai fait des captures d\'écran des menaces', en: 'I took screenshots of the threats' } },
          { id: 'ev2', text: { fr: 'J\'ai noté les pseudonymes et liens de profils', en: 'I noted usernames and profile links' } },
          { id: 'ev3', text: { fr: 'J\'ai sauvegardé les dates et heures des échanges', en: 'I saved dates and times of exchanges' } }
        ],
        tip: {
          fr: 'Utilisez l\'outil de capture d\'écran de votre téléphone ou ordinateur. Assurez-vous que les dates et heures sont visibles.',
          en: 'Use your phone or computer\'s screenshot tool. Make sure dates and times are visible.'
        }
      },
      {
        id: 'block-report',
        title: {
          fr: 'Bloquer et signaler',
          en: 'Block and Report'
        },
        description: {
          fr: 'Bloquez immédiatement la personne sur toutes les plateformes et signalez-la. Cela ne les arrêtera peut-être pas immédiatement, mais c\'est une étape importante.',
          en: 'Immediately block the person on all platforms and report them. This may not stop them immediately, but it\'s an important step.'
        },
        action: {
          fr: 'Signaler sur Facebook',
          en: 'Report on Facebook'
        },
        link: 'https://www.facebook.com/help/263149623790594',
        checklist: [
          { id: 'br1', text: { fr: 'J\'ai bloqué le maître-chanteur', en: 'I blocked the blackmailer' } },
          { id: 'br2', text: { fr: 'J\'ai signalé le compte à la plateforme', en: 'I reported the account to the platform' } },
          { id: 'br3', text: { fr: 'J\'ai sécurisé mes propres comptes', en: 'I secured my own accounts' } }
        ]
      },
      {
        id: 'police',
        title: {
          fr: 'Porter plainte',
          en: 'File a Police Report'
        },
        description: {
          fr: 'Le chantage et la sextorsion sont des délits punis par la loi. Déposez une plainte auprès de la police avec toutes vos preuves. C\'est votre droit.',
          en: 'Blackmail and sextortion are crimes punishable by law. File a complaint with the police with all your evidence. It\'s your right.'
        },
        action: {
          fr: 'Pré-plainte en ligne (France)',
          en: 'Online pre-complaint (France)'
        },
        link: 'https://www.pre-plainte-en-ligne.gouv.fr/',
        checklist: [
          { id: 'pol1', text: { fr: 'J\'ai rassemblé toutes mes preuves', en: 'I gathered all my evidence' } },
          { id: 'pol2', text: { fr: 'J\'ai déposé une plainte ou pré-plainte', en: 'I filed a complaint or pre-complaint' } }
        ],
        tip: {
          fr: 'En France, vous pouvez aussi contacter le 3018 (numéro contre le cyberharcèlement) pour obtenir de l\'aide.',
          en: 'In France, you can also contact 3018 (cyberbullying hotline) for help.'
        }
      },
      {
        id: 'support',
        title: {
          fr: 'Chercher du soutien',
          en: 'Seek Support'
        },
        description: {
          fr: 'Vous n\'avez pas à affronter cette situation seul(e). Parlez à une personne de confiance ou contactez une association spécialisée. Le soutien émotionnel est crucial.',
          en: 'You don\'t have to face this situation alone. Talk to someone you trust or contact a specialized organization. Emotional support is crucial.'
        },
        checklist: [
          { id: 'sup1', text: { fr: 'J\'ai parlé à une personne de confiance', en: 'I talked to someone I trust' } },
          { id: 'sup2', text: { fr: 'Je connais les ressources d\'aide disponibles', en: 'I know the help resources available' } }
        ],
        tip: {
          fr: 'Associations utiles : Stop Revenge Porn, Fondation des Femmes, e-Enfance (3018). Vous n\'êtes pas seul(e).',
          en: 'Useful organizations: Cyber Civil Rights Initiative, RAINN. You are not alone.'
        }
      },
      {
        id: 'remove-content',
        title: {
          fr: 'Faire retirer le contenu',
          en: 'Get Content Removed'
        },
        description: {
          fr: 'Si des images ou vidéos ont été publiées, demandez leur suppression aux plateformes. Vous pouvez aussi demander le déréférencement à Google.',
          en: 'If images or videos have been published, request their removal from platforms. You can also request de-indexing from Google.'
        },
        action: {
          fr: 'Demande de suppression Google',
          en: 'Google removal request'
        },
        link: 'https://support.google.com/websearch/troubleshooter/9685456',
        checklist: [
          { id: 'rem1', text: { fr: 'J\'ai signalé le contenu pour suppression', en: 'I reported the content for removal' } },
          { id: 'rem2', text: { fr: 'J\'ai demandé le déréférencement si nécessaire', en: 'I requested de-indexing if necessary' } }
        ]
      }
    ]
  }
];

export const translations = {
  title: {
    fr: 'Guide de Sécurité Numérique',
    en: 'Digital Security Guide'
  },
  subtitle: {
    fr: 'Protégez-vous en ligne, étape par étape',
    en: 'Protect yourself online, step by step'
  },
  backToGame: {
    fr: 'Retour au jeu',
    en: 'Back to game'
  },
  step: {
    fr: 'Étape',
    en: 'Step'
  },
  checklist: {
    fr: 'Ma checklist',
    en: 'My checklist'
  },
  tip: {
    fr: 'Conseil',
    en: 'Tip'
  },
  warning: {
    fr: 'Attention',
    en: 'Warning'
  },
  openLink: {
    fr: 'Ouvrir',
    en: 'Open'
  },
  progress: {
    fr: 'complété',
    en: 'completed'
  }
};
