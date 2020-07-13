let map = L.map('map').setView([-0.22985, -78.52495],11)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-location').addEventListener('change', function(e){
  let coords = e.target.value.split(",");
  L.marker(coords).addTo(map)
  map.flyTo(coords, 18);
});

L.marker([-0.225069,-78.5168959]).addTo(map).bindPopup('INSTITUTO').openPopup()

L.marker([-0.3712061, -78.3744005]).addTo(map).bindPopup('JHON SIMBAÑA').openPopup()

L.marker([-0.257128, -78.546270]).addTo(map).bindPopup('Kevin Guachagmira').openPopup()

L.marker([-0.355708, -78.528793]).addTo(map).bindPopup('Jaz Sánchez').openPopup()