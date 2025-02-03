const isPerfectNumber = (num) => {
  if (num < 2) return false;

  // Start with 1 as it's always a divisor
  let sum = 1;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      // Add the paired divisor
      if (i !== num / i) sum += num / i;
    }
  }

  return sum === num;
};

module.exports = isPerfectNumber;
