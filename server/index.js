const express = require("express");
const server = express();
const morgan = require("morgan");
const cors = require("cors");
const PORT = 8080;

// connect to the client 
const client = require("./db/client");

client
  .connect()
  .then(() => console.log("connected"));

  
// init cors
server.use(cors());

// logging middleware
server.use(morgan("dev"));

// init body-parser
const bodyParser = require("body-parser");
server.use(bodyParser.json());


// Router: /api
server.use("/api", require("./api"));

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
