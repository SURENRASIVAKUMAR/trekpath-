const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function setupDatabase() {
    const urlParts = new URL(process.env.DATABASE_URL);
    const dbName = urlParts.pathname.substring(1);
    
    // Connect to the default postgres database to create the new database
    const defaultUrl = process.env.DATABASE_URL.replace(`/${dbName}`, '/postgres');
    const client = new Client({ connectionString: defaultUrl });
    
    try {
        await client.connect();
        console.log("Connected to default postgres database.");
        
        // Check if database exists
        const res = await client.query(`SELECT 1 FROM pg_database WHERE datname = $1`, [dbName]);
        if (res.rowCount === 0) {
            console.log(`Creating database '${dbName}'...`);
            await client.query(`CREATE DATABASE "${dbName}"`);
            console.log("Database created successfully.");
        } else {
            console.log(`Database '${dbName}' already exists.`);
        }
    } catch (err) {
        console.error("Error creating database:", err.message);
        return;
    } finally {
        await client.end();
    }

    // Connect to the newly created trekpath database to create tables
    const trekClient = new Client({ connectionString: process.env.DATABASE_URL });
    try {
        await trekClient.connect();
        console.log("Connected to trekpath database.");
        
        const sql = fs.readFileSync(path.join(__dirname, 'init.sql'), 'utf8');
        console.log("Executing init.sql...");
        await trekClient.query(sql);
        console.log("Tables created successfully.");
        
    } catch (err) {
        console.error("Error creating tables:", err.message);
    } finally {
        await trekClient.end();
    }
}

setupDatabase();
