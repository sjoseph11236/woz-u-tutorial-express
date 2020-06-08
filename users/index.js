const express = require('express');
const router  = express.Router();

// GET /users
router.get('/', (req, res, next) => { 
 res.send({name: "Sayeed"});
})

module.exports = router;