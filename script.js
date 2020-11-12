mapboxgl.accessToken =
	"pk.eyJ1IjoicHJvZ2hlYWQwMCIsImEiOiJja2hmM3U4ZWMwZjF1MnNvNGw1OWxveDg3In0.jqEAisZlXu6KbLAsSvyWDA";

var map = new mapboxgl.Map({
	container: "map",
	style: "mapbox://styles/mapbox/streets-v11",
});

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
	enableHighAccuracy: true,
});

function successLocation(position) {
	setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
	setupMap([88.3639, 22.5726]);
}

function setupMap(center) {
	const map = new mapboxgl.Map({
		container: "map",
		style: "mapbox://styles/mapbox/streets-v11",
		center: center,
		zoom: 15,
	});

	const nav = new mapboxgl.NavigationControl();
	map.addControl(nav);

	var directions = new MapboxDirections({
		accessToken: mapboxgl.accessToken,
	});

	map.addControl(directions, "top-left");
}
