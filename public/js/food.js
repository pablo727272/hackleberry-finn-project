console.log('Hello world from /js/food.js')

var getFreshData = function(){
    $.get('/fooditem', function(dataFromServer){
        console.log(dataFromServer)
        for (var i=0; i<dataFromServer.length; i++) {
            dataFromServer[i].fdEntryDate = new Date(dataFromServer[i].fdEntryDate)
        }
        mainFoodVm.foodItems = dataFromServer
    })
}

var mainFoodVm = new Vue({
    el: '#appFoodItem',
    data : {
        fdFoodName : '',
        fdBrandName : '',
        fdFoodQuantity : '',
        fdEntryDate : '',
        // fdEntryDate : new Date(),
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
            console.log('food brand',this.fdBrandName);
            console.log('food quantity',this.fdFoodQuantity)
            console.log('food date',this.fdEntryDate)
            console.log('food time',this.fdEntryTime)
            console.log('food mood',this.fdMood)
            console.log('food calories in',this.fdCaloriesIn)
            var totalCalories = +this.fdFoodQuantity * +this.fdCaloriesIn
            console.log('total calories should be servings * calories',totalCalories);

            $.ajax({
                url: '/fooditem',
                type: 'POST',
                data: JSON.stringify({
                    fdFoodName: this.fdFoodName,
                    fdBrandName: this.fdBrandName,
                    fdFoodQuantity: this.fdFoodQuantity,
                    fdEntryDate: this.fdEntryDate,
                    // fdEntryDate: new Date(),
                    fdEntryTime: this.fdEntryTime,
                    fdMood: this.fdMood,
                    fdCaloriesIn: totalCalories,
                }),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function(dataFromServer) {
                    // var that = this;
                    console.log(dataFromServer)
                    if ( dataFromServer.success ) {
                        // only clear the form after we know the submission was successful
                        getFreshData()
                    }
                }
            })
            // after ajax request, clear out the form fields in the DOM
            this.fdFoodName = ''
            this.fdBrandName = ''
            this.fdFoodQuantity = ''
            this.fdEntryDate = ''
            this.fdEntryTime = ''
            this.fdMood = ''
            this.fdCaloriesIn = ''
            console.log('doing the thing')
        }
    }
})
