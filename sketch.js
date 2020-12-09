
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var rope;
var ball1,ball2,ball3,ball4,ball5;

function preload()
{
	
}

function setup() {
  var canvas = createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
   
   //Create the Bodies Here.
   ground = new Ground(400,100,width,60)
   
   ball1 = new Ball(280,450,70,60);
   ball2 = new Ball(340,450,70,60);
   ball3 = new Ball(400,450,70,60);
   ball4 = new Ball(460,450,70,60);
   ball5 = new Ball(520,450,70,60);

   rope1 = new Rope(ball1.body, ground.body, ballDiameter*2,0 );
   rope2 = new Rope(ball2.body,ground.body, ballDiameter*2,0);
   rope3 = new Rope(ball3.body,ground.body, ballDiameter*2,0);
   rope4 = new Rope(ball4.body,ground.body, ballDiameter*2,0);
   rope5 = new Rope(ball5.body,ground.body, ballDiameter*2,0);
   

	 
}


function draw() {
  background(225);
  Engine.update(engine);
  
  ground.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  //drawSprites();
 
}



