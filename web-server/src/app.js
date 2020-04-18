const express = require("express");
const path = require("path");

const app = express();

const publicDirPath = path.join(__dirname, "../public");

app.use(express.static(publicDirPath));

// app.get("", (req, res) => {
//   res.send("<h1>Weather</h1>");
// });

// app.get("/help", (req, res) => {
//   res.send([{ name: "Aravind" }, { name: "Mahidhar" }]);
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About</h1>");
// });

app.get("/weather", (req, res) => {
  res.send([{ forecast: "placeholder", location: "placeholder" }]);
});

app.listen(8080, () => {
  console.log("Listening on 8080.");
});
