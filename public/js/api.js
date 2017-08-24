console.log('hello world from /js/api.js');

$(document).ready(function(){
    var searchedFoodItems = []
    $('#searchForm').on('submit', function(event){
        event.preventDefault()
        var foodName = $('#searchBar').val()
        console.log('which food chosen?',foodName)
        // after user submits a food name/phrase, this is sent to the /nutritionix_api, then the callback runs
        $.post('/nutritionix_api', { name: foodName }).then(function(data){
            data = JSON.parse(data)
            console.log('data',data);
            // takes returned string of data from nutritionix and converts into an object
            // var food = ; // food is all of the fields objects for food name/phrase input
            console.log('food',data.hits[0].fields); // logs all of these objects from query string (in this case first hit 0:1)
            $("#foodSearchResultContainer").append(`
                <h4>Food Name:</h4>
                <p>${data.hits[0].fields.item_name}</p>
                <h4>Calories:</h4>
                <p>${data.hits[0].fields.nf_calories}</p>
                <h4>Serving Size:</h4>
                <p>${data.hits[0].fields    .nf_serving_size_unit}</p>
                `);
        })
    })
})



// this function waits for the submit button on the "searchForm" id to be clicked, then runs the searchValue function...
// $(document).ready(function(){
//     $('#searchForm').submit(function(e){
//         e.preventDefault();
//         searchValue()
//         console.log('string');
//         //prevents the page from reloading
//     });
// })

// this function takes the word typed into the search bar with the id "searchBar" then passes that word into the next function called "getResult"
// function searchValue() {
//     var formVal = document.getElementById('searchBar').value;
//     getResult(formVal);
// }

// this function takes the word typed into the input form on the food-data page, stores that as a var called storedSearchItem, then appends the div with class "resultContainer" with the data pulled from the nutritionix api call.
// function getResult(userInput) {
//     var storedSearchItem;
//     $('.resultContainer').html('');
//     $.ajax({
//         type: 'GET',
//         async: true,
//         url: 'https://api.nutritionix.com/v1_1/search/' + userInput + '?' +
//         'results=0:1&fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories&appId=dff4dd40&appKey=851aa2974e40e7c1871e8f6552ad99d6',
//         success: function(d) {
//             storedSearchItem = d.hits;
//             //hits are the individual food items in the JSON obj from the API call
//             storedSearchItem.map(function(item) {
//             //.map takes every value within SearchItem and passes it into the storedSearchItem function
//             var x = item.fields
//             //append all of this into the resultContainer tag above
//             $('.resultContainer').append(
//                 '<div class=“itemBar”>' +
//                 '<b>' + x.item_name + '</b>' +
//                 '<p>Calories: ' + x.nf_calories + '</p>' +
//                 '<p>Serving Size: ' + x.nf_serving_size_qty + '</p>' +
//                 '<p>Units: ' + x.nf_serving_size_unit + '</p>' +
//                 '</div>'
//                 );
//             });
//         }
//     })
// }
