# Node.js Basic

## Description
Ce projet est une introduction aux concepts de base de Node.js. Tu vas apprendre à créer des programmes en ligne de commande, lire des fichiers, créer des serveurs HTTP et utiliser Express.

## Objectifs d'apprentissage
À la fin de ce projet, tu devrais être capable d'expliquer:
- Comment exécuter du JavaScript avec Node.js
- Comment utiliser les modules Node.js
- Comment lire un fichier de manière synchrone et asynchrone
- Comment créer un serveur HTTP avec le module `http`
- Comment créer un serveur HTTP avec Express
- Comment organiser un projet Express avec des routes et contrôleurs
- Comment utiliser ES6 avec Babel et Node.js

## Prérequis
- Node.js installé (version 12.x.x ou plus)
- npm (vient avec Node.js)
- Un éditeur de texte

## Installation
```bash
# Installer les dépendances
npm install
```

## Structure du projet
```
Node_JS_basic/
├── 0-console.js              # Exercice 0: Fonction basique displayMessage
├── 1-stdin.js                # Exercice 1: Interaction avec stdin
├── 2-read_file.js            # Exercice 2: Lecture synchrone de fichier
├── 3-read_file_async.js      # Exercice 3: Lecture asynchrone avec Promise
├── 4-http.js                 # Exercice 4: Serveur HTTP basique
├── 5-http.js                 # Exercice 5: Serveur HTTP avec routes
├── 6-http_express.js         # Exercice 6: Serveur Express basique
├── 7-http_express.js         # Exercice 7: Serveur Express avec routes
├── full_server/              # Exercice 8: Serveur Express organisé
│   ├── utils.js             # Fonctions utilitaires
│   ├── controllers/         # Contrôleurs
│   │   ├── AppController.js
│   │   └── StudentsController.js
│   ├── routes/              # Définition des routes
│   │   └── index.js
│   └── server.js            # Point d'entrée du serveur
├── database.csv              # Fichier de données pour les tests
├── package.json              # Configuration npm
└── .babelrc                  # Configuration Babel
```

## Exercices

### 0. Executing basic javascript with Node JS
Créer une fonction qui affiche un message dans la console.
- **Fichier:** `0-console.js`

### 1. Using Process stdin
Créer un programme interactif qui demande le nom de l'utilisateur.
- **Fichier:** `1-stdin.js`

### 2. Reading a file synchronously with Node JS
Lire un fichier CSV de manière synchrone et afficher des statistiques.
- **Fichier:** `2-read_file.js`

### 3. Reading a file asynchronously with Node JS
Même chose que l'exercice 2, mais de manière asynchrone avec une Promise.
- **Fichier:** `3-read_file_async.js`

### 4. Create a small HTTP server using Node's HTTP module
Créer un serveur HTTP basique qui retourne "Hello Holberton School!".
- **Fichier:** `4-http.js`
- **Port:** 1245

### 5. Create a more complex HTTP server using Node's HTTP module
Serveur HTTP avec deux routes: `/` et `/students`.
- **Fichier:** `5-http.js`
- **Port:** 1245

### 6. Create a small HTTP server using Express
Introduction à Express avec un serveur simple.
- **Fichier:** `6-http_express.js`
- **Port:** 1245

### 7. Create a more complex HTTP server using Express
Serveur Express avec routes multiples.
- **Fichier:** `7-http_express.js`
- **Port:** 1245

### 8. Organize a complex HTTP server using Express
Projet Express organisé avec architecture MVC.
- **Dossier:** `full_server/`
- **Fichiers:**
  - `full_server/utils.js`
  - `full_server/controllers/AppController.js`
  - `full_server/controllers/StudentsController.js`
  - `full_server/routes/index.js`
  - `full_server/server.js`

## Utilisation

### Exercices 0-7
```bash
# Exemple pour l'exercice 0
node 0-main.js

# Exemple pour l'exercice 1
node 1-stdin.js

# Exemple pour l'exercice 5 (avec argument)
node 5-http.js database.csv
```

### Exercice 8 (full_server)
```bash
# Lancer le serveur en mode développement
npm run dev full_server/server.js database.csv

# Tester les routes
curl localhost:1245
curl localhost:1245/students
curl localhost:1245/students/CS
curl localhost:1245/students/SWE
```

## Concepts clés à maîtriser

### Modules Node.js
- `fs`: Lecture/écriture de fichiers
- `http`: Création de serveurs HTTP
- `process`: Interaction avec le processus Node.js

### JavaScript asynchrone
- Callbacks
- Promises
- async/await

### Express.js
- Routing
- Middlewares
- Contrôleurs
- Organisation MVC

### ES6 avec Babel
- import/export
- Classes
- Arrow functions
- Template literals

## Ressources utiles
- [Documentation officielle Node.js](https://nodejs.org/docs/)
- [Documentation Express](https://expressjs.com/)
- [Guide des Promises JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Using_promises)
- [Module fs de Node.js](https://nodejs.org/api/fs.html)

## Auteur
Étudiant Holberton School

## License
ISC
