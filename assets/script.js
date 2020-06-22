function searchsubmit() {

    // var city = document.getElementById("citysearch").value;
    // console.log(city);

    var city = "Atlanta";

    var APIKEY = "d22597ee61aff6bbcc1f2596e17825af"
    var mainqueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d22597ee61aff6bbcc1f2596e17825af";


    $.ajax({
        url: mainqueryURL,
        method: "GET"
    })
        .then(function (response) {
            // console.clear();
            var main = response.main;
            var k = main.temp;
            var tempF = Math.floor(((k - 273.15) * 1.8) + 32);
            var temperature = "Temperature: " + tempF;

            var Humidity = main.humidity;

            var wind = response.wind;

            // var weatherCity = response.weather[0];
            // var cityWeather = JSON.stringify(weatherCity);
            // $("#cityDate").text(cityWeather);

            $("#temp").text("Temperature: " + temperature);

            $("#hum").text("Humidity: " + Humidity);

            $("#WSpeed").text("Wind Speed: " + wind.speed + " MPH");

            var coord = response.coord;
            var lon = coord.lon;
            var lat = coord.lat;
            // console.log(lon, lat)
            var uvqueryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=d22597ee61aff6bbcc1f2596e17825af&lat=" + lat + "&lon=" + lon + "";

            $.ajax({
                url: uvqueryURL,
                method: "GET"
            })
                .then(function (response) {
                    console.log("UV: ", response);

                    var uvIndex = response.value;

                    $("#UV").text("UV Index: " + uvIndex);
                })


            console.log("city: ", response);
        })

    var dayqueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=d22597ee61aff6bbcc1f2596e17825af";

    $.ajax({
        url: dayqueryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log("5 day forcast: ", response);
            // I need to dig into the list array in the 5 day forcast console. but that shish is hard
            // also its 1am so ill take a break now for sleep. Ill see if I can get help in office hours.
            for (var i = 0; i < 40; i++) {
                var list = response.list[i];
                // console.log(list);
                if (list.dt_txt.indexOf("15:00:00") !== -1) {
                    console.log(list);
                    var main = list.main;
                var k = main.temp;
                var tempF = Math.floor(((k - 273.15) * 1.8) + 32);
                var temperature = "Temperature: " + tempF;

                var Humidity = main.humidity;

                var wind = response.wind;
                console.log("this is forecast temp: ", temperature)
                var colHold = $("<div>").addClass("col-sm");
                var minBox = $("<div>").addClass("mini-box");
                var pTemp = $("<p>").text(temperature);

                $("#daycast").append(colHold.append(minBox.append(pTemp)))
                }

                // var main = list.main;
                // var k = main.temp;
                // var tempF = Math.floor(((k - 273.15) * 1.8) + 32);
                // var temperature = "Temperature: " + tempF;

                // var Humidity = main.humidity;

                // var wind = response.wind;
                // console.log("this is forecast temp: ", temperature1)
            }
            // var main1 = response.list.main;
            // var k1 = main1.temp;
            // var tempF1 = Math.floor(((k1 - 273.15) * 1.8) + 32);
            // var temperature1 = "Temperature: " + tempF1;

            // var Humidity = main.humidity;

            // var wind = response.wind;
            // console.log("this is forecast temp: ", temperature1)
        })
}