var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/hackleberryCalorieCounterApp')

var userInformationSchema = mongoose.Schema({
    userId : {
        type        : Number,
        required    : true,
        unique      : true
    },
    uiName : {
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

var foodDataEntrySchema = mongoose.Schema({
    userId : {
        type        : Number,
        required    : true,
        unique      : true
    },
    fdEntryDate : {
        type        : Date,
        required    : true
    },
    fdEntryTime : {
        type        : String,
        required    : true
    },
    fdMood : {
        type        : String
    },
    fdFoodName : {
        type        : String
    },
    fdFoodQuantity : {
        type        : Number
    },
    fdFoodCalories : {
        type        : Number
    },
})

var activityDataEntrySchema = mongoose.Schema({
    userId : {
        type        : Number,
        required    : true,
        unique      : true
    },
    adEntryDate : {
        type        : Date,
        required    : true
    },
    adEntryTime : {
        type        : String,
        required    : true
    },
    adMood : {
        type        : String
    },
    adActivityName : {
        type        : String
    },
    adActivityAmount : {
        type        : Number
    },
})

var UserInformationModel = mongoose.model('userInformation', userInformationSchema, 'userInformation')
var FoodDataEntryModel = mongoose.model('foodDataEntry', foodDataEntrySchema, 'foodDataEntry')
var AtivityDataEntryModel = mongoose.model('activityDataEntry', activityDataEntrySchema, 'activityDataEntry')

module.exports = UserInformationModel
module.exports = FoodDataEntryModel
module.exports = ActivityDataEntryModel
