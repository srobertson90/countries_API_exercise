var map;

var populateMarkers = function(country){
  map.addMarker(country);
}

var requestComplete = function(){
  console.log(this.status);
  console.log("Request complete");
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);
  country = countries[0];
  console.log(country);
  populateMarkers(country);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var app = function(){
  var container = document.getElementById('map');
  map = new Map(container, {lat:0, lng:0}, 1);
  var url = "http://localhost:5000";
  console.log("Before request");
  makeRequest(url, requestComplete);
  console.log("After Request");
}

window.onload = app;