export const projects = [
  {
    id: 1,
    projectImg: require('../assets/food_delivery_app.png'),
    name: 'AZ Delivery Food',
    desc: 'Plateforme full stack de gestion de restaurants et livraison de repas. Auth JWT avec RBAC (client / restaurateur / admin), cycle de commande complet, dashboard restaurateur, mises à jour en temps réel, upload avatar via Cloudinary et validation des endpoints avec Zod.',
    tags: ['Next.js', 'React', 'TypeScript', 'Redux Toolkit', 'Express', 'MongoDB', 'Tailwind CSS'],
    category: 'Web App',
    githubLink: 'https://github.com/anis87-create/az_delivery_next',
    demoLink: 'https://az-delivery-next-8tgpgt3gf-anis87-creates-projects.vercel.app/'
  },
  {
    id: 2,
    projectImg: require('../assets/match-calendar.png'),
    name: 'Match Calendar',
    desc: 'Application de planning personnel de matchs de football. Calendrier interactif par jour (Hier / Aujourd\'hui / Demain), Drag & Drop via @dnd-kit, Redux Toolkit avec persistance localStorage, base de 100+ équipes avec logos et drapeaux, et auto-nettoyage des matchs expirés.',
    tags: ['React', 'Redux Toolkit', 'TypeScript', 'Vite'],
    category: 'Web App',
    githubLink: 'https://github.com/anis87-create/match-calendar',
    demoLink: 'https://anis87-create.github.io/match-calendar/'
  },
  {
    id: 3,
    projectImg: require('../assets/blogApp.png'),
    name: 'Blog Personnel',
    desc: 'Plateforme de publication d\'articles full stack. Authentification JWT + OAuth social (Google & Facebook) via Passport.js, éditeur WYSIWYG TipTap, système de commentaires, réactions et favoris, interface admin de modération, API sécurisée (Helmet, rate limiting) et thème clair/sombre.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'TipTap', 'Cloudinary'],
    category: 'Web App',
    githubLink: 'https://github.com/anis87-create/blog-app',
    demoLink: ''
  }
];
