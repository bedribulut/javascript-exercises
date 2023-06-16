const convertToCelsius = function(x) {
  const c = ((x - 32) * (5 / 9));
  return Number.isInteger(c) ? c : +c.toFixed(1);
};

const convertToFahrenheit = function(y) {
  const f = (y * (9 / 5) + 32);
  return Number.isInteger(f) ? f : +f.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
