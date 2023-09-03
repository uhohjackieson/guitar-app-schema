const express = require("express");
const router = express.Router();
const PORT = 8080;
const client = require("../db/client");

// connect
client.connect();

// init morgan
const morgan = require('morgan');
router.use(morgan('dev'));

// init cors
const cors = require('cors');
router.use(cors());

// GET /api/songs
router.get('/api', async (req, res, next) => {
  try {
    res.send("OK")
  } catch(error){

  }
});

// ROUTER: /api/songs
router.use('/api', require('./api'))

router.use('/songs', require('./songs'));

router.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = router;
