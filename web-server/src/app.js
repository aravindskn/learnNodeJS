const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

//Directory Path
const publicDirPath = path.join(__dirname, "../public");
const viewsDirPath = path.join(__dirname, "../templates/views/");
const partialsDirPath = path.join(__dirname, "../templates/partials/");

//Directory for Handlebar
app.set("views", viewsDirPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialsDirPath);

//Directory for Static Files
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
    name: "Aravind",
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
