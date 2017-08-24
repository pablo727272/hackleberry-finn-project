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
    fdFoodName : {
        type        : String,
        required    : false,
    },
    fdFoodQuantity : {
        type        : Number,
        required    : false,
    },
    fdEntryDate : {
        type        : Date,
        required    : false,
    },
    fdEntryTime : {
        type        : String,
        required    : false,
    },
    fdMood : {
        type        : String,
        required    : false,
    },
    fdCaloriesIn : {
        type        : Number,
        required    : false,
    },
})

var activityDataEntrySchema = mongoose.Schema({
    adActivityName : {
        type        : String,
        required    : false,
    },
    adEntryDate : {
        type        : Date,
        required    : false,
    },
    adEntryTime : {
        type        : String,
        required    : false,
    },
    adActivityAmountHours : {
        type        : Number,
        required    : false,
    },
    adActivityAmountMinutes : {
        type        : Number,
        required    : false,
    },
    adMood : {
        type        : String,
        required    : false,
    },
    adCaloriesOut : {
        type        : Number,
        required    : false,
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
