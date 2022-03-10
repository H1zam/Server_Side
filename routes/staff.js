const express = require('express');
const router = express.Router();

var data = { "Gold" : { "name": "Gold",
            "dob": "18/12/2002",
            "txt": "It's me !",
            "imageurl": "/images/Gold.jpg",
            "hobbies": ["Gaming", "Reading", "Volleyball"]},

            "Nbleo" : { "name": "Nbleo",
            "dob": "30/08/2003",
            "txt": "He is one of those 'Breton', better to stay away from him, just in case",
            "imageurl": "/images/Nbleo.jpg",
            "hobbies": ["Gaming", "Watching anime/Reading", "Volleyball"]},

            "Benacer" : { "name" : "Benacer",
            "dob": "14/09/2002",
            "txt": "Benacer is actually his firstname, but we consider Benacer and Lyes to be two different guys, you know it is Lyes when he's rationnal, but when you see him getting a lil bit crazier... be careful of Benacer",
            "imageurl": "/images/Benacer.jpg",
            "hobbies": ["Sports", "Gaming", "Laughing"]},
        
            "Seb" : { "name" : "Seb",
            "dob": "31/05/2002",
            "txt": "A game addict, always smoking but he's good with lux so np (a smokingly good friend)",
            "imageurl": "/images/Seb.jpg",
            "hobbies": ["Gaming", "Smoking", "Partying"]}};
      
router.get('/:name', (req, res) => {
    var name = req.params.name;
    res.render('person', { person: data[name] })
})

router.get('/', (req, res) =>
    res.render('listing', { personlist: data }));

module.exports = router;