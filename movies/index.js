const express = require("express");
const router = express.Router();


// GET /movies
router.get('/', (req, res, next) => {
  res.send("here at movies");
})




module.exports = router; 