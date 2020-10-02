const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var divisions = [];
var plinkos = [];
var particles = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,height,480,20)
  for (var k = 0; k <=width; k=k+80){
    divisions.push(new Ground(k, height-divisionHeight/2,10,divisionHeight))
  } 
  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75))
  }  
  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175))
  }  
  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275))
  }  
  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375))
  }  
}

function draw() {
  background(50,100,150);  
  Engine.update(engine);
  ground.display();
  for(var k = 0; k<divisions.length; k++){
    divisions[k].display()
  }
  for(var j = 0; j<plinkos.length; j++){
    plinkos[j].display()
  }
  for(var j = 0; j<plinkos.length; j++){
    plinkos[j].display()
  }
  for(var j = 0; j<plinkos.length; j++){
    plinkos[j].display()
  }
  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375))
  }  
  if (frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
    console.log(particles[0])

  }
    for(var j = 0; j<particles.length; j++){
      particles[j].display()
    
  }
  
  drawSprites();
}