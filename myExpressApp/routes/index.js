var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let date = new Date;
  res.render('index', {
    title: 'Express!!',
    name: 'Julius Sonko',
    address: '13608 Koen Ln',
    color: 'Green',
    members: 'six',
    dob: '10/11/1970',
    date: date,
    time: date.getHours() + ":" +
      date.getMinutes() + ":" +
      date.getSeconds()
  });
});

module.exports = router;