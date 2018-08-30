var express = require('express');
var router = express.Router();
const db = require('../db/queries');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200)
  .json({
    message: "test"
  })
});

router.get('/allpetitions', db.getAllPetitions)

module.exports = router;
