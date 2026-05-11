import React from 'react'
import '../styles/Experience.css';

const WorkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)' }}>
    <path d="M2 7v1l11 4 9-4V7L11 4z"></path>
    <path d="M4 11v4.267c0 1.621 4.001 3.893 9 3.734 4-.126 6.586-1.972 7-3.467.024-.089.037-.178.037-.268V11L13 14l-5-1.667v3.213l-1-.364V12l-3-1z"></path>
  </svg>
);

const EduIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)' }}>
    <path d="M2 7v1l11 4 9-4V7L11 4z"></path>
    <path d="M4 11v4.267c0 1.621 4.001 3.893 9 3.734 4-.126 6.586-1.972 7-3.467.024-.089.037-.178.037-.268V11L13 14l-5-1.667v3.213l-1-.364V12l-3-1z"></path>
  </svg>
);

const Experience = () => {
  return (
    <section id='experience' className='mx-auto container section'>
      <h2 className='text-center md:text-left text-3xl section_title font-bold mb-10 mt-10'>Experience</h2>
      <div className='flex flex-col md:flex-row gap-10'>

        {/* Colonne gauche — Formation */}
        <ol className="relative border-s border-gray-200 dark:border-gray-700 flex-1">
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <EduIcon />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Baccalauréat</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2005 – 2006</time>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <EduIcon />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Licence en génie logiciel</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2006 – 2010</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Faculté des Sciences de Bizerte</p>
          </li>
          <li className="ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <EduIcon />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Ingénierie logicielle</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2010 – 2014</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">ESPRIT</p>
          </li>
        </ol>

        {/* Colonne droite — Expériences professionnelles */}
        <ol className="relative border-s border-gray-200 dark:border-gray-700 flex-1">
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-red-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900">
              <WorkIcon />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Développeur Front-End React — <span className="text-red-500">Novencia</span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Mars 2022 – Fév. 2023 · 1 an · Tunis</time>
            <ul className="text-sm font-normal text-gray-500 dark:text-gray-400 list-disc list-inside space-y-1">
              <li>Développement du dashboard administrateur de la plateforme e-commerce MipLivrel</li>
              <li>Modules de gestion utilisateurs, auteurs, livres et commandes avec React.js + Redux</li>
              <li>Intégration d'APIs REST et amélioration de l'expérience utilisateur</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-3">
              {['React.js', 'Redux', 'REST API', 'JavaScript'].map(tag => (
                <span key={tag} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">{tag}</span>
              ))}
            </div>
          </li>

          <li className="ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-red-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900">
              <WorkIcon />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Développeur Full Stack JS — <span className="text-red-500">Witik</span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Mars 2023 – Mai 2026 · 3 ans · Tunis</time>
            <ul className="text-sm font-normal text-gray-500 dark:text-gray-400 list-disc list-inside space-y-1">
              <li>Architecture MVC Node.js 18 + MySQL + Dust.js (SSR) + Webpack</li>
              <li>Système multi-tenant avec hiérarchie holding/entité et RBAC granulaire</li>
              <li>Pipeline d'internationalisation sur 7 langues via Google Sheets et i18n</li>
              <li>Intégration génération IA asynchrone via OpenAI (registres, politiques, audits)</li>
              <li>Modules métier : PIAs, registres, gestion des risques, workflows, SSO, PDF, emails</li>
              <li>Tests Mocha, déploiement Docker sur Clever Cloud</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-3">
              {['Node.js 18', 'MySQL', 'Dust.js', 'Webpack', 'Docker', 'Mocha', 'OpenAI'].map(tag => (
                <span key={tag} className="px-2 py-1 text-xs bg-red-50 text-red-600 rounded">{tag}</span>
              ))}
            </div>
          </li>
        </ol>

      </div>
    </section>
  )
}

export default Experience
