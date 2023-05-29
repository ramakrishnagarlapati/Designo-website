// include map in loactions page

//canada map
let mapCanada = L.map("mapCanada").setView(
  [43.64419483903654, -79.39457159020833],
  13
);

L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=ElhiTY9XmHHwVWKj6niG"
).addTo(mapCanada);
let canadaMarker = L.marker([43.64419483903654, -79.39457159020833]).addTo(
  mapCanada
);

//australia map
let mapAustralia = L.map("mapAustralia").setView(
  [-30.32923181174901, 149.78826135767045],
  13
);

L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=ElhiTY9XmHHwVWKj6niG"
).addTo(mapAustralia);
let australiaMarker = L.marker([-30.32923181174901, 149.78826135767045]).addTo(
  mapAustralia
);

//uk map
let mapUk = L.map("mapUk").setView([51.73185248267442, -3.86295122891699], 13);

L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=ElhiTY9XmHHwVWKj6niG"
).addTo(mapUk);
let ukMarker = L.marker([51.73185248267442, -3.86295122891699]).addTo(mapUk);
