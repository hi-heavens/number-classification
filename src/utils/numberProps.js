const numberProps = (num) => {
  let properties = [];
  const digits = num.toString().split("");
  const power = digits.length;
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), power),
    0
  );
  if (sum === num) properties.push("armstrong");
  if (num % 2 === 0) properties.push("even");
  else properties.push("odd");

  return properties;
};

module.exports = numberProps;
