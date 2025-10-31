const mi = 0.62;
const km = 1.60934;
function convert(number, string) {
  let result;
  if (string === "mi") {
    result = number * km;
    return result;
  } else if (string === "km") {
    result = number * mi;
    return result;
  } else {
    return null
  }
}
      