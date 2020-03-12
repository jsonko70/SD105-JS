var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let date = new Date;
  res.render('index', {
    title: 'Welcome!!',
    name: 'Julius Sonko',
    date: date
  });
});

module.exports = router;