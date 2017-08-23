var express     = require('express')
var app         = express()
var bodyParser  = require('body-parser')

var UserInformationModel = require('./db')
var FoodDataEntryModel = require('./db')
var ActivityDataEntryModel = require('./db')
app.use(express.static('./public'))

// API Routes
// Create User Information Doc
// app.post('/userInformation', function(req,res){
//     var newUserInfo = new UserInformationModel({
//         userId : req.
//     })
// })
//
// // CRUD database processes
// // (C)reate exercise/rest items
// app.post('/todo', function(req, res){
//     var newTodo = new TodoModel({
//         text: req.body.todoText
//     })
//     newTodo.save(function(err){
//         if (err) { next(err) }
//         else {
//             res.send({success:'success!'})
//         }
//     })
// })

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
    res.status(500).send("oops")
})

app.listen(8080)
