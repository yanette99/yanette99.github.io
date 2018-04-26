var map
var infowindow


function createMarker(lat, lon, content) {
  var latLng = new google.maps.LatLng(lat, lon)

 //this may be used for a custom marker
  var markerImage = new google.maps.MarkerImage('images/icon.png',
                new google.maps.Size(60, 30),
                new google.maps.Point(15, 15),
                new google.maps.Point(30, 30));

    var icon = {
    url: "img/icon.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
};

  var marker = new google.maps.Marker({
    position: latLng,
    icon: icon,
    map: map,
    animation: google.maps.Animation.DROP
  });


  google.maps.event.addListener(marker, 'click', function(){
    infowindow.setContent("<div class='content'>" + content + "</div>");
    infowindow.open(map,marker);
  })

}


function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.5501, lng: -105.7821},
    zoom: 4
  })

  function nationalParks(){
 createMarker(37.2982, -113.0263, "<h2>Zion National Park, Utah </h1><br><img src='img/zion2.jpg'><p>The river flows to the Emerald Pools, which have waterfalls and a hanging garden. Also along the river, partly through deep chasms, is Zion Narrows wading hike.</p>")
 createMarker(46.8800, -121.7269, "<h3>Mount Rainier National Park, Washington </h1><br><img src='img/mount.jpg'><p>Mount Rainier. Atop 6,400-ft.-high Sunrise, the highest point in the park reachable by car, visitors can admire Rainier and other nearby volcanoes, including Mount Adams.</p>")
 createMarker(38.7331, -109.5925, "<h2>Arches National Park, Utah </h1><br><img src='img/arches.jpg'><p> Long, thin Landscape Arch stands in Devils Garden to the north. Other geological formations include Balanced Rock, towering over the desert landscape in the middle of the park.</p>")
 createMarker(36.1070, -112.1130, "<h2>Grand Canyon, Arizona </h1><br><img src='img/grand.jpg'><p>Grand Canyon National Park, in Arizona, is home to much of the immense Grand Canyon, with its layered bands of red rock revealing millions of years of geological history. </p>")
 createMarker(43.7904, -110.6818, "<h2>Grand Teton National Park, Wyoming</h1><br><img src='img/teton.jpg'><p>It’s a popular destination in summer for mountaineering, hiking, backcountry camping and fishing, linked to nearby Yellowstone National Park by the John D. Rockefeller, Jr. Memorial Parkway.</p>")
 
  }
  
  infowindow = new google.maps.InfoWindow({
    content: "placeholder"
  })
  
  nationalParks()
}
