const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
const morgan = require('morgan');
const passport = require('passport')
const session = require('express-session')
//const MongoStore = require('connect-mongo')()
const passport = require('passport');
const session = require('express-session');
const connectDB = require('./config/db');
const path = require('path');


// Load Config
dotenv.config({path: './config/config.env'})

<<<<<<< HEAD
//Passport config
=======
// Passport config
>>>>>>> ed0829f4d006808b6fde6a1f26bc288323f66433
require('./config/passport')(passport)

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

// Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  }))


// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

//Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT} and running in ${process.env.NODE_ENV} mode`));