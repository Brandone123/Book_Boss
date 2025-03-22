# Koach Books Server

Serveur backend pour l'application Koach Books, développé avec Node.js et Express.

## Prérequis

Avant de pouvoir exécuter ce serveur, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- **Node.js** : version 18.18.2 ou supérieure
- **npm** : version 9.8.1 ou supérieure
- **MySQL** : version 5.7 ou supérieure

## Installation

1. Clonez ce dépôt (s'il n'est pas déjà cloné) :
   ```bash
   git clone <url-du-dépôt>
   ```

2. Naviguez vers le dossier du serveur :
   ```bash
   cd koach-books-server
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

4. Configuration de la base de données MySQL :
   - Créez une base de données nommée `koach_books`
   - Importez le fichier SQL situé à la racine du projet :
     ```bash
     mysql -u votre_utilisateur -p koach_books < ../expo_books_2024-05-31.sql
     ```

## Exécution du serveur

1. Démarrer le serveur en mode développement :
   ```bash
   npm run dev
   ```

2. Le serveur sera accessible à l'adresse :
   ```
   http://localhost:5000
   ```

## Structure du projet

- `src/index.js` : Point d'entrée du serveur Express
- `src/config/` : Configuration de la base de données et des secrets
- `src/controllers/` : Contrôleurs pour la logique métier
- `src/models/` : Modèles de données
- `src/router/` : Définition des routes API
- `src/uploads/` : Dossier pour les fichiers uploadés

## API Endpoints

Le serveur expose les endpoints suivants :

- **Authentification** : `/user/login`, `/user/register`
- **Livres** : CRUD pour les livres
- **Types** : CRUD pour les types de livres
- **Critiques** : CRUD pour les critiques de livres
- **Paramètres** : Gestion des paramètres utilisateur

## Notes importantes

- Le serveur utilise JWT pour l'authentification
- Les images uploadées sont stockées dans le dossier `src/uploads`
- Assurez-vous que la base de données MySQL est en cours d'exécution avant de démarrer le serveur 