const express = require('express');
const router = express.Router();

const { createLevel, getLevelById, getAllLevels } = require('../db/helpers/levels');

// GET - /api/levels - get all levels
router.get('/', async(req, res, next) => {
    try{
        const levels = await getAllLevels();
        res.send(levels);
    } catch(error){
        throw error;
    }
});

// GET - /api/levels/:id

module.exports = router;

