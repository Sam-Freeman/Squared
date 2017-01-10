var objectFall = [];
var objectSide = [];
var py;

function setup() {
  createCanvas(1000, 500);
  stroke(255);
  strokeWeight(40);
  py = new player();
  
}

function draw() {
  background(41);
  py.update();
  py.show();
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
    
    if (objectSide[j].position.x < -10 || objectSide[j].position.x > 1010)
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
  
    if (objectFall[i].position.y > 500) 
      objectFall.splice(i, 1);
    
  }
}