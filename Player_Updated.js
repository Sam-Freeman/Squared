function character() {
    this.position = createVector(500, 190);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 2);
    this.diameter = 40;
    this.hasJumped = false;
    
    this.update = function() {
        this.movePlayer();
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }
    
    this.appear = function() {
        stroke(12, 12, 12);
        fill(12, 12, 12);
        ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
    }
    
    this.movePlayer = function() {
        // Controlling Movement
        if (keyIsDown(68)) {
            this.velocity.x = 10;
        } else if (keyIsDown(65)) {
            this.velocity.x = -10;
        } else {
            this.velocity.x = 0;
        }
        
        // Adding boundaries
        // Horizontal
        if (this.position.x >= 980) this.position.x = 980;
        if (this.position.x <= 20) this.position.x = 20;
        
        this.jump();
        
        this.acceleration.y += 0.4;
        // Vertical
        if (this.position.y >= 472) {
            this.position.y = 472;
            this.acceleration.mult(0);
            this.hasJumped = false;
            this.hasDoubleJump = false;
        }
    }
    
    this.jump = function() {
        if (keyIsDown(32) && this.hasJumped === false) {
            this.velocity.y = -8;            
            this.hasJumped = true;
        }
    }
}