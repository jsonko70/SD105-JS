var express = require('express');
var router = express.Router();

/* GET family page. */
router.get('/', function (req, res, next) {
  res.render('family', {
    title: 'Welcome!!',
    subTitle: 'My Family',
    wife: 'Eva Sonko',
    firstChild: 'Laura Sonko', dob1: '08/28/2002',
    secondChild: 'Ethan Sonko', dob2: '07/06/2006',
    thirdChild: 'Jeremiah Sonko', dob3: '01/28/2009',
    fourthChild: 'Enock Sonko', dob4: '05/13/2014'
  });
});

module.exports = router;