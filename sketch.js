const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var groundm,ground1, ground2;
var hex, hexIMG,polygon;
var slingshot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
 

function preload() {
  hexIMG = loadImage("polygon.png");
}

function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    groundm = new Ground (600,580,1200,20);
    ground1 = new Ground (500,400,300,10);
    ground2 = new Ground (950,350,250,10);

    box1 = new Box (500,400,40,50);

    polygon = Bodies.circle (50,200,20);
    imageMode(CENTER)
    image(hexIMG,polygon.position.x,polygon.position.y,40,40);
    World.add(world,polygon);

    hex = new Polygon (70,150,40,40);
    
    slingshot = new SlingShot(hex.body,{x:100,y:200});
    //ground1
    //level1
   






}

function draw(){
    background("blue");
    Engine.update(engine);

    groundm.display();
    ground1.display();
    ground2.display();

    //polygon.display();
    hex.display();
    slingshot.display();

    box1.display();
}


function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}