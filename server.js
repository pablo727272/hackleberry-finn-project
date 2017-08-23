var express     = require('express')
var app         = express()
var bodyParser  = require('body-parser')

var db = require('./db')
// var UserInformationModel = require('UserInformationModel')
// var FoodDataEntryModel = require('FoodDataEntryModel')
// var ActivityDataEntryModel = require('ActivityDataEntryModel')
app.use(express.static('./public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// API Routes
// Read userInformation Doc
app.get('/userInformation', function(req, res){
    db.UserInformationModel.findOne({"userId": req.query.userId},function(err,data){
        if(err){
            // console.log("ERROR!",err)
            next(err)}
        else{
            // console.log("DATA!",data)
            res.send(data)
        }
    })
})

//
// (C)reate todo items
app.post('/activity', function(req, res, next){
    console.log(req.body);
    var newActivity = new ActivityDataEntryModel({
        adActivityName: req.body.adActivityName,
        adEntryDate: req.body.adEntryDate,
        adEntryTime: req.body.adEntryTime,
        adActivityAmountHours: req.body.adActivityAmountHours,
        adActivityAmountMinutes: req.body.adActivityAmountMinutes,
        adMood: req.body.adMood,
    })
    newActivity.save(function(err){
        if (err) { next(err) }
        else {
            res.send({success:'success!'})
        }
    })
})

// (R)ead todo items
app.get('/activity', function(req, res, next){
    ActivityDataEntryModel.find({}, function(err, data){
        if (err) { next(err) }
        else {
            res.send(data)
        }
    })
})

//////////// API Routes end //////////////////

// These routes send HTML to clients
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

// // contact page route  CONTACT FORM VIA SMTP LOOKS TOO DEEP FOR THIS PROJECT
// app.get('/contact', function(req,res){
//     res.sendFile('./html/contact.html', {root: './public'})
// })

// api test area route
app.get('/api-test', function(req,res){
    res.sendFile('./html/api-test.html', {root: './public'})
})

// 404 page
app.get('/404', function(req,res){
    res.sendFile('./html/404.html', {root: './public'})
})

//////////// HTML Routes end //////////////////

// 404 error handling middleware
app.use(function(req, res, next){
    res.status(404)
    res.redirect('/404')
})

// if we call `next(err)` in our code above, it'll jump us down to right here.
app.use(function(err, req, res, next){
    console.log(err);
    res.status(500).send("oops")
})

app.listen(8080)
