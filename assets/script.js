var weatherForm = document.querySelector('#weather-form')
var APIkey = 'e7be975278d9b5bf3ea2daf0ecbfeebd';
var cityInput = document.getElementById("city");
var currentWeather = document.querySelector('#current');
var day1 = document.querySelector('#day-1');
var day2 = document.querySelector('#day-2');
var day3 = document.querySelector('#day-3');
var day4 = document.querySelector('#day-4');
var day5 = document.querySelector('#day-5');


var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var city = cityInput.value.trim();
  
    if (city) {
      getWeatherForecast(city);
      cityInput.value = '';
    }
}

function getWeatherForecast(){
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput.value + "&appid=" + APIkey + '&units=imperial';
fetch(queryURL)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)

    var currentTemp = document.createElement('h3');
    var icon = document.createElement('img');
    var temp = document.createElement('li');
    var condition = document.createElement('li');
    var humidity = document.createElement('li');
    var latitude = data.coord.lat;
    var longitude = data.coord.lon;
    
    currentTemp.textContent = data.name
    icon.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
    temp.textContent = 'Current Temp: ' + data.main.temp + ' F';
    condition.textContent = 'Weather: ' + data.weather[0].main;
    humidity.textContent = 'Humidity: ' + data.main.humidity + '%';

    currentWeather.append(currentTemp);
    currentWeather.append(icon);
    currentWeather.append(temp);
    currentWeather.append(condition);
    currentWeather.append(humidity);
    
    var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + APIkey + '&units=imperial';

    fetch(forecastURL)
    .then(function (response) {
        return response.json();
     })
     .then(function (data) {
        console.log(data)

        var time1 = document.createElement('h3');
        var icon1 = document.createElement('img');
        var temp1 = document.createElement('li');
        var condition1 = document.createElement('li');
        var humidity1 = document.createElement('li');

        time1.textContent = 'Local Time: ' + data.list[6].dt_txt;
        icon1.src = 'https://openweathermap.org/img/wn/' + data.list[6].weather[0].icon + '@2x.png'; 
        temp1.textContent = 'Temperature: ' + data.list[6].main.temp + ' F';
        condition1.textContent = 'Weather: ' + data.list[6].weather[0].description;
        humidity1.textContent = 'Humidity: ' + data.list[6].main.humidity + '%';

        day1.append(time1);
        day1.append(icon1);
        day1.append(temp1);
        day1.append(condition1);
        day1.append(humidity1);

        //day 2
        var time2 = document.createElement('h3');
        var icon2 = document.createElement('img');
        var temp2 = document.createElement('li');
        var condition2 = document.createElement('li');
        var humidity2 = document.createElement('li');

        time2.textContent = 'Local Time: ' + data.list[14].dt_txt;
        icon2.src = 'https://openweathermap.org/img/wn/' + data.list[14].weather[0].icon + '@2x.png'; 
        temp2.textContent = 'Temperature: ' + data.list[14].main.temp + ' F';
        condition2.textContent = 'Weather: ' + data.list[14].weather[0].description;
        humidity2.textContent = 'Humidity: ' + data.list[14].main.humidity + '%';

        day2.append(time2);
        day2.append(icon2);
        day2.append(temp2);
        day2.append(condition2);
        day2.append(humidity2);

        //day 3
        var time3 = document.createElement('h3');
        var icon3 = document.createElement('img');
        var temp3 = document.createElement('li');
        var condition3 = document.createElement('li');
        var humidity3 = document.createElement('li');

        time3.textContent = 'Local Time: ' + data.list[22].dt_txt;
        icon3.src = 'https://openweathermap.org/img/wn/' + data.list[22].weather[0].icon + '@2x.png'; 
        temp3.textContent = 'Temperature: ' + data.list[22].main.temp + ' F';
        condition3.textContent = 'Weather: ' + data.list[22].weather[0].description;
        humidity3.textContent = 'Humidity: ' + data.list[22].main.humidity + '%';

        day3.append(time3);
        day3.append(icon3);
        day3.append(temp3);
        day3.append(condition3);
        day3.append(humidity3);

        //day 4
        var time4 = document.createElement('h3');
        var icon4 = document.createElement('img');
        var temp4 = document.createElement('li');
        var condition4 = document.createElement('li');
        var humidity4 = document.createElement('li');

        time4.textContent = 'Local Time: ' + data.list[30].dt_txt;
        icon4.src = 'https://openweathermap.org/img/wn/' + data.list[30].weather[0].icon + '@2x.png'; 
        temp4.textContent = 'Temperature: ' + data.list[30].main.temp + ' F';
        condition4.textContent = 'Weather: ' + data.list[30].weather[0].description;
        humidity4.textContent = 'Humidity: ' + data.list[30].main.humidity + '%';

        day4.append(time4);
        day4.append(icon4);
        day4.append(temp4);
        day4.append(condition4);
        day4.append(humidity4);

        //day 5
        var time5 = document.createElement('h3');
        var icon5 = document.createElement('img');
        var temp5 = document.createElement('li');
        var condition5 = document.createElement('li');
        var humidity5 = document.createElement('li');

        time5.textContent = 'Local Time: ' + data.list[38].dt_txt;
        icon5.src = 'https://openweathermap.org/img/wn/' + data.list[38].weather[0].icon + '@2x.png'; 
        temp5.textContent = 'Temperature: ' + data.list[38].main.temp + ' F';
        condition5.textContent = 'Weather: ' + data.list[38].weather[0].description;
        humidity5.textContent = 'Humidity: ' + data.list[38].main.humidity + '%';

        day5.append(time5);
        day5.append(icon5);
        day5.append(temp5);
        day5.append(condition5);
        day5.append(humidity5);

        })
    });
    }

weatherForm.addEventListener('submit', formSubmitHandler);
