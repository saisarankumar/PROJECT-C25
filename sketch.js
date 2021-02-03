//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

//create variables
var dustbinObj,groundObject, paperObj;	
var world;


function setup() {
  //create the canvas
  createCanvas(1600, 700);
  //dimensions are from center
	rectMode(CENTER);

  //create the engine
	engine = Engine.create();
	world = engine.world;
  
  //create bodies
	groundObject = new Ground(width/2,670,width,20);
  dustbinObj = new Dustbin(1200,650);
	paperObj = new Paper(200, 100, 40, 40);

  //run the engine
	Engine.run(engine);
  
}


function draw() {
  //dimensions are from center
  rectMode(CENTER);
  //create background
  background(230);
 
  //display bodies
  groundObject.display();
  dustbinObj.display();
  paperObj.display();  

  
  

}

function keyPressed()	{
  //give controls for paperObj
  if(keyCode===UP_ARROW)	{
    Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:90,y:-180});
  }
}
