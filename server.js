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

// Logging
if(process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'))
}

// Static folder
app.use(express.static(path.join(__dirname, 'public')))


const PORT = process.env.PORT || 5000;



// Handlebars
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

//Routes
app.use('/', require('./routes/index'))

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT} and running in ${process.env.NODE_ENV} mode`));