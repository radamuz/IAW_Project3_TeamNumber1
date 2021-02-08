const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
const morgan = require('morgan');
//const MongoStore = require('connect-mongo')()
const connectDB = require('./config/db');
const path = require('path');


// Load Config
dotenv.config({path: './config/config.env'})

//Connect to the MongoDb
connectDB()

const app = express();

if(process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'))
}


app.use(express.static(path.join(__dirname, 'public')))
/*app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});*/

const PORT = process.env.PORT || 5000;



// Handlebars
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

//Routes
app.use('/', require('./routes/index'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));