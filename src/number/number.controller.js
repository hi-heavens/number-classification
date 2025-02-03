const person = require("./number.model");
const getNumberProperties = require("../getProperties");
const axios = require("axios");
const isPrime = require("../utils/isPrime");

exports.getNumberDetails = async (req, res) => {
  try {
    const { number } = req.query;
    const convertedNumber = Number(number);
    const is_prime = isPrime(convertedNumber);
    const digit_sum = convertedNumber
      .toString()
      .split("")
      .reduce((a, b) => a + parseInt(b), 0);

    axios
      .get(`http://numbersapi.com/${convertedNumber}/math`)
      .then((response) => {
        const details = {
          number: convertedNumber,
          is_prime,
          digit_sum,
          armstrong,
          fun_fact: response.data,
        };
        console.log(details);
        return res.status(200).json(details);
      });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: false,
      message: "An error occurred while fetching person details",
    });
  }
};
