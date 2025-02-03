const axios = require("axios");
const isPrime = require("../utils/isPrime");
const numberProps = require("../utils/numberProps");
const isPerfectNumber = require("../utils/isPerfectNumber");

exports.getNumberDetails = async (req, res) => {
  try {
    const { number } = req.query;
    const convertedNumber = Number(number);
    if (isNaN(convertedNumber)) {
      return res.status(400).json({
        number,
        error: true,
      });
    }

    const is_prime = isPrime(convertedNumber);
    const properties = numberProps(convertedNumber);
    const is_perfect = isPerfectNumber(convertedNumber);

    const digit_sum =
      convertedNumber
        .toString()
        .split("")
        .reduce((a, b) => a + parseInt(b), 0) || convertedNumber;

    axios
      .get(`http://numbersapi.com/${convertedNumber}/math`)
      .then((response) => {
        const details = {
          number: convertedNumber,
          is_prime,
          is_perfect,
          properties,
          digit_sum,
          fun_fact: response.data,
        };
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
