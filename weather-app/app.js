const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Bengaluru", (error, data) => {
  console.log("GeoCode Error: ", error);
  console.log("GeoCode Data: ", data);
});

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Weather Error: ", error);
  console.log("Weather Data: ", data);
});
