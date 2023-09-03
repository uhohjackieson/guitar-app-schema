const { Client } = require("pg");

const client = new Client(`postgres://localhost:8080/guitarApp`);

module.exports = client;
