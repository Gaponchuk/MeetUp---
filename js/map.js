var map;
function initMap() {
	map = new google.maps.Map(document.getElementById("google-map"), {
		center: {lat: 39.0872177, lng: -77.483013},
		zoom: 15
	});
}