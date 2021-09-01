const router = require('express').Router()
const path = require('path');

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});


// router.get("/api/notes/:id", (req, res) => {
//     res.json(notes[req.params.id])
// });
router.delete("/api/notes/:id", (req, res) => {
    const params = notes.splice(req.params.id, 1);
    updateDb();
    console.log("Deleted" + req.params.id);
})

module.exports = router;