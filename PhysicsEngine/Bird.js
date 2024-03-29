class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("sprites/bird.png")
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("red");
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };
  
  /*class Bird extends baseClass {
    constructer(x,y){
      super(x,y,50,50);
      this.image = loadImage("sprites/bird.png");

    }

  };*/
  