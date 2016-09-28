var Map = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });

  this.centerAt = function(destLat, destLng){
    this.googleMap.setCenter({lat:destLat, lng:destLng});
  }

  this.addMarker = function(input){
    var marker = new google.maps.Marker({
      position: input.latlng,
      map: this.googleMap,
      icon: image
    });
    if (input.info){ 
      var infowindow = new google.maps.InfoWindow({
        content: input.info
      });
      marker.addListener('click', function() {
          infowindow.open(map, marker);
      });
    }
  }

}