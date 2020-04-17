const request = require("request");

const weatherAPIKey = "17f82e467ebe4560a98b755f448e4da6";

//Weather API Call
const forecast = (lat, long, callback) => {
  //API Definition
  const weatherAPI =
    "https://api.weatherbit.io/v2.0/current?lat=" +
    lat +
    "&lon=" +
    long +
    "&key=" +
    weatherAPIKey;

  request({ url: weatherAPI, json: true }, (error, response) => {
    if (error) {
      callback("Unable to Call API!"), null;
    } else if (response.body.error) {
      callback(response.body.error, null);
    } else {
      const APIResponse = response.body.data[0];
      callback(
        null,
        "It is currently " +
          APIResponse.temp +
          " degrees out. There is " +
          APIResponse.precip +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
