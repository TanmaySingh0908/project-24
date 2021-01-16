
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var Hammer1;
var stone1 , stone2;
var rubber1,iron1;
function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,height,3000,70);
     
	Hammer1 = new  Hammer(200,200);
	
	stone1 = new stone(700,320,70,70);
	
	rubber1 = new rubber(200,200,50);
	  
	sand1 = new sand(520,200,50)
	sand2 = new sand(520,200,50)
	sand3 = new sand(530,200,50)
	sand4 = new sand(640,200,50)
	sand5 = new sand(650,200,50)
	sand6 = new sand(660,200,50)
	sand7 = new sand(770,200,50)

	iron1 = new iron(900,320,50,50);

	Engine.run(engine);
  
}


function draw() {
  background(50, 166, 168);
  
  ground.display();
  Hammer1.display();
  stone1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  iron1.display();
}



