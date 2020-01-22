
// Required External Modules
const express = require("express");
const path = require("path");
const request = require('request');
const bodyParser = require('body-parser')
const chart = require('chart.js');

// App Variables
const app = express();
const port = process.env.PORT || "8000";

// App Configuration
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard", { title: "Dashboard", userProfile: { nickname: "Auth0" }, name: { name: object.name }, rotation_period: { rotation_period: object.rotation_period } });
});

// Server
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

request('https://swapi.co/api/planets/1', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
    const obj = JSON.parse(body);
    console.log(obj);

    object = {
      name: obj.name,
      rotation_period: obj.rotation_period
    }
    return object
  }
});