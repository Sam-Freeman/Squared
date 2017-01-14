function checkCollision(player, obj, shape) {
    
    // Determine the shape of the object: either a square(sq) or an elipse(el), sets the boundaries accordingly
    // diameter_extra_a is for right side and bottom of obj
    // diameter_extra_b is for left side and top of obj [0 for sq as coordinates at top left]
    var diameter_extra_a;
    var diameter_extra_b;
    shape === "sq" ? (diameter_extra_a = obj.diameter, diameter_extra_b = 0) : (
        diameter_extra_a = obj.diameter / 2,
        diameter_extra_b = diameter_extra_a
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