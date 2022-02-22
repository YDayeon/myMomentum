const API_KEY = '8dc69b0a2e68b0619781bb468ce3d1ad';
const weatherHead = document.querySelector('.weather_head');
const weatherIcon = weatherHead.querySelector('img');
const headTem = weatherHead.querySelector('span:nth-child(3)');
const headHum = weatherHead.querySelector('span:nth-child(5)');
const temperature = document.querySelector('.temperature');
const tempFeel = temperature.querySelector('h4:nth-child(2)');
const tempMax = temperature.querySelector('h4:nth-child(3)');
const tempMin = temperature.querySelector('h4:nth-child(4)');
const wind = document.querySelector('.wind');
const windDeg = wind.querySelector('h4:nth-child(2)');
const windSpeed = wind.querySelector('h4:nth-child(3)');

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const icon = data.weather[0].icon;
      const temp = data.main.temp;
      const hum = data.main.humidity;
      const feels_like = data.main.feels_like;
      const max = data.main.temp_max;
      const min = data.main.temp_min;
      const deg = data.wind.deg;
      const speed = data.wind.speed;
      if (icon === '01d') {
        weatherIcon.src = 'imgs/weather/sun.png';
      } else if (icon === '01n') {
        weatherIcon.src = 'imgs/weather/moon.png';
      } else if (icon === '02d') {
        weatherIcon.src = 'imgs/weather/02d.png';
      } else if (icon === '02n') {
        weatherIcon.src = 'imgs/weather/02n.png';
      } else if (
        icon === '03d' ||
        icon === '03n' ||
        icon === '04d' ||
        icon === '04n'
      ) {
        weatherIcon.src = 'imgs/weather/cloud.png';
      } else if (
        icon === '09d' ||
        icon === '09n' ||
        icon === '10d' ||
        icon === '10n'
      ) {
        weatherIcon.src = 'imgs/weather/rain.png';
      } else if (icon === '11n' || icon === '11d') {
        weatherIcon.src = 'imgs/weather/storm.png';
      } else if (icon === '13n' || icon === '13d') {
        weatherIcon.src = 'imgs/weather/snowy.png';
      } else if (icon === '50n' || icon === '50d') {
        weatherIcon.src = 'imgs/weather/foggy.png';
      }
      headTem.innerHTML = `${temp}°C`;
      headHum.innerHTML = `${hum}%`;
      tempFeel.innerHTML = `feels like ${feels_like}°C`;
      tempMax.innerHTML = `max-temperature ${max}°C`;
      tempMin.innerHTML = `min-temperature ${min}°C`;
      windDeg.innerHTML = `deg ${deg}°`;
      windSpeed.innerHTML = `speed ${speed} m/s`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
