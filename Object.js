function object (x, y, acc_x, acc_y, shape) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(acc_x, acc_y);

    this.clr = random(255);
    this.diameter = 40;
    this.canDelete = false; // For testing -- delete on collision

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  this.show = function() {
    stroke(this.clr, 255, 255);
    fill(this.clr, 255, 255);
    if (shape === true) {
      ellipse (this.position.x, this.position.y, this.diameter, this.diameter);
    } else {
      rect(this.position.x, this.position.y, this.diameter, this.diameter);
    }
  }
}
