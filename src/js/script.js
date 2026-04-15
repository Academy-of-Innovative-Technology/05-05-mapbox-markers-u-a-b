mapboxgl.accessToken = 'pk.eyJ1IjoidWEyIiwiYSI6ImNtbnl3djZ2azA2bHMycm9nb3MycmZpN3UifQ._jWrIGrPo-6izrQe9cfgrw';
const map = new mapboxgl.Map({
	container: 'map',
	center: [-73.935242, 40.7128 ],
	zoom: 4
});	
console.log(map);

var lngLat = new mapboxgl.LngLat(-77.0365, 38.897);
new mapboxgl.Marker().setLngLat(lngLat).addTo(map);

var lngLat2 = new mapboxgl.LngLat(-21.9270884, 64.1436456);
new mapboxgl.Marker().setLngLat(lngLat2).addTo(map);

var lngLat3 = new mapboxgl.LngLat(-74.0060, 40.7128);
new mapboxgl.Marker().setLngLat(lngLat3).addTo(map);

var lngLat4 = new mapboxgl.LngLat(27.4371, -14.11888);
new mapboxgl.Marker().setLngLat(lngLat4).addTo(map);
