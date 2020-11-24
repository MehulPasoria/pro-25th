
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj,paperObject,groundObject;

function preload()
{
	
}

function setup() {
	createCanvas(1200,800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paperObject=new paper(200,450,70);
	dustbinObj=new dustbin(1100,650);
	groundObject=new ground(width/2,670,width,20);

	Engine.run(engine);
  
}


function draw() {
  background(0); 
  rectMode(CENTER);
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display(); 
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
    	
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}




