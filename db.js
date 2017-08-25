var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/hackleberryCalorieCounterApp')

var userInformationSchema = mongoose.Schema({
    userId: {
        type: Number,
        required: true,
        unique: true,
    },
    uiName: {
        type: String,
    },
    uiAge: {
        type: Number,
    },
    uiGender: {
        type: String,
    },
    uiWeight: {
        type: Number,
    },
    uiHeightF: {
        type: Number,
    },
    uiHeightI: {
        type: Number
        }
    })

var foodDataEntrySchema = mongoose.Schema({
    fdFoodName: {
        type: String,
        required: false,
    },
<<<<<<< HEAD
    fdBrandName : {
        type        : String,
        required    : false,
    },
    fdFoodQuantity : {
        type        : Number,
        required    : false,
=======
    fdFoodQuantity: {
        type: Number,
        required: false,
>>>>>>> d6f846105a8275bb1156609f88d915bbef61dc30
    },
    fdEntryDate: {
        type: Date,
        required: false,
    },
    fdEntryTime: {
        type: String,
        required: false,
    },
    fdMood: {
        type: String,
        required: false,
    },
    fdCaloriesIn: {
        type: Number,
        required: false,
    },
})

var activityDataEntrySchema = mongoose.Schema({
    adActivityName: {
        type: String,
        required: false,
    },
    adEntryDate: {
        type: Date,
        required: false,
    },
    adEntryTime: {
        type: String,
        required: false,
    },
    adActivityAmountHours: {
        type: Number,
        required: false,
    },
    adActivityAmountMinutes: {
        type: Number,
        required: false,
    },
    adMood: {
        type: String,
        required: false,
    },
    adCaloriesOut: {
        type: Number,
        required: false,
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
