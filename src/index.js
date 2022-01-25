
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (typeof matrix === 'undefined') {
    return [];
  }
  const coll = [];
  matrix.forEach((element, index) => {
    let item = index % 2 === 0 ? element : element.sort((a, b) => b - a);
    coll.push(...item);
  });
  return coll;
}