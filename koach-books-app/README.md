# Koach Books App

Une application mobile de gestion de livres construite avec React Native et Expo.

## Prérequis

Avant de pouvoir exécuter cette application, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- **Node.js** : version 18.18.2 ou supérieure
- **npm** : version 9.8.1 ou supérieure
- **Expo CLI** : `npm install -g expo-cli`
- **Expo Go** : Application mobile disponible sur [App Store](https://apps.apple.com/app/apple-store/id982107779) ou [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) (version 52+ pour la compatibilité avec ce projet)

## Installation

1. Clonez ce dépôt :
   ```bash
   git clone <url-du-dépôt>
   ```

2. Naviguez vers le dossier du projet :
   ```bash
   cd koach-books-app
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

## Exécution de l'application

1. Démarrer l'application :
   ```bash
   npx expo start
   ```

2. Options pour tester l'application :
   - Scannez le QR code avec l'application Expo Go sur votre téléphone
   - Appuyez sur `w` pour ouvrir l'application dans votre navigateur web
   - Appuyez sur `a` pour ouvrir l'application dans un émulateur Android (s'il est installé)
   - Appuyez sur `i` pour ouvrir l'application dans un simulateur iOS (sur macOS uniquement)

## Structure du projet

- `App.js` : Point d'entrée de l'application
- `pages/` : Composants React pour les différentes pages/écrans
- `redux/` : Configuration Redux et tranches
- `routes/` : Configuration de la navigation
- `utils/` : Fonctions utilitaires
- `assets/` : Ressources statiques (images, polices, etc.)

## Notes importantes

- Cette application utilise Expo SDK 52.0.0 et React Native 0.76.7
- Pour exécuter l'application, vous devez toujours être dans le dossier `koach-books-app`
- Si vous rencontrez l'erreur "ConfigError: The expected package.json path does not exist", assurez-vous que vous êtes bien dans le dossier `koach-books-app` et non dans le dossier parent `Koach`

## Backend

Cette application se connecte à un serveur backend situé dans le dossier `koach-books-server`. Pour plus d'informations sur la configuration et l'exécution du backend, veuillez consulter le README dans ce dossier. 