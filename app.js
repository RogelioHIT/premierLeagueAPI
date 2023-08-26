const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

app.get("/", (req, resp) => {
  const status = {
    "STATUS:": "Running",
  };
  resp.send(status);
});

app.get("/teams", (req, resp) => {
  let rawdata = fs.readFileSync("./res/teams.json");
  let teams = JSON.parse(rawdata);
  resp.send(teams);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
