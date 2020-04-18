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
  if (!req.query.address) {
    return res.send({ error: "Please Provide an Address!" });
  }
  res.send([
    {
      forecast: "placeholder",
      location: "placeholder",
      address: req.query.address,
    },
  ]);
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "Help Not Found",
    message: "The Help Page you are looking for is not currently available.",
    name: "Aravind",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "Page Not Found",
    message: "The Page you are looking for is not currently available.",
    name: "Aravind",
  });
});

app.listen(8080, () => {
  console.log("Listening on 8080.");
});
