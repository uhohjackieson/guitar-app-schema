const client = require("../client");

const createLevel = async ({ level }) => {
  try {
    const {
      rows: [skill_level],
    } = await client.query(
      `
    INSERT INTO levels(level)
    VALUES($1)
    RETURNING *;
    `,
      [level]
    );
    return skill_level;
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
      `SELECT * FROM levels WHERE level_id=${levelId};
            `
    );
    return levels;
  } catch (error) {
    throw error;
  }
};

module.exports = { createLevel, getLevelById };
