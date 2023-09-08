const client = require("../client");

const createTab = async ({ levelsId, name, url }) => {
  try {
    const {
      rows: [tab],
    } = await client.query(
      `
        INSERT INTO tabs("levelsId", name, url)
        VALUES($1, $2, $3)
        RETURNING *;
        `,
      [levelsId, name, url]
    );
    return tab;
  } catch (error) {
    throw error;
  }
};

const getAllTabs = async () => {
  try {
    const { rows } = await client.query(`
    SELECT * FROM tabs;
    `);
    return rows;
  } catch (error) {
    throw error;
  }
};

const getTabById = async (tabId) => {
  try {
    const {
      rows: [tabs],
    } = await client.query(`
      SELECT * 
      FROM tabs
      WHERE "tabId" = ${tabId};
    `);
    return tabs;
  } catch (error) {
    throw error;
  }
};

module.exports = { createTab, getAllTabs, getTabById };
