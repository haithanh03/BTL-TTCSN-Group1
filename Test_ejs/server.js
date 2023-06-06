const express = require('express')
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('./src/config/db.config.js');
const logger = require('morgan');
const router = require('./src/routers/index')
const mongoose = require("mongoose");

app.use(express.static('public'));

// Use dotenv
require('dotenv').config()

// Declare and init value for port
const PORT = 3000 || process.env.PORT;

// Use to log request from client side 
app.use(logger('dev'))

// Use express.json()
app.use(express.json());

// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//Use static file 
app.use(express.static(__dirname + '/public'));
console.log(__dirname + '/public')

// Use to read from form submit 
app.use(bodyParser.urlencoded({ extended: true }))

//router 
// const router = require('./src/routers/index')
app.get('/Home', (req, res) => {
    res.render('Home');
  });


app.get('/TTH', (req, res) => {
    res.render('TTH');
});

app.get('/Tintuc', (req, res) => {
    res.render('Tintuc');
});
// Set up session store in mongoDB 



//connect to mongodb
/*db.connect();
const main = async () => {
    await mongoose.connect('mongodb://localhost:27017/Data');
}
main()*/
// process.env.MONGO_URI
// mongodb+srv://Calendar:zxcvbnm1106@atlascluster.vifnygm.mongodb.net/?retryWrites=true&w=majority
//mongodb://localhost:27017/myapp
const connectDB = async() => {
    const conn = mongoose.connect("mongodb://127.0.0.1:27017/Expressjs_Base", {
        useNewUrlParser: true,
        retryWrites: false,
        useUnifiedTopology: true
    });
    console.log(`MongoDB connected`);
};

connectDB();
//Use router 
router(app);

app.listen(PORT, () => {
    console.log('listening on PORT' + PORT)
});