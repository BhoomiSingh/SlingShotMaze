const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint  = Matter.Constraint;

var engine, world;
var ground1, ground2;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12,box13;
var box14,box15,box16,box17,box18;
var box19,box20,box21,box22;
var box23,box24,box25;
var box26,box27;
var box28;
var slingShot;
var mainBox;
function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(500,400,300,20);
  box1 = new Box(420,350,25,50);
  box2 = new Box(440,350,25,50);
  box3 = new Box(460,350,25,50);
  box4 = new Box(480,350,25,50);
  box5 = new Box(500,350,25,50);
  box6 = new Box(520,350,25,50);
  box7 = new Box(440,300,25,50);
  box8 = new Box(460,300,25,50);
  box9 = new Box(480,300,25,50);
  box10 = new Box(500,300,25,50);
  box11 = new Box(520,300,25,50);
  box12 = new Box(460,250,25,50);
  box13 = new Box(480,250,25,50);
  box14 = new Box(500,250,25,50);
  box15 = new Box(520,250,25,50);
  box16 = new Box(480,200,25,50);
  box17 = new Box(500,200,25,50);
  box18 = new Box(520,200,25,50);
  box19 = new Box(500,150,25,50);
  box20 = new Box(510,150,25,50);
  mainBox = new MainBox(100,100,90);  
  slingShot = new Chain(mainBox.body,{x:300,y:300});

}

function draw() {
  background(0);  

  Engine.update(engine);
  ground1.display();
  box1.display();
  box1.color = "yellow";
  box2.display();
  box2.color = "purple";
  box3.display();
  box3.color = "blue";
  box4.display();
  box4.color = "grey";
  box5.display();
  box5.color ="pink";
  box6.display();
  box6.color = "yellow";
  box7.display();
  box7.color = "purple";
  box8.display();
  box8.color = "blue";
  box9.display();
  box9.color = "grey";
  box10.display();
  box10.color = "pink";
  box11.display();
  box11.color = "yellow";
  box12.display();
  box12.color = "purple";
  box13.display();
  box13.color = "blue";
  box14.display();
  box14.color = "grey";
  box15.display();
  box15.color = "pink";
  box16.display();
  box16.color = "yellow";
  box17.display();
  box17.color = "purple";
  box18.display();
  box18.color = "blue";
  box19.display();
  box19.color = "grey";
  box20.display();
  box20.color = "pink";
  mainBox.display();
  slingShot.display();
  Matter.Body.setPosition(mainBox.body,{x: mouseX, y:mouseY});
}