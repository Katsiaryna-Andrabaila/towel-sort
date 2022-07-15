
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix === [] || matrix === undefined) {
    return result;
  } else if (matrix.length % 2 === 0) {
    for (let i = 1; i < matrix.length; i += 2) {
        result = result.concat(matrix[i - 1], (matrix[i].sort(function(a, b) { return b - a;})));
    }
    return result;
  } else {
    for (let i = 1; i < matrix.length; i += 2) {
        result = result.concat(matrix[i - 1], (matrix[i].sort(function(a, b) { return b - a;})));
    }
    return result.concat(matrix[matrix.length - 1]);
  }
};
