function init () {
	var mymap = L.map('map').setView([60, -155], 4);
	L.tileLayer('tiles/{z}/{x}/{y}.png', { minZoom: 3, maxZoom: 7, tms: true }).addTo(mymap)
}
