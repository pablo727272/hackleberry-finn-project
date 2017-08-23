console.log('Hello world from /js/food.js');

var getFreshData = function(){
    $.get('/fooditem', function(dataFromServer){
        console.log(dataFromServer)
        mainVm.foodItems = dataFromServer
    })
}

var mainVm = new Vue({
    el: '#appFoodItem',
    data : {
        fdFoodName : '',
        fdFoodQuantity : '',
        fdEntryDate : '',
        fdEntryTime : '',
        fdMood : '',
        fdCaloriesIn : '',
        foodItems : [],
    },
    created : function(){
        getFreshData()
    },
    methods : {
        createFoodItem : function(event){
            event.preventDefault()
            // inside of a vue method, we can use `this` to access any data or method on that VM.
            // always send an object when using AJAX
            console.log('food name',this.fdFoodName)
            console.log('food quantity',this.fdFoodQuantity)
            console.log('food date',this.fdEntryDate)
            console.log('food time',this.fdEntryTime)
            console.log('food mood',this.fdMood)
            console.log('food calories in',this.fdCaloriesIn)

            $.ajax({
                url: '/fooditem',
                type: 'POST',
                data: JSON.stringify({
                    fdFoodName: this.fdFoodName,
                    fdFoodQuantity: this.fdFoodQuantity,
                    fdEntryDate: this.fdEntryDate,
                    fdEntryTime: this.fdEntryTime,
                    fdMood: this.fdMood,
                    fdCaloriesIn: this.fdCaloriesIn,
                }),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function(dataFromServer) {
                    console.log(dataFromServer)
                    if ( dataFromServer.success ) {
                        // only clear the form after we know the submission was successful
                        mainVm.fdFoodName = '',
                        mainVm.fdFoodQuantity = '',
                        mainVm.fdEntryDate = '',
                        mainVm.fdEntryTime = '',
                        mainVm.fdMood = '',
                        mainVm.fdCaloriesIn = '',
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
