
//---------------------scroll---------------------//

$(document).ready(function(){
  
  $("a").on('click', function(event) {

    
    if (this.hash !== "") {
     
      event.preventDefault();

      
      var hash = this.hash;

      
      $('html, body').animate({
        scrollTop: $(hash).offset().top 
      }, 1000, function(){
   
       
        window.location.hash = hash;
      });
    } 
  });
});


//---------------------Contact Alert---------------------//
function contactalert() {
    alert("Oeps werkt nog niet");
}

//---------------------google maps AIzaSyDt9QutH8JlD-GQ-7GHXUAFXFGruWNu3IA ---------------------//

function myMap() {
  var myCenter = new google.maps.LatLng(52.71369850000001,6.887724599999956);
  var mapCanvas = document.getElementById("googleMap");
  var mapOptions = {center: myCenter, zoom: 15};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  var infowindow = new google.maps.InfoWindow({content: "Joris Gengler"});
  
 
	marker.setMap(map);
	infowindow.open(map,marker);


}





