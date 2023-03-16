require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello API");
});
app.listen(3000, () => {
  console.log("started");
});

let weather = {
  fetchWeather: function (city) {
    fetch(
      //   "https://api.openweathermap.org/data/2.5/weather?lat=54&lon=23&appid=b7f6d9a5cfc7c8717d29e5d0b5b432da"
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data))
      .catch((err) => {
        throw `Sorry an error occured ${err}`;
      });
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity);
    document.querySelector(".city").innerText = "Weather in " + name;
    // document.querySelector(".icon").src=
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + " °C";
    document.querySelector(".humidity").innerText = humidity + " %";
    document.querySelector(".wind").innerText = "Windspeed " + speed + " km/hr";
    if (temp <= 25 && humidity <= 50) {
      document.body.style.backgroundImage = "url(./assets/cloudy.jpg)";
    } else if (temp > 26 && speed >= 2) {
      document.body.style.backgroundImage = "url(./assets/windy.jpg)";
    }
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search-button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
// weather.fetchWeather("Denver")
