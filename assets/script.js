function searchsubmit() {
    var city = document.getElementById("citysearch").value;
    console.log(city);

    var APIKEY = "d22597ee61aff6bbcc1f2596e17825af"
    var mainqueryURL = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKEY;

    // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}

    $.ajax({
        url: mainqueryURL,
        method: "GET"
    })
        .then(function (response) {
            console.clear();
            var main = response.main;
            var k = main.temp;
            var tempF = Math.floor(((k - 273.15) * 1.8) + 32);
            var temperature = "Temperature: " + tempF;

            var Humidity = main.humidity;

            var wind = response.wind;

            $("#temp").text("Temperature: " + temperature);

            $("#hum").text("Humidity: " + Humidity);

            $("#WSpeed").text("Wind Speed: " + wind.speed + " MPH");



            console.log(response);
        })
}