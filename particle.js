class Particle {
    constructor(x, y, radius) {
      var options = {
           isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          'mass':10000
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.radius = 10;
      this.color = color(random(0,255),random(0,255),random(0,255))
      World.add(world, this.body);
    }
    display(){
      push();
      ellipseMode(RADIUS);
      fill(this.color);
      ellipse(this.body.position.x, this.body.position.y, 10, 10);
      pop();
    }
  };
  