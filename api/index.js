const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

// const cors = require("cors");
// app.use(cors());

// app.use(express.static(path.join(__dirname, "./../public")));

// app.get("/", (req, resp) => {
//   resp.render("/index.html");
// });

app.get("/", (req, res) => {
  res.send("API WORKING 😎");
});

app.get("/api/teams", (req, resp) => {
  let rawdata = fs.readFileSync("./data/teams.json");
  let teams = JSON.parse(rawdata);
  resp.send(teams);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
