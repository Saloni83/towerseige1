const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;
var ground1 ;
var polygonImg;
var slingShot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,
box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var polygonshoot;
var sling;

function setup() {

    createCanvas(800, 400);
  
    engine = Engine.create();

    world = engine.world
  
    ground1 = new Ground(170, 200, 320, 20);
  
    //first level
    box1 = new BoxB(200, 182, 20, 20);
  
   box2 = new BoxB(220, 182, 20, 20);
  
    box3 = new BoxB(240, 182, 20, 20);
  
  box4 = new BoxB(260, 182, 20, 20);
  
  box5  = new BoxB(280, 182, 20, 20);
  
  box6= new BoxB(300, 182, 20, 20);
  
    box7 = new BoxB(320, 182, 20, 20);
  
    //second level
   box8  = new BoxG(201, 2, 20, 20);
  
   box9 = new BoxG(220, 2, 20, 20);
  
   box10 = new BoxG(240, 2, 20, 20);
  
  box11 = new BoxG(260, 2, 20, 20);
  
box12  = new BoxG(280, 2, 20, 20);
  
    box13 = new BoxG(300, 2, 20, 20);
  
   box14 = new BoxG(320, 2, 20, 20);
  
    //third level
  box15  = new BoxR(202, 182, 20, 20);
  
    box16 = new BoxR(220, 182, 20, 20);
  
   box17 = new BoxG(240, 182, 20, 20);
  
    box18 = new BoxG(260, 182, 20, 20);

  box19 = new BoxG(280, 182, 20, 20);
  
 box20 = new BoxG(300, 182, 20, 20);
  
   box21 = new BoxG(320, 182, 20, 20);
  
    polygonshoot = new Polygon(110, 100, 20, 20);
  
    sling = new SlingShot(polygonshoot.body, { x: 70, y: 90 });
  
    Engine.run(engine);
  
    
    

   

}



function draw() {
    background(56, 44, 44);


    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();


}

