const cors = require("cors");
const express = require("express");
const numberRoute = require("./number/number.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/classify-number", numberRoute);

app.all("*", (req, res) => {
  res.status(404).json({
    status: false,
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

module.exports = app;
