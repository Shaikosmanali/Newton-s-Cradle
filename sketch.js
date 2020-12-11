const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var ball1,ball2,ball3,ball4,ball5;
var sling1,sling2,sling3,sling4,sling5;
var engine;
var world;

function setup (){
    createCanvas(1200,800);

    engine=Engine.create();
    world=engine.world;

    ball1=new Ball(200,400,100,100);
    ball2=new Ball(400,400,100,100);
    ball3=new Ball(600,400,100,100);
    ball4=new Ball(800,400,100,100);
    ball5=new Ball(1000,400,100,100);

    sling1=new Sling(ball1.body,{x:200,y:100});
    sling2=new Sling(ball2.body,{x:400,y:100});
    sling3=new Sling(ball3.body,{x:600,y:100});
    sling4=new Sling(ball4.body,{x:800,y:100});
    sling5=new Sling(ball5.body,{x:1000,y:100});
    
}
function draw(){
    background(12,12,12);
    Engine.update(engine);

    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
    Matter.Body.setPosition(ball2.body,{x:mouseX,y:mouseY})
    Matter.Body.setPosition(ball3.body,{x:mouseX,y:mouseY})
    Matter.Body.setPosition(ball4.body,{x:mouseX,y:mouseY})
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}