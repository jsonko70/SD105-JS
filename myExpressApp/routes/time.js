var express = require('express'); //this and the next line of code are always required
var router = express.Router();

router.get('/now', function (req, res, next) { //req: request; res: respond; next (this is optional): pass it on
    res.render('time', { // respond to the browser request by rendeing the "time" page
        title: 'Current Time:',
        currentTime: new Date
    });
});

module.exports = router;