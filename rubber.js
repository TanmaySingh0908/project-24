class rubber {
  constructor(x, y,radius) {
    var options = {
        'restitution':0.3,
        'friction':5,
        'density':1.0
    }
    this.body = Bodies.circle(x, y, radius,options);
    this.radius = radius
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill(124, 247, 128);
    ellipse(50, 50,20);
    pop();
  }
};
