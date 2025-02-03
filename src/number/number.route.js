const express = require("express");
const { getNumberDetails } = require("./number.controller");

const router = express.Router();

router.get("/", getNumberDetails);

module.exports = router;
