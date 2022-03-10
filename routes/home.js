const express = require('express');
const router = express.Router();
const linksForHome = 
[ {url: 'itsligo.ie' , text : 'IT Sligo Home Page'},
{ url: 'irishtimes.ie', text : 'The Irish Times'}];


// router.get('/', function (req, res) {
//     res.render('home');
// });

router.get('/about',  (req, res) => {
    res.render('about');
});

router.get('/members',  (req, res) => {
    res.render('members')
});

router.get('/amogus',  (req, res) => {
    res.render('amogus')
});

// router.get('/',  (req, res) => {
//     res.cookie ('tracking', 'Look a cookie');
//     res.render('home');
// });

router.get('/',  (req, res) => {

    var message = "";
     
    if (req.signedCookies.tracking){
        var dateLastVisit = req.signedCookies.tracking;
        var message = "I know it.. the last time you came was " + req.signedCookies.tracking;
    }

    var currentDate = new Date();

    res.cookie ('tracking', currentDate.toUTCString(), {signed: true});
    res.render('home', {'message': message, links : linksForHome});
});

module.exports = router;