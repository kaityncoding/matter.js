
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball, surface, ball2
function setup()
{
  createCanvas(400,400);
engine = Engine.create()
world = engine.world


var balloptions = {
  restitution : 0.8
}

ball = Bodies.circle(100, 10, 20, balloptions)
World.add(world, ball)
console.log(ball)
var surfaceoptions = {
  isStatic : true
}
ball2 = Bodies.circle(110, 10, 20, balloptions)
World.add(world, ball2)


surface = Bodies.rectangle(50, 300, 200, 10, surfaceoptions)
World.add(world, surface)


}

function draw() 
{
  background(51);
  Engine.update(engine)
 ellipse(ball.position.x, ball.position.y, 20)
rect(surface.position.x, surface.position.y, 200, 10)
ellipse(ball2.position.x, ball2.position.y, 20)

}

