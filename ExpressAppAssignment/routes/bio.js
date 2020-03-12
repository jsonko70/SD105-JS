var express = require('express');
var router = express.Router();

/* GET bio page. */
router.get('/', function (req, res, next) {
  res.render('bio', {
    title: 'Welcome!!',
    subTitle: 'My Bio',
    dob: '10/11/1970',
    address: '13608 Koen Ln, Fort Worth, TX 76155',
    pob: 'Kampala, Uganda',
  });
});

module.exports = router;