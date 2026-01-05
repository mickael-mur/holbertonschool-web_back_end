/**
 * StudentsController - Contrôleur pour les routes liées aux étudiants
 * 
 * À faire:
 * 1. Créer une classe StudentsController
 * 2. Méthode statique getAllStudents:
 *    - Appeler readDatabase() depuis utils
 *    - Afficher "This is the list of our students"
 *    - Pour chaque field (ordre alphabétique), afficher le nombre et la liste
 *    - Status 200 si succès, 500 si erreur
 * 
 * 3. Méthode statique getAllStudentsByMajor:
 *    - Récupérer le paramètre 'major' de l'URL
 *    - Vérifier que major est CS ou SWE
 *    - Afficher la liste des prénoms pour ce field
 *    - Status 200 si succès, 500 si erreur ou paramètre invalide
 * 
 * Concepts à explorer:
 * - req.params pour récupérer les paramètres d'URL
 * - Validation des paramètres utilisateur
 * - Gestion d'erreurs dans un contrôleur
 * - async/await avec les Promises
 * - Comment trier un objet par clés (ordre alphabétique)
 * 
 * Indice: process.argv[2] pour récupérer le nom du fichier database
 */
