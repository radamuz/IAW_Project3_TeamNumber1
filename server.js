const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
const morgan = require('morgan');
const passport = require('passport')
const session = require('express-session')
//const MongoStore = require('connect-mongo')()
//const passport = require('passport');
//const session = require('express-session');
const connectDB = require('./config/db');
const path = require('path');


// Load Config
dotenv.config({path: './config/config.env'})

// Passport config
require('./config/passport')(passport)

//Connect to the MongoDb
connectDB()

const app = express();

//Body parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

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

// Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  }))


// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())



// Set global var
app.use(function (req, res, next) {
  res.locals.user = req.user || null
  next()
})

//Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/restaurants', require('./routes/restaurants'))

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT} and running in ${process.env.NODE_ENV} mode`));