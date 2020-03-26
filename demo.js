
/**
 * Boilerplate map initialization code starts below:
 */



//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  "app_id":"fNeoBkVzRyXqaFTjozyY",
  "apikey":"tNoN2z_aC06Fi_C9Mc18MGxvSVRTzkbh3dGcamYNVho"
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
  center: {lat:50, lng:5},
  zoom: 4,
  pixelRatio: window.devicePixelRatio || 1,
  name:"carteprince"
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);











let champPoruit = document.getElementById('donne')

 champPoruit.addEventListener("change", function(){

        Produit = this.value


        if (Produit != "") 
{



map.removeObjects(map.getObjects());
 
              // On envoie la requête
            ajaxGet(`chargeMarket?donne=${Produit}`)
            .then(reponse => {
              
                // On supprime toutes les couches de la carte
                let donnees= JSON.parse(reponse)


                for (var i = 0; i < donnees.length; i++)
                {
                 var nom=donnees[i][1];
                  var lat=donnees[i][2];
                  var lon=donnees[i][3];
                }
         
            console.log(lat)

           var alice = (map) =>{

          ip= "195.70.215.185"
            var access_key = '0ac0d7ad2f3722aedf4eb590d57ad7d9';

          // get the API result via jQuery.ajax
          $.ajax({
              url: 'http://api.ipstack.com/' + ip + '?access_key=' + access_key,   
              dataType: 'jsonp',
              success: function(json) {

          var latI =json.latitude;
          var  lonI =json.longitude;
          const marker =new H.map.Marker({lat:latI,lng:lonI})
                  // output the "capital" object inside "location"
            map.addObject(marker);

             
              }
          });
          }

          alice(map);



  var marker = (map) =>{
          // get the Margket result via jQuery.ajax
      
          const marker =new H.map.Marker({lat:lat,lng:lon})
                  // output the "capital" object inside "location"
            map.addObject(marker);
          }
//tracer de chemin





function addMarkerToGroup(group, coordinate, html) {
  var marker = new H.map.Marker(coordinate);
  // add custom data to the marker
  marker.setData(html);
  group.addObject(marker);
}




    function addInfoBubble(map) {
  var group = new H.map.Group();

  map.addObject(group);

  // add 'tap' event listener, that opens info bubble, to the group
  group.addEventListener('tap', function (evt) {
    // event target is the marker itself, group is a parent event target
    // for all objects that it contains
    var bubble =  new H.ui.InfoBubble(evt.target.getGeometry(), {
      // read custom data
      content: evt.target.getData()
    });
    // show info bubble
    ui.addBubble(bubble);
  }, false);

  addMarkerToGroup(group, {lat:lat,lng:lon},
    'good  market  ' +' price: 80$'+' Time: 48 min');
}
    
          addInfoBubble(map);
          marker(map);
            })



// Create the parameters for the routing request:
var routingParameters = {
  // The routing mode:
  'mode': 'fastest;car',
  // The start point of the route:
  'waypoint0': 'geo!50.1120423728813,8.68340740740811',
  // The end point of the route:
  'waypoint1': 'geo!52.5309916298853,13.3846220493377',
  // To retrieve the shape of the route we choose the route
  // representation mode 'display'
  'representation': 'display'
};

// Define a callback function to process the routing response:
var onResult = function(result) {
  var route,
    routeShape,
    startPoint,
    endPoint,
    linestring;
  if(result.response.route) {
  // Pick the first route from the response:
  route = result.response.route[0];
  // Pick the route's shape:
  routeShape = route.shape;

  // Create a linestring to use as a point source for the route line
  linestring = new H.geo.LineString();

  // Push all the points in the shape into the linestring:
  routeShape.forEach(function(point) {
    var parts = point.split(',');
    linestring.pushLatLngAlt(parts[0], parts[1]);
  });

  // Retrieve the mapped positions of the requested waypoints:
  startPoint = route.waypoint[0].mappedPosition;
  endPoint = route.waypoint[1].mappedPosition;

  // Create a polyline to display the route:
  var routeLine = new H.map.Polyline(linestring, {
    style: { strokeColor: 'blue', lineWidth: 3 }
  });

  // Create a marker for the start point:
  var startMarker = new H.map.Marker({
    lat: startPoint.latitude,
    lng: startPoint.longitude
  });

  // Create a marker for the end point:
  var endMarker = new H.map.Marker({
    lat: endPoint.latitude,
    lng: endPoint.longitude
  });

  // Add the route polyline and the two markers to the map:
  map.addObjects([routeLine, startMarker, endMarker]);

  // Set the map's viewport to make the whole route visible:
  map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
  }
};

// Get an instance of the routing service:
var router = platform.getRoutingService();

// Call calculateRoute() with the routing parameters,
// the callback and an error callback function (called if a
// communication error occurs):
router.calculateRoute(routingParameters, onResult,
  function(error) {
    alert(error.message);
  });



}




      }

)


 /**
 * Cette fonction effectue un appel Ajax vers une url et retourne une promesse
 * @param {string} url 
 */
function ajaxGet(url){
    return new Promise(function(resolve, reject){
        // Nous allons gérer la promesse
        
        let xmlhttp = new XMLHttpRequest()

        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState == 4){
                if(xmlhttp.status == 200){
                    // On "résoud" la promesse
                    resolve(xmlhttp.response)

                   
                }else{
                    reject(xmlhttp)
                }
            }
        }

        xmlhttp.onerror = function(error){
            reject(error)
        }

        xmlhttp.open('GET', url, true)
        xmlhttp.send()
    })
}

              
 
         
                




