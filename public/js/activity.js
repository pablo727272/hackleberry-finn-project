console.log('Hello world from /js/activity.js');

var getFreshData = function(){
    $.get('/activity', function(dataFromServer){
        console.log(dataFromServer)
        mainActivityVm.activities = dataFromServer
    })
}

var mainActivityVm = new Vue({
    el: '#appActivity',
    data : {
        adActivityName : '',
        adEntryDate : '',
        // adEntryDate : new Date(),
        adEntryTime : '',
        adActivityAmountHours : '',
        adActivityAmountMinutes : '',
        adMood : '',
        adCaloriesOut : '',
        activities : [],
        burnRates : {
            'Running/Jogging' : 10,
            'Weightlifting' : 4,
            'Walking' : 7,
            'Cycling/Mountain Biking' : 13,
            'Sleeping/Napping' : 1
        }
    },
    created : function(){
        getFreshData()
    },
    methods : {
        createActivity : function(event){
            event.preventDefault()
            // inside of a vue method, we can use `this` to access any data or method on that VM.
            // always send an object when using AJAX
            console.log('activity name',this.adActivityName)
            console.log('activity date',this.adEntryDate)
            console.log('activity time',this.adEntryTime)
            console.log('activity hours',this.adActivityAmountHours)
            console.log('activity minutes',this.adActivityAmountMinutes)
            console.log('activity mood',this.adMood)
            console.log('activity calories out',this.adCaloriesOut)
            // console.log(typeof this.adActivityAmountMinutes);
            // console.log(typeof this.adActivityAmountHours);
            // set totalMinutes equal to the minutes input by the user
            var totalMinutes = +this.adActivityAmountMinutes
            console.log('total minutes just minutes',totalMinutes)
            // convert totalMinutes to Number using + and set equal to the minutes input by the user added to the hours input * 60
            totalMinutes += +this.adActivityAmountHours * 60
            console.log('total minutes + hours x 60',totalMinutes)
            // set totalMinutes equal to the totalMinutes * by chosen activity burnRates
            totalMinutes *= this.burnRates[this.adActivityName]
            console.log('total minutes x activity chosen',totalMinutes);

            $.ajax({
                url: '/activity',
                type: 'POST',
                data: JSON.stringify({
                    adActivityName: this.adActivityName,
                    adEntryDate: this.adEntryDate,
                    // adEntryDate: new Date(),
                    adEntryTime: this.adEntryTime,
                    adActivityAmountHours: this.adActivityAmountHours,
                    adActivityAmountMinutes: this.adActivityAmountMinutes,
                    adMood: this.adMood,
                    adCaloriesOut: totalMinutes,
                }),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function(dataFromServer) {
                    console.log(dataFromServer)
                    if ( dataFromServer.success ) {
                        // only clear the form after we know the submission was successful
                        getFreshData()
                    }
                }
            });
            // after ajax request, clear out the form fields in the DOM
            this.adActivityName = ''
            this.adEntryDate = ''
            this.adEntryTime = ''
            this.adActivityAmountHours = ''
            this.adActivityAmountMinutes = ''
            this.adMood = ''
        }
    }
})
