
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let noMatrix = matrix.flat();
  var sorted = noMatrix.sort(function(a, b) {
    return a - b;
  });
  return sorted;
}
