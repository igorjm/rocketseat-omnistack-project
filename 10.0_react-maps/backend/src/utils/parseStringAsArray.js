module.exports = function parseSTringAsArray(arrayAsString) {
  return arrayAsString.split(",").map(tech => tech.trim());
};
