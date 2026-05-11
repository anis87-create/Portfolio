export const projects = [
  {
    id: 1,
    projectImg: require('../assets/project-1.webp'),
    name: 'AZ Delivery Food',
    desc: 'Plateforme full stack de gestion de restaurants et livraison de repas. Auth JWT avec RBAC (client / restaurateur / admin), cycle de commande complet, dashboard restaurateur, mises à jour en temps réel, upload avatar via Cloudinary et validation des endpoints avec Zod.',
    tags: ['Next.js', 'React', 'TypeScript', 'Redux Toolkit', 'Express', 'MongoDB', 'Tailwind CSS'],
    category: 'Web App'
  },
  {
    id: 2,
    projectImg: require('../assets/project-2.webp'),
    name: 'Match Calendar',
    desc: 'Application de planning personnel de matchs de football. Calendrier interactif par jour (Hier / Aujourd\'hui / Demain), Drag & Drop via @dnd-kit, Redux Toolkit avec persistance localStorage, base de 100+ équipes avec logos et drapeaux, et auto-nettoyage des matchs expirés.',
    tags: ['React', 'Redux Toolkit', 'TypeScript', 'Vite'],
    category: 'Web App'
  },
  {
    id: 3,
    projectImg: require('../assets/project-3.webp'),
    name: 'Blog Personnel',
    desc: 'Plateforme de publication d\'articles full stack. Authentification JWT + OAuth social (Google & Facebook) via Passport.js, éditeur WYSIWYG TipTap, système de commentaires, réactions et favoris, interface admin de modération, API sécurisée (Helmet, rate limiting) et thème clair/sombre.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'TipTap', 'Cloudinary'],
    category: 'Web App'
  }
];
