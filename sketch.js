

function setup() {
    createCanvas(1000, 500);
    colorMode(HSB);
    stroke(255);
    GAMESTATE_CURRENT = GAMESTATE_MENU;
    py = new character();
}

function draw() {
    background(60, 20, 100);
    switch (GAMESTATE_CURRENT) {
      case GAMESTATE_MENU:
        MainMenu();
        break;
      case GAMESTATE_PLAYING:
        RunGame();
        break;
      case GAMESTATE_DEAD:
        DeadScreen();
        break;
      default:

    }
}
