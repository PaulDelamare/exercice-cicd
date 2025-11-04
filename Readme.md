# API Node.js avec CI/CD# API Node.js avec CI/CD



## Description## Description



Ce projet est une API REST simple développée en Node.js avec TypeScript, utilisant Express.js. Il inclut des middlewares de sécurité (Helmet, CORS, Rate Limiting), des utilitaires de validation de données avec Vine.js, et un système de logging avec Winston. Le projet est configuré avec un pipeline CI/CD complet utilisant GitHub Actions pour automatiser les tests, la sécurité et le déploiement.Ce projet est une API REST simple développée en Node.js avec TypeScript, utilisant Express.js. Il inclut des middlewares de sécurité (Helmet, CORS, Rate Limiting), des utilitaires de validation de données avec Vine.js, et un système de logging avec Winston. Le projet est configuré avec un pipeline CI/CD complet utilisant GitHub Actions pour automatiser les tests, la sécurité et le déploiement.



L'objectif est de démontrer les bonnes pratiques de développement sécurisé et d'intégration continue pour une application Node.js.L'objectif est de démontrer les bonnes pratiques de développement sécurisé et d'intégration continue pour une application Node.js.



## Fonctionnalités## Fonctionnalités



- **Express.js** : Framework pour le serveur API- **Express.js** : Framework pour le serveur API

- **TypeScript** : Typage statique pour une meilleure maintenabilité- **TypeScript** : Typage statique pour une meilleure maintenabilité

- **Sécurité** :- **Sécurité** :

  - Helmet pour les headers HTTP sécurisés  - Helmet pour les headers HTTP sécurisés

  - CORS pour la gestion des origines croisées  - CORS pour la gestion des origines croisées

  - Rate limiting pour éviter les abus  - Rate limiting pour éviter les abus

  - Sanitisation des données avec sanitize-html  - Sanitisation des données avec sanitize-html

- **Validation** : Utilisation de Vine.js pour valider les données d'entrée- **Validation** : Utilisation de Vine.js pour valider les données d'entrée

- **Tests** : Vitest pour les tests unitaires- **Tests** : Vitest pour les tests unitaires

- **Logging** : Winston avec rotation des fichiers de logs- **Logging** : Winston avec rotation des fichiers de logs

- **CI/CD** : Pipeline GitHub Actions avec build, test, audit sécurité, et déploiement simulé- **CI/CD** : Pipeline GitHub Actions avec build, test, audit sécurité, et déploiement simulé



## Prérequis## Prérequis



- Node.js (version 20 recommandée)- Node.js (version 20 recommandée)

- npm (inclus avec Node.js)- npm (inclus avec Node.js)



## Installation## Installation



1. Clonez le repository :1. Clonez le repository :

```bash```bash

git clone https://github.com/PaulDelamare/exercice-cicd.gitgit clone https://github.com/PaulDelamare/exercice-cicd.git

cd exercice-cicdcd exercice-cicd

``````



2. Installez les dépendances :2. Installez les dépendances :

```bash```bash

npm installnpm install

``````



3. Créez un fichier `.env` basé sur `.env.exemple` :3. Créez un fichier `.env` basé sur `.env.exemple` :

```bash```bash

cp .env.exemple .envcp .env.exemple .env

``````



4. Lancez l'application en mode développement :4. Lancez l'application en mode développement :

```bash```bash

npm run devnpm run dev

``````



L'API sera disponible sur `http://localhost:3000`.L'API sera disponible sur `http://localhost:3000`.



## Scripts disponibles## Scripts disponibles



- `npm run dev` : Lance le serveur en mode développement avec tsx watch- `npm run dev` : Lance le serveur en mode développement avec tsx watch

- `npm run build` : Compile le projet TypeScript- `npm run build` : Compile le projet TypeScript

- `npm test` : Lance les tests unitaires avec Vitest- `npm test` : Lance les tests unitaires avec Vitest

- `npm run test:coverage` : Lance les tests avec rapport de couverture- `npm run test:coverage` : Lance les tests avec rapport de couverture



## Structure du projet## Structure du projet



``````

src/src/

├── Controllers/          # Contrôleurs de l'API├── Controllers/          # Contrôleurs de l'API

├── Middlewares/          # Middlewares personnalisés├── Middlewares/          # Middlewares personnalisés

│   ├── rateLimiter/      # Limitation du taux de requêtes│   ├── rateLimiter/      # Limitation du taux de requêtes

│   └── sanitizeData/     # Sanitisation des données│   └── sanitizeData/     # Sanitisation des données

├── Routes/               # Définition des routes├── Routes/               # Définition des routes

├── Services/             # Logique métier├── Services/             # Logique métier

└── Utils/                # Utilitaires└── Utils/                # Utilitaires

    ├── checkApiKey/      # Vérification des clés API    ├── checkApiKey/      # Vérification des clés API

    ├── createFile/       # Création de fichiers    ├── createFile/       # Création de fichiers

    ├── errorHandler/     # Gestion des erreurs    ├── errorHandler/     # Gestion des erreurs

    ├── formatDateError/  # Formatage des dates d'erreur    ├── formatDateError/  # Formatage des dates d'erreur

    ├── logger/           # Configuration du logging    ├── logger/           # Configuration du logging

    ├── logFunction/      # Fonctions de logging    ├── logFunction/      # Fonctions de logging

    ├── returnSuccess/    # Réponses de succès    ├── returnSuccess/    # Réponses de succès

    ├── sanitizeStringData/ # Sanitisation des chaînes    ├── sanitizeStringData/ # Sanitisation des chaînes

    └── validateData/     # Validation des données    └── validateData/     # Validation des données

config/config/

├── apiConfigMiddleware.config.ts  # Configuration des middlewares├── apiConfigMiddleware.config.ts  # Configuration des middlewares

└── router.config.ts                # Configuration du routeur└── router.config.ts                # Configuration du routeur

logs/                    # Fichiers de logs (générés automatiquement)logs/                    # Fichiers de logs (générés automatiquement)

``````



## Pipeline CI/CD## Pipeline CI/CD



Le projet utilise GitHub Actions pour l'intégration continue :Le projet utilise GitHub Actions pour l'intégration continue :



### Jobs du pipeline :### Jobs du pipeline :

1. **Build** : Compilation TypeScript et vérification des types1. **Build** : Compilation TypeScript et vérification des types

2. **Test** : Exécution des tests unitaires avec Vitest2. **Test** : Exécution des tests unitaires avec Vitest

3. **Security** : Audit des dépendances npm pour détecter les vulnérabilités3. **Security** : Audit des dépendances npm pour détecter les vulnérabilités

4. **Deploy** : Déploiement simulé (à remplacer par un vrai déploiement)4. **Deploy** : Déploiement simulé (à remplacer par un vrai déploiement)



### Déclencheurs :### Déclencheurs :

- Push ou Pull Request sur la branche `main`- Push ou Pull Request sur la branche `main`



### Configuration :### Configuration :

- Voir `.github/workflows/ci-cd.yml` pour les détails du pipeline- Voir `.github/workflows/ci-cd.yml` pour les détails du pipeline



## Sécurité## Sécurité



L'application inclut plusieurs mesures de sécurité :L'application inclut plusieurs mesures de sécurité :



- **Headers sécurisés** avec Helmet- **Headers sécurisés** avec Helmet

- **Protection CSRF** implicite via CORS- **Protection CSRF** implicite via CORS

- **Rate limiting** pour éviter les attaques par déni de service- **Rate limiting** pour éviter les attaques par déni de service

- **Sanitisation** des entrées utilisateur- **Sanitisation** des entrées utilisateur

- **Validation** stricte des données- **Validation** stricte des données

- **Logging** des erreurs et activités suspectes- **Logging** des erreurs et activités suspectes



## Tests## Tests



Les tests sont écrits avec Vitest. Pour les lancer :Les tests sont écrits avec Vitest. Pour les lancer :



```bash```bash

npm testnpm test

``````



Pour voir la couverture :Pour voir la couverture :



```bash```bash

npm run test:coveragenpm run test:coverage

``````



## Contribution## Contribution



1. Fork le projet1. Fork le projet

2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonction`)2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonction`)

3. Committez vos changements (`git commit -am 'Ajoute nouvelle fonctionnalité'`)3. Committez vos changements (`git commit -am 'Ajoute nouvelle fonctionnalité'`)

4. Pushez vers la branche (`git push origin feature/nouvelle-fonction`)4. Pushez vers la branche (`git push origin feature/nouvelle-fonction`)

5. Ouvrez une Pull Request5. Ouvrez une Pull Request



## Licence## Licence



ISCISC
  ├── Utils/
  ├── app.ts
  ├── server.ts
```

## Setting Up Prisma Models

1. Create a new Prisma schema file inside the `schema/` directory, e.g., `schema/example.prisma`.
2. Define your models using Prisma's syntax, for example:
   ```prisma
   model User {
     id    Int     @id @default(autoincrement())
     name  String
     email String  @unique
   }
   ```

## Notes

As a junior developer, this setup may not be fully optimized compared to a more experienced developer's approach. However, it provides a solid starting point for API development, following best practices and ensuring a maintainable structure.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run the following command to apply your models to the database
```bash
  npm run migrate:init
```

### Start the Development Server

```bash
npm run dev
```

### Run in Production

```bash
npm start
```

## Environment Variables

Create a `.env` file at the root and configure your database connection. You can use `.env.example` as a reference for the required information

## Contributions

If you have suggestions for improving the project, feel free to fork the repository and submit a pull request!
