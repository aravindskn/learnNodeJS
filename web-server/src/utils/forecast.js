const request = require("request");

const APIKey = "17f82e467ebe4560a98b755f448e4da6";

//Weather API Call
const forecast = (lat, long, callback) => {
  //API Definition
  const url =
    "https://api.weatherbit.io/v2.0/current?lat=" +
    lat +
    "&lon=" +
    long +
    "&key=" +
    APIKey;

  request({ url, json: true }, (error, response) => {
    const { body } = response;
    if (error) {
      callback("Unable to Call API!"), null;
    } else if (body.error) {
      callback(body.error, null);
    } else {
      const APIResponse = body.data[0];
      const { temp, precip } = APIResponse;
      callback(
        null,
        "It is currently " +
          temp +
          " degrees out. There is " +
          precip +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
