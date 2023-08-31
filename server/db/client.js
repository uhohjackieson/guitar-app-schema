const { Client } = require('pg')

const guitarApp = 'guitarApp'
const client = new Client(`postgres://localhost:5432${guitarApp}`)

module.exports = client