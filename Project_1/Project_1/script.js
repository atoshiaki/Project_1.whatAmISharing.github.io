// Create the script tag, set the appropriate attributes
var script = document.createElement('script');

script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAN1HuZR2h3OStGDn61coErkA7k4QHfrbI&callback=initMap';
console.log(script.src)
script.defer = true;

let map;
// Attach your callback function to the `window` object
window.initMap = function() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.621734, lng: -122.345675},
    zoom: 6
  });
  // JS API is loaded and available
};

// Append the 'script' element to 'head'
document.head.appendChild(script);
  // Note: This example requires that you consent to location sharing when
  // prompted by your browser. If you see the error "The Geolocation service
  // failed.", it means you probably did not give permission for the browser to
  // locate you.