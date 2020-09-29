const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

var myEngine;

var myWorld;

var box,box1,ground;

function setup() {
  createCanvas(1200,400);
  
myEngine = Engine.create()
myWorld = myEngine.world;

var color = "red";

ground = new Ground (color);


box = new Box (700,320,70,70);

box1 = new Box (920,320,70,70);

pig = new Pig (810,350,50,50);

log  =  new Log (810,260,PI/2,300);

box2 = new Box (700,240,70,70);

box3 = new Box (920,240,70,70);

pig1 = new Pig (810,220,50,50);

log1  =  new Log (810,180,PI/2,300);

bird  = new Bird (300,300,50,50);

log4  =  new Log (760,120,PI/7,150);

log2  =  new Log (870,120,PI/-7,150);

box4 = new Box (810,160,70,70);

}

function draw() {
  background(255,255,200);  
Engine.update(myEngine)

box.display ();

box1.display ();

ground.display ();

pig.display();

bird.display();

log.display();

box2.display();

box3.display();

pig1.display();

log1.display();

log2.display();

log4.display();

box4.display();
  
}