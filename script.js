async function getWeather() {
  const city = document.getElementById('cityInput').value;

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const apiKey = "2b31bfe03d1811a52972b90fa151057e"; // ✅ Corrected with quotes
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod == 200) {
      document.getElementById('weatherResult').innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    } else {
      document.getElementById('weatherResult').innerText = "City not found.";
    }
  } catch (err) {
    document.getElementById('weatherResult').innerText = "Error fetching data.";
    console.error(err);
  }
}
