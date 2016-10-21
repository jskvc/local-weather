$(document).ready(function() {
  var long;
  var lat;
  var loc = 'http://ipinfo.io/json';
  var coordinate; 
   $.getJSON(loc, function(data) {
     var coordinates = data.loc;
     coordinate = coordinates.split(",");
     var lat=Math.round(coordinate[0]*100)/100;
     var long=Math.round(coordinate[1]*100)/100;
  
     var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=594cb8737fe2a9969da04021dc041cb2';
 //alert(api);
 
  $.getJSON(api, function(datas) {
    var temperature = datas.main.temp;
    var tempF = temperature*9/5-459.67;
    var tempC = temperature-273;
    var city = datas.name;
    var wind = datas.wind.speed;
    var weatherType = datas.weather[0].description;
    var icon = datas.weather[0].icon;
    $("#icon").html("<img src='http://openweathermap.org/img/w/" + datas.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    $("#city").text(city);
    $("#weatherType").text(weatherType);
     $("#temp").text(Math.round(tempC) + " 	\u2103");
    
    $("#fahrenheit").click(function() {
     $("#temp").text(Math.round(tempF) +"	\u2109");
      });  
    $("#celsius").click(function() {
     $("#temp").text(Math.round(tempC) + "  	\u2103");
      });  
     });
   });
});