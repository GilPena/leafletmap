var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
});

$(document).ready(function() {
    // Create Map View
    var mymap = L.map('map').setView([33.779693,-118.1145067], 12);

    // Add map tile layer (different tiles: http://leaflet-extras.github.io/leaflet-providers/preview/index.html)
    OpenStreetMap_HOT.addTo(mymap);

    // Add marker to the map
    L.marker([33.779693, -118.1145067]).addTo(mymap).bindPopup('CSULB').openPopup();
    L.marker([33.455367, -117.68398]).bindPopup('Fish One').openPopup().addTo(mymap);
    L.marker([33.458583, -117.68138]).bindPopup('Fish Two').openPopup().addTo(mymap);
    L.marker([33.689693, -118.11450]).bindPopup('Fish Three').openPopup().addTo(mymap);
    L.marker([33.709684, -118.11450]).bindPopup('Fish Four').openPopup().addTo(mymap);
    L.marker([33.689693, -118.12450]).bindPopup('Fish Five').openPopup().addTo(mymap);
    L.marker([33.709684, -118.13450]).bindPopup('Fish Six').openPopup().addTo(mymap);
});