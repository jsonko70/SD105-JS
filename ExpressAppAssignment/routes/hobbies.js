var express = require('express');
var router = express.Router();

/* GET hobbies page. */
router.get('/', function (req, res, next) {
  res.render('hobbies', {
    title: 'Welcome!!',
    subTitle: 'My Hobbies',
    hobbies: 'traveling, christian music, action movies, and reading',
    color: 'green',
  });
});

module.exports = router;