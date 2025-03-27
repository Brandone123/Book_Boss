const secret = process.env.JWT_SECRET || 'key123';

module.exports = {
    secret,
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'koach_user',
    password: process.env.DB_PASSWORD || '123456',
    database: process.env.DB_NAME || 'koach_books'
}