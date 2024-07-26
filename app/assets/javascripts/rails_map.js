function initMap() {
	const TanSonNhatAirportLocation = { lat: 10.8185, lng: 106.6518 };
  let map = new google.maps.Map(document.getElementById('map'), {
	  center: TanSonNhatAirportLocation,
	  zoom: 8  
  });
}
