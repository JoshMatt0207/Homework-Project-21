
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,leftSide
var rightSide
function preload()
{
	
}

function setup() {
	createCanvas(1200, 900);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restitution:0.3

	
}
var opt={
	isStatic:true
}


	ball=Bodies.circle(400,600,50,ball_options)
	World.add(world,ball)

	ground=Bodies.rectangle(600,900,1200,30,opt)
	World.add(world,ground)

	Engine.run(engine);

	leftSide=new Ground(600,1100,50,60)
	rightSide=new Ground(900,1100,50,60)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ellipse(ball.position.x,ball.position.y,50)

  rect(ground.position.x,ground.position.y,1200,30)

  leftSide.display()
  rightSide.display()
}
 function keyPressed(){
	 if(keyCode===Up_Arrow){
		 Matter.Body.applyForce(ball,250,3)
	 }
 }


