function getResult(userInput) {
    var storedSearchItem;
    $('.resultContainer').html('');
    $.ajax({
        type: 'GET',
        async: true,
        url: 'https://api.nutritionix.com/v1_1/search/' + userInput + '?' +
        'fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=dff4dd40&appKey=851aa2974e40e7c1871e8f6552ad99d6',
        success: function(d) {
          storedSearchItem = d.hits;
          //hits are the individual food items in the JSON obj from the API call
          storedSearchItem.map(function(item) {
            //.map takes every value within SearchItem and passes it into the storedSearchItem function
            var x = item.fields


            $('.resultContainer').append(
              '<div class="itemBar">' +
                '<h2>' + x.item_name + '</h2>' +
                '<h3>Calories: ' + x.nf_calories + '</h3>' +
                '<h3>Serving Size: ' + x.nf_serving_size_qty + ' ' + x.nf_serving_size_unit + '</h3>' +
                '<h3>Total Fat: ' + x.nf_total_fat + '</h3>' +
              '</div>'
              //append all of this into the resultContainer tag above
            );
            });
        }
    })
}

function searchValue() {
  var formVal = document.getElementById('searchBar').value;
  getResult(formVal);
}

$(document).ready(function(){
  $('#searchForm').submit(function(e){
    e.preventDefault();
    searchValue()
    console.log('string');
    //prevents the page from reloading
  });
})
