const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/api/teams", (req, resp) => {
  let rawdata = fs.readFileSync("./teams.json");
  let teams = JSON.parse(rawdata);
  resp.send(teams);
});

app.listen(4000, () => {
  console.log("Running on port 4000.");
});

// Export the Express API
module.exports = app;
