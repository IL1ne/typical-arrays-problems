
exports.min = function min (array) {
  if (Array.isArray(array) && array.length) {
    minElement = array[0];
    array.forEach(function (element) {
      if (element < minElement) {minElement = element}
    });
    return minElement;      
  }
  return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length) {
    maxElement = array[0];
    array.forEach(function (element) {
      if (element > maxElement) {maxElement = element}
    });
    return maxElement;
    }
  return 0;
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length) {
    const reducer = (accumulator, currentValue) => (accumulator + currentValue)
    return array.reduce(reducer) / array.length;
    }
  return 0;
}
