const request = require("request");

const weatherAPI =
  "https://api.weatherbit.io/v2.0/current?lat=34.0544&lon=-118.2439&key=17f82e467ebe4560a98b755f448e4da6";

const geocodingAPI =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/test.json?access_token=pk.eyJ1Ijoid2ViaG9zdCIsImEiOiJjazk0MDdiZ3MwMTdyM25vdTZ5amsxd2E4In0.IDLyAD6mreJ4aK0uCr1_2Q";

//GeoCoding
request({ url: geocodingAPI, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to Call API!");
  } else if (response.body.features.length == 0) {
    console.log("No Results Found!");
  } else {
    console.log(response.body.features);
  }
});

//Weather
request({ url: weatherAPI, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to Call API!");
  } else if (response.body.error) {
    console.log(response.body.error);
  } else {
    const APIResponse = response.body.data[0];
    console.log(
      "It is currently " +
        APIResponse.temp +
        " degrees out. There is " +
        APIResponse.precip +
        "% chance of rain."
    );
  }
});
