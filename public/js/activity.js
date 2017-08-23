console.log('Hello world from /js/activity.js');

var getFreshData = function(){
    $.get('/activity', function(dataFromServer){
        console.log(dataFromServer)
        mainVm.activities = dataFromServer
    })
}

var mainVm = new Vue({
    el: '#appActivity',
    data : {
        adActivityName : '',
        adEntryDate : '',
        adEntryTime : '',
        adActivityAmountHours : '',
        adActivityAmountMinutes : '',
        adMood : '',
        adCaloriesOut : '',
        activities : [],
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

            $.ajax({
                url: '/activity',
                type: 'POST',
                data: JSON.stringify({
                    adActivityName: this.adActivityName,
                    adEntryDate: this.adEntryDate,
                    adEntryTime: this.adEntryTime,
                    adActivityAmountHours: this.adActivityAmountHours,
                    adActivityAmountMinutes: this.adActivityAmountMinutes,
                    adMood: this.adMood,
                    adCaloriesOut: this.adCaloriesOut,
                }),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function(dataFromServer) {
                    console.log(dataFromServer)
                    if ( dataFromServer.success ) {
                        // only clear the form after we know the submission was successful
                        mainVm.adActivityName = '',
                        mainVm.adEntryDate = '',
                        mainVm.adEntryTime = '',
                        mainVm.adActivityAmountHours = '',
                        mainVm.adActivityAmountMinutes = '',
                        mainVm.adMood = '',
                        mainVm.adCaloriesOut = '',
                        getFreshData()
                    }
                }
            });
        },
        // markDone: function(todo){
        //     console.log(todo)
        //
        //     $.ajax({
        //         url: '/todo/done',
        //         type: 'POST',
        //         data: JSON.stringify(todo),
        //         contentType: 'application/json; charset=utf-8',
        //         dataType: 'json',
        //         success: function(dataFromServer) {
        //             console.log(dataFromServer)
        //             if ( dataFromServer.success ) {
        //                 // only clear the form after we know the submission was successful
        //                 getFreshData()
        //             }
        //         }
        //     });
        // },
    //     deleteTodo: function(todo, event){
    //         // $.delete() // this function does not exist in jQuery
    //         event.stopPropagation()
    //         $.ajax({
    //             url: `/todo/${todo._id}`,
    //             type: 'DELETE',
    //
    //             // we can't attach a body to a DELETE request.
    //             // we'll need to add the data to the URL somehow
    //             // data: JSON.stringify(todo),
    //             contentType: 'application/json; charset=utf-8',
    //             dataType: 'json',
    //             success: function(dataFromServer) {
    //                 console.log(dataFromServer)
    //                 if ( dataFromServer.success ) {
    //                     // only clear the form after we know the submission was successful
    //                     getFreshData()
    //                 }
    //             }
    //         });
    //     }
    // },


    }
})
