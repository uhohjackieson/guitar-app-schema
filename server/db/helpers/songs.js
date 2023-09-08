const client = require("../client");

// this creates songs in the db
const createSong = async ({ levelsId, name, artist, image }) => {
  try {
    const {
      rows: [song],
      // one object is one row
    } = await client.query(
      `

        -- comment: this will insert into table as col1,col2,col3
        INSERT INTO songs("levelsId", name, artist, image)
        VALUES($1, $2, $3, $4)
        RETURNING *;
        `,
      [levelsId, name, artist, image]
    );
    return song;
  } catch (error) {
    throw error;
  }
};

const getAllSongs = async () => {
  try {
    const { rows } = await client.query(`
        SELECT * FROM songs;
        `);
    // console.log(rows);
    return rows;
  } catch (error) {
    throw error;
  }
};

const getSongById = async (songId) => {
  try {
    const {
      rows: [songs],
    } = await client.query(`
      SELECT * 
      FROM songs
      WHERE "songId" = ${songId};
    `);
    return songs;
  } catch (error) {
    throw error;
  }
};

const deleteSong = async (songId) => {
  try {
    console.log("deleting song");
    const { rows } = await client.query(`
    DELETE FROM songs
    WHERE "songId" = ${songId}
    RETURNING *;
    `);
    return rows;
  } catch (error) {
    throw error;
  }
};

const updateSong = async (songId, body) => {
  try {
    const { rows } = await client.query(`
      UPDATE songs
      SET "levelsId" = '${body.levelsId}',
      name = '${body.name}',
      artist = '${body.artist}'
      image = '${body.image}'
      WHERE "songId" = ${songId}
      RETURNING *;
    `);
    return rows;
  } catch (error) {}
};
module.exports = {
  createSong,
  getAllSongs,
  getSongById,
  deleteSong,
  updateSong,
};
