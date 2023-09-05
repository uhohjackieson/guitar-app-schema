const client = require("../client");

const createLevel = async ({ level }) => {
  try {
    const {
      rows: [skill],
    } = await client.query(
      `
    INSERT INTO levels(level)
    VALUES($1)
    RETURNING *;
    `,
      [level]
    );
    return skill;
  } catch (error) {
    throw error;
  }
};

const getAllLevels = async () => {
  try {
    const { rows } = await client.query(`
    SELECT * FROM levels;
    `);
    return rows;
  } catch (error) {
    throw error;
  }
};

const getLevelById = async (levelId) => {
  try {
    const {
      // since were only trying to get one here vvv
      rows: [levels],
    } = await client.query(
      `SELECT * FROM levels WHERE "levelId"=${levelId};
            `
    );
    return levels;
  } catch (error) {
    throw error;
  }
};

module.exports = { createLevel, getAllLevels, getLevelById };
