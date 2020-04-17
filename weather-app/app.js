const request = require("request");

const url =
  "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}358a4e311240293fdf5a6d4f5b8ec7e5";

const url2 =
  "https://api.weatherbit.io/v2.0/current?city_id=4487042&key=17f82e467ebe4560a98b755f448e4da6";

request({ url: url2, json: true }, (error, response) => {
  const APIResponse = response.body.data[0];
  console.log(
    "It is currently " +
      APIResponse.temp +
      " degrees out. There is " +
      APIResponse.precip +
      "% chance of rain."
  );
  //   console.log(error);
});
