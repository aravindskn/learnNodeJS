const express = require("express");
const path = require("path");

const app = express();

const publicDirPath = path.join(__dirname, "../public");

app.set("views", path.join(__dirname, "../views/"));
app.set("view engine", "hbs");
app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Aravind",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    message: "This Page Provides Help",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    name: "Aravind",
  });
});

app.get("/weather", (req, res) => {
  res.send([{ forecast: "placeholder", location: "placeholder" }]);
});

app.listen(8080, () => {
  console.log("Listening on 8080.");
});
