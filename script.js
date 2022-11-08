const body = document.querySelector('body');

const div = document.createElement('div');
div.setAttribute("id", "div");
body.insertBefore(div)


const Mapbox = document.querySelector('input')



    
const geocoding = (Mapbox) => {
let promise = fetch("https://api.mapbox.com/geocoding/v5/{endpoint}/{search_text}.json")
 .then(response => response.json())
 .then(response())
}

 console.log(geocoding);


 	// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
	mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });

    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
    });

  


 const button = document.querySelector('button')

 const = (display , )

 button.addEventListener('click', function) {
    this.display.map
 }


 const Weather = (Openweather) => {
    fetch("api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}")
    .then(response => response.json())
    .then(json)
 }


