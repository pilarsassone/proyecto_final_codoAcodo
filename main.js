//API de google maps

function iniciarMap(){
    var coord = {lat:-34.5844215 ,lng: -60.9423707};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}