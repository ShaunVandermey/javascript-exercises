const convertToCelsius = function(degreeFahrenheit) {
  degreeFahrenheit -= 32;
  degreeFahrenheit *= 5 / 9;
  return toOneDecimal(degreeFahrenheit);
};

const convertToFahrenheit = function(degreeCelsius) {
  degreeCelsius *= 9 / 5;
  degreeCelsius += 32;
  return toOneDecimal(degreeCelsius);
};

function toOneDecimal(input){
  return Math.round(input * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
