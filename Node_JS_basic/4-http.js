/**
 * Exercice 4: Create a small HTTP server using Node's HTTP module
 * 
 * Objectif: Créer un serveur HTTP basique avec le module http de Node
 * 
 * À faire:
 * 1. Importer le module 'http'
 * 2. Créer un serveur qui écoute sur le port 1245
 * 3. Pour TOUTES les routes, retourner "Hello Holberton School!"
 * 4. Exporter le serveur dans une variable nommée 'app'
 * 
 * Concepts à explorer:
 * - Module 'http' de Node.js
 * - http.createServer()
 * - Les objets request et response
 * - response.writeHead() pour définir le status et les headers
 * - response.end() pour envoyer la réponse
 * - server.listen() pour démarrer le serveur
 * 
 * Indice: Le serveur doit répondre à n'importe quelle URL
 */
const { createServer } = require('node:http');

const app = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
});

app.listen(1245);
module.exports = app;
