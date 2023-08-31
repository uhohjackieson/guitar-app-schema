// this file will reset your database ***CAUTION***
const client = require('./client')


// Drop tables
const dropTables = async () => {
    try{
        // we are calling upon client connection to make query to db
        await client.query(`
        DROP TABLE users;
        DROP TABLE songs;
        DROP TABLE skill_level;
        DROP TABLE tabs;
        `)
    } catch(error) {
        throw error;
    }
}

// Create tables
const createTables = async () => {
    try {
        await client.query(`
        CREATE TABLE songs (
            song_id SERIAL PRIMARY KEY,
            name varchar(255) NOT NULL,
            artist varchar(255) NOT NULL,
            level_id integer REFERENCES levels(level_id) NOT NULL
        );
        CREATE TABLE levels (
            level_id SERIAL PRIMARY KEY,
            Beginner varchar(50),
            Intermediate varchar(50),
            Advanced varchar(50)

            
        );
        CREATE TABLE tabs (
            tab_id SERIAL PRIMARY KEY,
            level_id INTEGER REFERENCES levels(level_id) NOT NULL,
            song_id INTEGER REFERENCES songs(song_id) NOT NULL,
            video varchar(255) UNIQUE NOT NULL
        );
        `)
    } catch(error) {
        throw error
    }
}

// insert mock data from seedData.js