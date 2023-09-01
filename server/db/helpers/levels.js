const client = require('../client')

const createLevel = async ({ level }) => {
    try{
    const {
        rows:[skill_level]
    } = await client.query(`
    INSERT INTO levels(level)
    VALUES($1)
    RETURNING *;
    `,
    [level]
    );
    return skill_level;
} catch(error) {
    throw error
}
}

module.exports = { createLevel }