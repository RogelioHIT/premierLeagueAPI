const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/api/teams", (req, resp) => {
  let rawdata = fs.readFileSync("./data/teams.json");
  let teams = JSON.parse(rawdata);
  resp.send(teams);
});

app.listen(4000, () => {
  console.log("Running on port 4000.");
});

// Export the Express API
module.exports = app;
