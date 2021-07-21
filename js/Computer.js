class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.life1 = 'red';
    this.life2 = 'red';
    this.life3 = 'red';

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

  

    World.add(world, this.body);
  }
  life() {
    push();
    textSize(20);
    fill("white");
    text("computer",950,40);
    
    fill(this.life1);
    rect(900,50,70,30);
    fill(this.life2);
    rect(970,50,70,30);
    fill(this.life3);
    rect(1040,50,70,30);
    }
 
  
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
