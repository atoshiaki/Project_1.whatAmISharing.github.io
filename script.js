    // Create the script tag, set the appropriate attributes
    var script = document.createElement("script");

    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAN1HuZR2h3OStGDn61coErkA7k4QHfrbI&callback=initMap";
    script.defer = true;

    var map, infoWindow;
    // Attach your callback function to the `window` object
    function initMap() {
      map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 47.609393, lng: -122.342764},
        zoom: 6,
        options: {
          gestureHandling: "greedy"
        }
      });
      infoWindow = new google.maps.InfoWindow;
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }


      
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
                            "Error: The Geolocation service failed." :
                            "Error: Your browser doesn\'t support geolocation.");
      infoWindow.open(map);
    }
    document.head.appendChild(script);