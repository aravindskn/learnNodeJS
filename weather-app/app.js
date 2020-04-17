const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const userInput = process.argv[2];

if (userInput) {
  geocode(userInput, (error, geoCodeData) => {
    if (error != null) {
      return console.log("GeoCode Error: ", error);
    }

    forecast(geoCodeData.lat, geoCodeData.long, (error, forecastData) => {
      if (error != null) {
        return console.log("Weather Error: ", error);
      }
      console.log("Geocode Place: ", geoCodeData.place);
      console.log("Weather Data: ", forecastData);
    });
  });
} else {
  console.log("Please Provide a Place to Search");
}
