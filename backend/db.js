const { Pool } = require('pg');
require('dotenv').config();

// Create a new connection pool using the connection string from .env
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
