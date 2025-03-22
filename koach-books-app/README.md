# Koach Books App

A mobile book management application built with React Native and Expo.

## Prerequisites

Before you can run this application, ensure you have the following installed on your machine:

- **Node.js**: version 18.18.2 or higher
- **npm**: version 9.8.1 or higher
- **Expo CLI**: `npm install -g expo-cli`
- **Expo Go**: Mobile application available on the [App Store](https://apps.apple.com/app/apple-store/id982107779) or [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) (version 52+ for compatibility with this project)

## Installation

1. Clone this repository:  
   `git clone <repository-url>`

2. Navigate to the project folder:  
   `cd koach-books-app`

3. Install the dependencies:  
   `npm install`

## Running the Application

1. Start the application:  
   `npx expo start`

2. Options to test the application:
   - Scan the QR code with the Expo Go app on your phone
   - Press `w` to open the app in your web browser
   - Press `a` to open the app in an Android emulator (if installed)
   - Press `i` to open the app in an iOS simulator (macOS only)

## Project Structure

- `App.js`: Entry point of the application
- `pages/`: React components for different pages/screens
- `redux/`: Redux configuration and slices
- `routes/`: Navigation configuration
- `utils/`: Utility functions
- `assets/`: Static resources (images, fonts, etc.)

## Important Notes

- This application uses Expo SDK 52.0.0 and React Native 0.76.7
- To run the application, you must always be in the `koach-books-app` folder
- If you encounter the error "ConfigError: The expected package.json path does not exist," ensure you are in the `koach-books-app` folder and not in the parent `Koach` folder

## Backend

This application connects to a backend server located in the `koach-books-server` folder. For more information on configuring and running the backend, please refer to the README in that folder.