/**
 * Exercice 6: Create a small HTTP server using Express
 * 
 * Objectif: Créer un serveur avec Express (plus simple que http)
 * 
 * À faire:
 * 1. Installer Express (npm install express)
 * 2. Créer une application Express
 * 3. Route '/': retourner "Hello Holberton School!"
 * 4. Le serveur écoute sur le port 1245
 * 5. Exporter l'app
 * 
 * Concepts à explorer:
 * - Express.js - qu'est-ce que c'est et pourquoi l'utiliser?
 * - express() pour créer une app
 * - app.get() pour définir une route
 * - app.listen() pour démarrer le serveur
 * - Comment Express gère automatiquement les routes inexistantes (404)
 * 
 * Indice: Express est beaucoup plus simple que le module http natif!
 */
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

module.exports = app;
