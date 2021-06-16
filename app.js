const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");
// const { graphqlExpress } = require("apollo-server-express");

const mockData = require("./mockData");

const app = express();

const port = 5000;

app.use(cors());

// const socialMediaSchema = {};

// app.use(
//   "/graphql",
//   bodyParser.json(),
//   graphqlExpress({ schema: socialMediaSchema })
// );

app.get("/api/posts", (req, res) => res.json(mockData));

app.listen(port, () => console.log(`Server is running on ${port}`));
