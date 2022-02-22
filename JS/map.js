function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
}

function onGeoError() {
  alert('You have a wrong location information');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
