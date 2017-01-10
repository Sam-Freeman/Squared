function object (x, y, acc_x, acc_y, shape) {
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(acc_x, acc_y);

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  
  }
  
  this.show = function() {
    fill(255);
    if (shape === true) {
      point (this.position.x, this.position.y, 20, 20);
      
    } else {
      rect(this.position.x, this.position.y, 5, 5);
    }
  }
  
}