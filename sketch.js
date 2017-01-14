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
  background(60, 20, 100);
  py.update();
  py.appear();
  
  spawnObjects();
    
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

function spawnObjects() {
    // Side-Moving Objects
    // Determine whether left or right 
    var r = random(1);
    // May change this to an if, else if statement, as easier to read
    ////////////////////
    r < 0.005 ? objectSide.push(new object(-10, 480, Math.floor(random(3, 8)), 0, true)) : r < 0.01 ? objectSide.push(new object(1010, 480, Math.floor(random(-3, -8)), 0, true)) : 0;
    ////////////////////
  
    // Move, show, and check if still on screen (if not, remove)
    for (var j = 0; j < objectSide.length; j++) {
        objectSide[j].update();
        objectSide[j].show();
    
        if (objectSide[j].position.x < -10 || objectSide[j].position.x > 1010 || objectSide[j].canDelete === true)
            objectSide.splice(j, 1);
    
    }
  
    // Falling objects
    // Determine speed at which they appear
    random(1) < 0.02 ? objectFall.push(new object(Math.floor(random(0, 1000)), -20, 0, Math.floor(random(3, 8)), false)) : 0;
    
}

