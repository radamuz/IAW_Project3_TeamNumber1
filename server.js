const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const morgan = require('morgan');
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)


//const MongoStore = require('connect-mongo')()
const connectDB = require('./config/db');
const path = require('path');



// Load Config
dotenv.config({path: './config/config.env'})

//Passport config
require('./config/passport')(passport)


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

//express-session middleware
app.use(
    session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection })
}))

// Passsport middleware 
app.use(passport.initialize())
app.use(passport.session())

//Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
