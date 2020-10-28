require('dotenv').config()

const chalk = require('chalk');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//routes
const bonjourRoutes = require('./routes/bonjourRoutes');


app.set('views', 'views');
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded( {extended : true} ))

app.use('/bonjour', bonjourRoutes);

const PORT = process.env.PORT | 8000;

app.listen(PORT, () => {
    console.log(`Listening on port ${chalk.blue(PORT)}`);
});