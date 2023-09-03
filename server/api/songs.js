const express = require("express");
const router = express.Router();

const { createSong, getAllSongs, getSongById } = require("../db/helpers/songs");

// GET - /api/songs - get all songs
router.get("/", async (req, res, next) => {
  try {
    const songs = await getAllSongs();
    res.send(songs);
  } catch (error) {
    next(error);
  }
});

// GET - /api/songs/:songId - get song by id
// router.get("/:songId", async (req, res, next) => {
//     try{
//         const song = await getSongById(req.params.songId);
//         res.send(song);
//     } catch(error) {
//         next(error);
//     }
// });

// POST - /api/songs - create a new song
// router.post('/', async(req, res, next) => {
//     try{
//         const song = await createSong(req.body);
//         res.send(song);
//     }catch(error){
//         next(error);
//     }
// });

// PUT - /api/songs/:songId - update a song
// router.put("/:songId", async(req, res, next) => {
//     try{
//         const song = await updateSong(req.params.songId, req.body);
//         res.send(song);
//     }catch(error){
//         next(error);
//     }
// })

module.exports = router;
