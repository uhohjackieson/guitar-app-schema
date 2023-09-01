const client = require('../client')

const createSong = async ({ name, artist}) => {
    try {
        const {
            rows: [song],
            // one object is one row
        } = await client.query (`

        -- comment: this will insert into table as col1,col2,col3
        INSERT INTO songs(name, artist)
        VALUES($1, $2)
        RETURNING *;
        `,
        [name, artist]
        );
        return song
    } catch(error){
        throw error
    }
}

module.exports = { createSong }
