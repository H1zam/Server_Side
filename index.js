const express = require('express')
const app = express()
const port = 3000
const home = require('./routes/home')
const staff = require('./routes/staff')
const cookieParser = require('cookie-parser');
const { newsMiddleware } = require('./lib/middleware');

app.use(express.static('public'));

// set up handlebars view engine
var handlebars = require('express-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(cookieParser("Hicham is great"));
app.use(newsMiddleware)
app.use('/', home);
app.use('/', staff);
app.get('/personlist', (req,res) =>
    res.render('personlist', { personlist: data }))

// 
// app.get('/',  (req, res) => {
//     res.type('text/plain');
//     res.send('Covid Holiday Tours');
// });

// custom 404 page
app.use( (req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found uwu');
});

// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))