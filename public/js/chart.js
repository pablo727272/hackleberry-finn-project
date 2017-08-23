console.log('Hello world from /js/chart.js');

// line chart...  mood goes from (0) very unhappy to (100)... (25), (50), (75)

new Chart(document.getElementById("line-chart-today"), {
  type: 'line',
  data: {
    labels: ['1 AM','2 AM','3 AM','4 AM','5 AM','6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM','9 PM','10 PM','11 PM','12 AM'],
    datasets: [{
        data: [0,0,0,0,0,0,395,0,0,0,512,0,0,0,80,120,666,0,0,100,0,0,0,0],
        label: "Calories",
        borderColor: "red",
        fill: false,
      }, {
        data: [50,50,50,50,50,50,25,50,50,50,75,50,50,50,50,50,100,50,50,50,50,50,50,50],
        label: "Mood",
        borderColor: "green",
        fill: false,
      },
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Calories (red) and Mood (green) in 24 Hour Period'
    }
  }
});

new Chart(document.getElementById("line-chart-this-week"), {
  type: 'line',
  data: {
    labels: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    datasets: [{
        // get total calories for 7 days
        data: [1680,2300,1972,1911,1768,2040,1862],
        label: "Calories",
        borderColor: "red",
        fill: true,
      }, {
        // get average mood (x10 for better display) for 7 days
        data: [600.2,500.3,480.7,550.5,660.6,780.6,720.2],
        label: "Mood",
        borderColor: "green",
        fill: true,
      },
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Calories (red) and Mood (green) in One Week Period'
    }
  }
});

function dailyCalories (){

}
