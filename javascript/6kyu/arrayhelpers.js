Array.prototype.square = function() {
  return this.map(function(number) {
    return Math.pow(number,2);
  });
}

Array.prototype.cube = function() {
  return this.map(function(number) {
    return Math.pow(number,3);
  });
}

Array.prototype.sum = function() {
  if (this.length === 0) {
    return NaN;
  }
  return this.reduce(function(a, b) {
    return a + b;
  }, 0);
}

Array.prototype.average = function() {
  return this.sum() / this.length;
}

Array.prototype.even = function () {
  return this.filter(function(number) {
      return number % 2 == 0;
    });
}

Array.prototype.odd = function () {
  return this.filter(function(number) {
      return number % 2 !== 0;
    });
}
