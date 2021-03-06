const express = require("express");
const cors = require("cors");
const url = require("url");
const querystring = require("querystring");
const bodyParser = require("body-parser");
const moment = require("moment");
const path = require("path");

const { mockData, CLIENTS, MEDIA_PLATFORMS } = require("./mockData");

const app = express();

const port = process.env.PORT || 5000;
// aws-eb: process.env.HTTP_PORT

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(cors());

app.get("/api/posts/", (req, res) => {
  console.log(req.query);
  const { client, keyword, dateMin, medium, sortBy } = req.query;
  let response = mockData;
  if (client) {
    response = response.filter((post) => post.client === client);
  }
  if (keyword) {
    response = response.filter((post) => post.post.includes(keyword));
  }
  if (dateMin) {
    response = response.filter(
      (post) => moment(post.date).unix() >= parseInt(dateMin)
    );
  }
  if (medium) {
    response = response.filter((post) => post.media === medium);
  }
  if (sortBy === "date") {
    response.sort((a, b) => moment(b.date).unix() - moment(a.date).unix());
  } else if (sortBy === "comment") {
    response.sort((a, b) => b.data.comments - a.data.comments);
  }

  res.json(response);
});

app.get("/api/workspace", (req, res) => {
  res.json({ clients: CLIENTS, medium: MEDIA_PLATFORMS });
});

app.listen(port, () => console.log(`Server is running on ${port}`));
