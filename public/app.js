var initialize = function(){
  var center = {lat: 51.491511, lng: -0.185051 };
  var markerTwo = {lat: 51.455936, lng: -0.341516 };
  var centerContentString = "Stamford Bridge";
  var twikenhamContentString = "Twikenham";


  var mapDiv = document.querySelector('#main-map');

  var mainMap = new MapWrapper(mapDiv, center, 10);

  mainMap.addMarker(center, centerContentString);
  mainMap.addMarker(markerTwo, twikenhamContentString);
  mainMap.addClickEvent();

  var handleButtonClick = function(){  
    mainMap.googleMap.setCenter({lat: 41.878876, lng: -87.635915});
  }

  var button = document.querySelector('#chicago');
  button.onclick = handleButtonClick;


  var geolocate = function() {
    navigator.geolocation.getCurrentPosition(function (position) {

      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      mainMap.googleMap.setCenter(pos);
    })
  };

  var locationButton = document.querySelector('#location');
  locationButton.onclick = geolocate;

};

window.onload = initialize;