const express = require("express");
const router = express.Router();

const { getAllTabs, createTab } = require("../db/helpers/tabs");

// GET - api/tabs - get all tabs
router.get("/", async (req, res, next) => {
  try {
    const tabs = await getAllTabs();
    res.send(tabs);
  } catch (error) {
    throw error;
  }
});

module.exports = router;