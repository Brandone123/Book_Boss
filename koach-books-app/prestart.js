require('dotenv').config();
const { execSync } = require('child_process');

console.log('Starting with API_BASE_URL:', process.env.API_BASE_URL);
execSync('expo start --clear', { stdio: 'inherit' });