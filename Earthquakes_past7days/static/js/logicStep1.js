// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with center and zoom level.
 //let map = L.map('mapid').setView([30, 30], 2);




// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });




// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});




// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// // We create the dark view tile layer that will be an option for our map.
// let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// // Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//   center: [40.7, -94.5],
//   zoom: 4
// });

// Pass our map layers into our layers control and add the layers control to the map.
//L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
   //streets.addTo(map);

   // Accessing the airport GeoJSON URL
   //let airportData = "https://raw.githubusercontent.com/tchal100/Mapping_Earthquakes/main/majorAirports.json"
   //let airportData = "https://raw.githubusercontent.com/tchal100/Mapping_Earthquakes/main/majorAirports.json"
   //let torontoData = "https://raw.githubusercontent.com/tchal100/Mapping_Earthquakes/main/torontoRoutes.json" 
  let torontoHoods = "https://raw.githubusercontent.com/tchal100/Mapping_Earthquakes/main/torontoNeighborhoods.json"

   // Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data).addTo(map)


// color: "#ffffa1",
  // weight: 2,
  // onEachFeature: function(feature, layer) {
  //     console.log(feature);
  //     layer.bindPopup("<h3>Airline:" + feature.properties.airline + "</h3> <hr> <h3>Destination: " + feature.properties.dst + "</h3>")
  //   }).addTo(map);
  })


// onEachFeature:function(feature, layer) {
//   console.log(feature);
// layer.bindPopup("<h2>Airport name:" + feature.properties.name + "</h2> <hr> <h3>Airportcode: " + feature.properties.faa + "</h3>")}
//   }).addTo(map);
// })

// cityData.forEach(function(city) {
// console.log(feature);
// layer.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
  
 



// //  Add a marker to the map for Los Angeles, California.
// L.circle([34.0522, -118.2437], {
//     radius: 300
//  }).addTo(map);
//  L.circleMarker([34.0522, -118.2437]).addTo(map);

// Coordinates for each point to be used in the line.
// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup();
//   }
// }).addTo(map);

// Create a polyline using the line coordinates and make the line yellow.
//L.polyline(line, {
  //  color: "yellow"
//  }).addTo(map);


// // Get data from cities.js
// let cityData = cities;




// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

//Check to see if code is working //
//console.log("working").addTo(mymap);



// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius:city.population/100000
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });





  
  
  






