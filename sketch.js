
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1;
var roof;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	bob1=new bob(200,550,20);
  roof=new roof(300,500,20,10);
  rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  roof.display();
  rope.display();
  drawSprites();
 
}



