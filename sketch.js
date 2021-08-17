const Engine=Matter.Engine
const World=Matter.World 
const Bodies=Matter.Bodies

var myworld,myengine
var ball,ground



function setup() {
  createCanvas(800,400);
  rectMode(CENTER)
  ellipseMode(RADIUS)
   var groundOptions={
     isStatic:true
   }
   var ballOptions={
     restitution:0.9
   }
  myengine=Engine.create()
  myworld=myengine.world
  ball=new Bodies.circle(370,20,20,ballOptions)
  World.add(myworld,ball)
  ground=new Bodies.rectangle(400,400,800,20,groundOptions)
  World.add(myworld,ground)

  
}

function draw() {
  Engine.update(myengine)
  background(0);
  fill("blue")  
 ellipse(ball.position.x,ball.position.y,20,20)
 fill("pink")
 rect(ground.position.x,ground.position.y,800,20)
}
