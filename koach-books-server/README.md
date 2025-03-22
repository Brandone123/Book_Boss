# Koach Books Server

Backend server for the Koach Books application, developed with Node.js and Express.

## Prerequisites

Before running this server, ensure you have the following installed on your machine:

- **Node.js**: version 18.18.2 or higher
- **npm**: version 9.8.1 or higher
- **MySQL**: version 5.7 or higher

## Installation

1. Clone this repository (if not already cloned):  
   `git clone <repository-url>`

2. Navigate to the server folder:  
   `cd koach-books-server`

3. Install the dependencies:  
   `npm install`

4. MySQL database configuration:
   - Create a database named `koach_books`
   - Import the SQL file located at the root of the project:  
     `mysql -u your_user -p koach_books < ../expo_books_2024-05-31.sql`

## Running the Server

1. Start the server in development mode:  
   `npm run dev`

2. The server will be accessible at:  
   `http://localhost:5000`

## Project Structure

- `src/index.js`: Entry point of the Express server
- `src/config/`: Database and secret configurations
- `src/controllers/`: Controllers for business logic
- `src/models/`: Data models
- `src/router/`: API route definitions
- `src/uploads/`: Folder for uploaded files

## API Endpoints

The server exposes the following endpoints:

- **Authentication**: `/user/login`, `/user/register`
- **Books**: CRUD for books
- **Types**: CRUD for book types
- **Reviews**: CRUD for book reviews
- **Settings**: User settings management

## Important Notes

- The server uses JWT for authentication
- Uploaded images are stored in the `src/uploads` folder
- Ensure that the MySQL database is running before starting the server