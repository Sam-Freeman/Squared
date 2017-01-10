function player() {
  var p = new object(500, 480, 0, 0, true);
  
  this.jump = function() {
    p.velocity.y = -5;
    p.acceleration.y += 0.9;
  }
  
  this.update = function() {
    if(keyIsDown(68)) {
      p.velocity.x = 10;
    } else if (keyIsDown(65)) {
      p.velocity.x = -10;
    } else {
      p.velocity.x = 0;
    }
    
    if (keyIsDown(32)) {
      this.jump();
    }
    
    while (p.position.y < 780) {
      p.acceleration.y = 1;
    }
    
    //if (keyIsPressed === false) p.velocity.mult(0);
    p.update();
  }
  
  this.show = function() {
    p.show();
  }
}