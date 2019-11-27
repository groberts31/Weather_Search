// Variable for search button
var searchBtnEl = $("#searchBtn");

// Function for date and time and to start functions listed inside of it
$(document).ready(function () {
    var $scope = {};
    $scope.date = new Date();
    $scope.moment = moment($scope.date);
    var hr = "h";
    var time = "h:mm:ss";



    // DateTime Format
    $('#currentDay').html($scope.moment.format('MMMM Do h:mm:ss a'));

    // Function to run once button clicked
    $(searchBtnEl).click(function () {
        event.preventDefault();
        var currentTime = moment().format('MMMM Do');
        var inputVal = $("#inputInfo").val();
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + inputVal + "&id=524901&APPID=982e2fe78532143c4bbf9987ca2a49cc",
            method: "GET"
        }).then(function (response) {
            // Logging info given from api after searching
            console.log(response);
            console.log("City: " + response.name);
            console.log("Temperature: " + response.main.temp);
            console.log("Humidity: " + response.main.humidity);
            console.log("Wind Speed: " + response.wind.speed);
            console.log(response.weather[0].main);
            // Converting temp to F
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            $(".tempF").text("Temperature (F) " + tempF);

            // Variable for new div
            var weatherDiv = $("<div class='weather'>");

            // Appending items that were logged into new div
            var name = response.name;
            var pOne = $("<h1>").text("City Name: " + name);
            weatherDiv.append(pOne);

            var pFive = $("<p>").text(currentTime);
            weatherDiv.append(pFive);

            var temp = response.main.temp;
            var pTwo = $("<p>").text("Temperature (F): " + tempF);
            weatherDiv.append(pTwo);

            var humidity = response.main.humidity;
            var pThree = $("<p>").text("Humidity: " + humidity);
            weatherDiv.append(pThree);

            var wind = response.wind.speed;
            var pFour = $("<p>").text("Wind Speed: " + wind);
            weatherDiv.append(pFour);

            // var imgIcon = response.weather[0].main;
            // var image = $("<img>").attr("src", imgIcon);
            // if (imgIcon == "Rain") {
            //     weatherDiv.append(assets/rainy.png);
            // }
            // if (imgIcon == "Clear") {
            //     weatherDiv.append(assets/clear.png);
            // }
            // if (imgIcon == "Clouds") {
            //     weatherDiv.append(assets/cloudy.png);
            // }
            // if (imgIcon == "Snow") {
            //     weatherDiv.append(assets/snowy.png);
            // }
            // if (imgIcon == "Winds") {
            //     weatherDiv.append(assets/windy.png);
            // }
            // else {
            //     weatherDiv.append(assets/sunny.png);
            // }

            // Appending new div to Jumbotron
            $("#jumbo3").prepend(weatherDiv);
        })
    });
})
