// this file will reset your database ***CAUTION***
// pulling in connection to my local database
const client = require("./client");

// Drop tables for cleanliness
const dropTables = async () => {
  try {
    console.log("tables dropping!")
    // we are calling upon client connection to make query to db
    await client.query(`
    DROP TABLE IF EXISTS levels;
    DROP TABLE IF EXISTS tabs;
    DROP TABLE IF EXISTS songs;
        `);
    console.log("tables dropped!")
  } catch (error) {
    throw error;
  }
};

// Create tables bc we need a place for the data to liveEeEe
const createTables = async () => {
  try {
    console.log("tables are being created!");
    await client.query(`
    CREATE TABLE levels (
        level_id SERIAL PRIMARY KEY,
        Beginner varchar(50),
        Intermediate varchar(50),
        Advanced varchar(50)

        
    );
        CREATE TABLE songs (
            song_id SERIAL PRIMARY KEY,
            name varchar(255) NOT NULL,
            artist varchar(255) NOT NULL,
            level_id integer REFERENCES levels(level_id) NOT NULL
        );
        CREATE TABLE tabs (
            tab_id SERIAL PRIMARY KEY,
            level_id INTEGER REFERENCES levels(level_id) NOT NULL,
            song_id INTEGER REFERENCES songs(song_id) NOT NULL,
            video varchar(255) UNIQUE NOT NULL
        );
        `);
  } catch (error) {
    throw error;
  }
};

// insert mock data from seedData.js

// call all da functions and 'BUILD' the database
const rebuildDb = async () => {
  try {
    // connect to the local database! WOO
    client.connect();
    // run functions
    await dropTables();
    await createTables();
  } catch (error) {
    console.error(error);
  } finally {
    // close connection
    client.end();
  }
};

rebuildDb();
