/**
 * Utils - Fonctions utilitaires pour le serveur
 * 
 * À faire:
 * 1. Créer une fonction readDatabase qui accepte un chemin de fichier
 * 2. Elle doit lire le fichier de manière ASYNCHRONE
 * 3. Elle doit retourner une Promise
 * 4. En cas d'erreur, reject la promise
 * 5. Si succès, retourner un objet avec les prénoms groupés par field
 * 
 * Format de retour attendu:
 * {
 *   CS: ['Johann', 'Arielle', ...],
 *   SWE: ['Guillaume', 'Joseph', ...]
 * }
 * 
 * Concepts à explorer:
 * - Organisation du code en modules réutilisables
 * - Comment structurer les données pour faciliter leur utilisation
 * - Export avec ES6 (export const readDatabase = ...)
 * 
 * Note: Ce fichier utilise la syntaxe ES6 (import/export)
 */
