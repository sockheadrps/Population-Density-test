var map = L.map('map').setView([0, 0], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {opacity: 1}).addTo(map);