var weatherURL = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={01f4a6424960e2db6bcb039d97252034}'
var mapURL = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={01f4a6424960e2db6bcb039d97252034}'
var APIkey = 'e7be975278d9b5bf3ea2daf0ecbfeebd';
var cityInput = document.getElementById("city");


var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput.value + "&appid=" + APIkey;

fetch(queryURL)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
  })