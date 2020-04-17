const request = require("request");

const geocodingAPIKey =
  "pk.eyJ1Ijoid2ViaG9zdCIsImEiOiJjazk0MDdiZ3MwMTdyM25vdTZ5amsxd2E4In0.IDLyAD6mreJ4aK0uCr1_2Q";

//API Call for fetching geoCode
const geocode = (address, callback) => {
  //API definition
  const geocodingAPI =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=" +
    geocodingAPIKey;

  request({ url: geocodingAPI, json: true }, (error, response) => {
    if (error) {
      callback("Unable to Call API!", null);
    } else if (response.body.features.length == 0) {
      callback("No Results Found!", response.body);
    } else {
      callback(null, response.body.features);
    }
  });
};

module.exports = geocode;
