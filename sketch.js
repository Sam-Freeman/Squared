var objectFall = [];
var objectSide = [];
var py;

function setup() {
    createCanvas(1000, 500);
    colorMode(HSB);
    stroke(255);
    py = new character();
  
}

function draw() {
  background(41);
  py.update();
  py.appear();
  // Side-Moving Objects
  // Determine whether left or right 
  var r = random(1);
  if (r < 0.005) {
    objectSide.push(new object(-10, 480, Math.floor(random(3, 8)), 0, true));
  } else if (r > 0.005 && r < 0.01) {
    objectSide.push(new object(1010, 480, Math.floor(random(-3, -8)), 0, true));
  }
  
  // Move, show, and check if still on screen (if not, remove)
  for (var j = 0; j < objectSide.length; j++) {
    objectSide[j].update();
    objectSide[j].show();
    
    if (objectSide[j].position.x < -10 || objectSide[j].position.x > 1010 || objectSide[j].canDelete === true)
      objectSide.splice(j, 1);
    
  }
  
  // Falling objects
  // Determine speed at which they appear
  if (random(1) < 0.02) {
    objectFall.push(new object(Math.floor(random(0, 1000)), -20, 0, Math.floor(random(3, 8)), false));
  }
  
  // Move, show, and check if still on screen (if not, remove)
  for (var i = 0; i < objectFall.length; i++) {
    
    objectFall[i].update();
    objectFall[i].show();
  
    if (objectFall[i].position.y > 500 || objectFall[i].canDelete === true) 
      objectFall.splice(i, 1);
    
  }
    
     
    // Check collisions between player and objects
    for (var t = 0; t < objectFall.length; t++) checkCollision(py, objectFall[t], "sq");
    for (var s = 0; s < objectSide.length; s++) checkCollision(py, objectSide[s], "el");
    
}

function checkCollision(player, obj, shape) {
    
    // Determine the shape of the object: either a square(sq) or an elipse(el), sets the boundaries accordingly
    // diameter_extra_a is for right side and bottom of obj
    // diameter_extra_b is for left side and top of obj [0 for sq as coordinates at top left]
    var diameter_extra_a;
    var diameter_extra_b;
    shape === "sq" ? (diameter_extra_a = obj.diameter, diameter_extra_b = 0) : (
        diameter_extra_a = obj.diameter / 2,
        diameter_extra_b = diameter_extra_right
    );
    
    
    // As player is an elipse, the position is in the centre of the elipse - therefore the radius (half the diameter) needs to be accounted for.
    
    // Different cases
    // Right Side [of player]
    var caseA1 = player.position.x + player.diameter/2 >= obj.position.x - diameter_extra_b && player.position.x + player.diameter/2 <= obj.position.x + diameter_extra_a;
    
    // Left Side [of player]
    var caseA2 = player.position.x - player.diameter/2 >= obj.position.x - diameter_extra_b && player.position.x - player.diameter/2 <= obj.position.x + diameter_extra_a;
    
    // Top [of player]
    var caseB1 = player.position.y - player.diameter/2 >= obj.position.y - diameter_extra_b && player.position.y - player.diameter/2 <= obj.position.y + diameter_extra_a;
        
    // Bottom [of player]
    var caseB2 = player.position.y + player.diameter/2 >= obj.position.y - diameter_extra_b && player.position.y + player.diameter/2 <= obj.position.y + diameter_extra_a;
    
    // Checks for collision
    if ((caseA1 === true || caseA2 === true) && (caseB1 === true || caseB2 === true)) {
        console.log("Collided");
        obj.canDelete = true;
    }
    
    
}