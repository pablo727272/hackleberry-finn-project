var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/hackleberryCalorieCounterApp')

var userInformationSchema = mongoose.Schema({
    userId : {
        type        : String,
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

var UserInformationModel = mongoose.model('userInformation', userInformationSchema, 'userInformation')
var DailyDataEntryModel = mongoose.model('dailyDataEntry', dailyDataEntrySchema, 'dailyDataEntry')

module.exports = UserInformationModel
module.exports = DailyDataEntryModel