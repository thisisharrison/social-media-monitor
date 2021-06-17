"use strict";

var express = require("express");

var cors = require("cors");

var url = require("url");

var querystring = require("querystring");

var bodyParser = require("body-parser");

var moment = require("moment");

var _require = require("./mockData"),
    mockData = _require.mockData,
    CLIENTS = _require.CLIENTS,
    MEDIA_PLATFORMS = _require.MEDIA_PLATFORMS;

var app = express();
var port = process.env.HTTP_PORT || 5000;
app.use(express["static"](path.join(__dirname, "client", "build")));
app.use(cors());
app.get("/api/posts/", function (req, res) {
  console.log(req.query);
  var _req$query = req.query,
      client = _req$query.client,
      keyword = _req$query.keyword,
      dateMin = _req$query.dateMin,
      medium = _req$query.medium,
      sortBy = _req$query.sortBy;
  var response = mockData;

  if (client) {
    response = response.filter(function (post) {
      return post.client === client;
    });
  }

  if (keyword) {
    response = response.filter(function (post) {
      return post.post.includes(keyword);
    });
  }

  if (dateMin) {
    response = response.filter(function (post) {
      return moment(post.date).unix() >= parseInt(dateMin);
    });
  }

  if (medium) {
    response = response.filter(function (post) {
      return post.media === medium;
    });
  }

  if (sortBy === "date") {
    response.sort(function (a, b) {
      return moment(b.date).unix() - moment(a.date).unix();
    });
  } else if (sortBy === "comment") {
    response.sort(function (a, b) {
      return b.data.comments - a.data.comments;
    });
  }

  res.json(response);
});
app.get("/api/workspace", function (req, res) {
  res.json({
    clients: CLIENTS,
    medium: MEDIA_PLATFORMS
  });
});
app.listen(port, function () {
  return console.log("Server is running on ".concat(port));
});
