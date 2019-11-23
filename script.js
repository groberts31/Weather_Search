
var searchBtnEl = $("#searchBtn");

$(document).ready(function () {
    var $scope = {};
    $scope.date = new Date();
    $scope.moment = moment($scope.date);
    var hr = "h";
    var time = "h:mm:ss";
    


    // DateTime Format
    $('#currentDay').html($scope.moment.format('MMMM Do h:mm:ss a'));
    
    $(searchBtnEl).click(function () {
        var inputVal = $("#inputInfo").val();
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + inputVal + "id=524901&APPID=982e2fe78532143c4bbf9987ca2a49cc",
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log("City: " + response.name);
            console.log("Temperature: " + response.main.temp);
            console.log("Humidity: " + response.main.humidity);
            console.log("Wind Speed: " + response.wind.speed);
        })
    });
})
