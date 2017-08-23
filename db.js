var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/hackleberryCalorieCounterApp')

var userInformationSchema = mongoose.Schema({
    userId : {
        type        : Number,
        required    : true,
        unique      : true,
    },
    uiName : {
        type        : String,
        required    : true,
    },
    uiAge : {
        type        : Number,
    },
    uiGender : {
        type        : String,
    },
    uiWeight : {
        type        : Number,
    },
    uiHeight : {
        type        : Number,
    }
})

var foodDataEntrySchema = mongoose.Schema({
    fdEntryDate : {
        type        : Date,
        required    : true,
    },
    fdEntryTime : {
        type        : String,
        required    : true,
    },
    fdMood : {
        type        : String,
        required    : true,
    },
    fdFoodName : {
        type        : String,
        required    : true,
    },
    fdFoodQuantity : {
        type        : Number,
        required    : true,
    },
    fdFoodCalories : {
        type        : Number,
        required    : true,
    },
})

var activityDataEntrySchema = mongoose.Schema({
    adActivityName : {
        type        : String,
        required    : true,
    },
    adEntryDate : {
        type        : Date,
        required    : true,
    },
    adEntryTime : {
        type        : String,
        required    : true,
    },
    adActivityAmountHours : {
        type        : Number,
        required    : true,
    },
    adActivityAmountMinutes : {
        type        : Number,
        required    : true,
    },
    adMood : {
        type        : String,
        required    : true,
    },
})

var UserInformationModel = mongoose.model('userInformation', userInformationSchema, 'userInformation')
var FoodDataEntryModel = mongoose.model('foodDataEntry', foodDataEntrySchema, 'foodDataEntry')
var ActivityDataEntryModel = mongoose.model('activityDataEntry', activityDataEntrySchema, 'activityDataEntry')

module.exports = {
    UserInformationModel: UserInformationModel,
    FoodDataEntryModel: FoodDataEntryModel,
    ActivityDataEntryModel: ActivityDataEntryModel
}