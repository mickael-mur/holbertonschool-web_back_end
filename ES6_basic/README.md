# ES6 Basics

Ce projet couvre les fonctionnalités de base d'ES6 (ECMAScript 2015).

## Learning Objectives

À la fin de ce projet, tu seras capable d'expliquer sans aide :

- Ce qu'est ES6
- Les nouvelles fonctionnalités introduites dans ES6
- La différence entre une constante et une variable
- Les variables à portée de bloc (block-scoped)
- Les fonctions fléchées et les paramètres par défaut
- Les paramètres rest et spread
- Le templating de chaînes en ES6
- La création d'objets et leurs propriétés en ES6
- Les itérateurs et les boucles for-of

## Requirements

- Ubuntu 20.04 LTS
- Node 20.x.x
- npm 9.x.x
- Tous les fichiers doivent se terminer par une nouvelle ligne
- Extension `.js` pour tous les fichiers
- Tests avec Jest Testing Framework
- Analyse avec ESLint

## Setup

### Installation de NodeJS 20.x.x

```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Vérification :
```bash
nodejs -v  # v20.15.1
npm -v     # 10.7.0
```

### Installation des dépendances du projet

Dans le répertoire du projet :

```bash
npm install
```

Cela installera :
- **Jest** : Framework de test
- **Babel** : Transpileur JavaScript
- **ESLint** : Linter pour analyser le code

## Configuration Files

- `package.json` : Configuration npm et scripts
- `babel.config.js` : Configuration Babel
- `.eslintrc.js` : Configuration ESLint
- `.gitignore` : Fichiers à ignorer par Git

## Scripts disponibles

```bash
npm run lint          # Lancer ESLint
npm run check-lint    # Vérifier le linting des fichiers d'exercices
npm run dev <file>    # Exécuter un fichier avec Babel
npm run test          # Lancer les tests Jest
npm run full-test     # Linter + tests
```

## Exercices

| Fichier | Concept ES6 |
|---------|-------------|
| **0-constants.js** | `const` et `let` |
| **1-block-scoped.js** | Block scope |
| **2-arrow.js** | Arrow functions |
| **3-default-parameter.js** | Default parameters |
| **4-rest-parameter.js** | Rest parameters |
| **5-spread-operator.js** | Spread operator |
| **6-string-interpolation.js** | Template literals |
| **7-getBudgetObject.js** | Property shorthand |
| **8-getBudgetCurrentYear.js** | Computed property names |
| **9-getFullBudget.js** | ES6 method properties |
| **10-loops.js** | for...of loops |
| **11-createEmployeesObject.js** | Object creation |
| **12-createReportObject.js** | Object with methods |

## Resources

- [MDN - ES6 Features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla)
- [JavaScript.info - Modern JavaScript](https://javascript.info/)
- [ES6 Features](http://es6-features.org/)

## Repository

- **GitHub repository**: holbertonschool-web_back_end
- **Directory**: ES6_basic
