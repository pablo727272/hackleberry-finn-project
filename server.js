var express     = require('express')
var app         = express()
var bodyParser  = require('body-parser')
var mongoose    = require('mongoose')

app.use(express.static('./public'))

// home page route
app.get('/', function(req,res){
    res.sendFile('./html/index.html', {root: './public'})
})

// food data page route
app.get('/food-data', function(req,res){
    res.sendFile('./html/food-data.html', {root: './public'})
})

// exercise data page route
app.get('/exercise-data', function(req,res){
    res.sendFile('./html/exercise-data.html', {root: './public'})
})

// check progress page route
app.get('/check-progress', function(req,res){
    res.sendFile('./html/check-progress.html', {root: './public'})
})

// about page route
app.get('/about', function(req,res){
    res.sendFile('./html/about.html', {root: './public'})
})

// contact page route
app.get('/contact', function(req,res){
    res.sendFile('./html/contact.html', {root: './public'})
})

mongoose.connect('mongodb://localhost:27017/hackleberryCalorieCounterApp')

var userInformationSchema = mongoose.Schema({
    userId : {
        type        : String,
        required    : true,
        unique      : true
    },
    uiFirstName : {
        type        : String,
        required    : true
    },
    uiLastName : {
        type        : String,
        required    : true
    },
    uiAge : {
        type        : Number,
        required    : true
    },
    uiGender : {
        type        : String,
        required    : true
    },
    uiWeight : {
        type        : Number,
        required    : true
    },
    uiHeight : {
        type        : Number,
        required    : true
    }
})

var dailyDataEntrySchema = mongoose.Schema({
    userId : {
        type        : String,
        required    : true,
        unique      : true
    },
    ddeTimeStamp : {
        type        : Date,
        required    : true,
        unique      : true
    },
    ddeEntryDate : {
        type        : Date,
        required    : true
    },
    ddeMood : {
        type        : String
    },
    ddeFoodName : {
        type        : String
    },
    ddeFoodQuantity : {
        type        : Number
    },
    ddeFoodCalories : {
        type        : Number
    },
    ddeActiviyName : {
        type        : String
    },
    ddeActivityAmount : {
        type        : Number
    },
    ddeSleepAmount : {
        type        : Number
    }
})

var UserInformation = mongoose.model('userInformation', userInformationSchema, 'userInformation')
var DailyDataEntry = mongoose.model('dailyDataEntry', dailyDataEntrySchema, 'dailyDataEntry')

// 404 page
app.get('/404', function(req,res){
  res.sendFile('./html/404.html', {root: './public'})
})

// 404 error handling middleware
app.use(function(req, res, next){
  res.status(404)
  res.redirect('/404')
})

app.listen(8080)
