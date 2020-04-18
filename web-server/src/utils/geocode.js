const request = require("request");

const APIKey =
  "pk.eyJ1Ijoid2ViaG9zdCIsImEiOiJjazk0MDdiZ3MwMTdyM25vdTZ5amsxd2E4In0.IDLyAD6mreJ4aK0uCr1_2Q";

//API Call for fetching geoCode
const geocode = (address, callback) => {
  //API definition
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=" +
    APIKey;

  request({ url, json: true }, (error, response) => {
    const { features } = response.body;
    if (error) {
      callback("Unable to Call API!", null);
    } else if (features.length == 0) {
      callback("No Results Found!", null);
    } else {
      callback(null, {
        lat: features[0].center[1],
        long: features[0].center[0],
        place: features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
