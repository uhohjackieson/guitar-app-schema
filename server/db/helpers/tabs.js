const client = require('../client')

const createTab = async ({ name, url }) => {
  try {
    const {
      rows: [tab],
    } = await client.query (
      `
        INSERT INTO tabs(name, url)
        VALUES($1, $2)
        RETURNING *;
        `,
      [name, url]
    );
    return tab
  } catch (error) {
    throw error;
  }
};

const getAllTabs = async () => {
  try{
    const { rows } = await client.query(`
    SELECT * FROM tabs;
    `);
    return rows;
  } catch(error){
    throw error;
  }
};

module.exports = { createTab, getAllTabs }
