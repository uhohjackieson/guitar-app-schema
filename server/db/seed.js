// this file will reset your database ***CAUTION***
// pulling in connection to my local database
const client = require("./client");

const { createSong, getAllSongs } = require("./helpers/songs");
const { createTab } = require("./helpers/tabs");
const { createLevel, getLevelById } = require("./helpers/levels");
// destructuring it so we can pull in each array separately
const { songs, tabs, levels } = require("./seedData.js");

// Drop tables for cleanliness
const dropTables = async () => {
  try {
    console.log("tables dropping!");
    // we are calling upon client connection to make query to db
    await client.query(`
    DROP TABLE IF EXISTS tabs;
    DROP TABLE IF EXISTS songs;
    DROP TABLE IF EXISTS levels;
        `);
    console.log("tables dropped!");
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
        level varchar(50) NOT NULL

        
    );
        CREATE TABLE songs (
            song_id SERIAL PRIMARY KEY,
            name varchar(255) NOT NULL,
            artist varchar(255) NOT NULL

        );
        CREATE TABLE tabs (
            tab_id SERIAL PRIMARY KEY,
            level_id INTEGER REFERENCES levels(level_id),
            song_id INTEGER REFERENCES songs(song_id),
            name varchar(255) NOT NULL,
            url varchar(255) UNIQUE NOT NULL
        );
        `);
  } catch (error) {
    throw error;
  }
};

// insert mock data from seedData.js
const createInitialSongs = async () => {
  try {
    // Looping through the "songs" array from seedData
    for (const song of songs) {
      // Insert each song into the table
      await createSong(song);
    }
  } catch (error) {
    throw error;
  }
};

const createInitialTabs = async () => {
  try {
    for (const tab of tabs) {
      await createTab(tab);
    }
  } catch (error) {
    throw error;
  }
};

const createInitialLevels = async () => {
  try {
    for (const level of levels) {
      await createLevel(level);
    }
  } catch (error) {
    throw error;
  }
};

// call all da functions and 'BUILD' the database
const rebuildDb = async () => {
  try {
    // connect to the local database! WOO
    client.connect();
    // run functions
    await dropTables();
    await createTables();

    // Generate the data
    await createInitialSongs();
    await createInitialTabs();
    await createInitialLevels();
    await getLevelById(2);

    await getAllSongs();
  } catch (error) {
    console.error(error);
  } finally {
    // close connection
    client.end();
  }
};

rebuildDb();
