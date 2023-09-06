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

// POST - api/tabs - post new tab
router.post("/", async (req, res, next) => {
  try {
    const song = await createTab(req.body);
    res.send(song);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
