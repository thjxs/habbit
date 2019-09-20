function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.r = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};

module.exports = Point;
