const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
    hexagonImg = loadImage("polygon.png");
}
function setup(){
createCanvas(1600,700);
rectMode(CENTER);

engine = Engine.create();
world = engine.world; 
Engine.run(engine);

 ground1 = new Ground(width/2, 670, width, 20);

 ground2 = new Ground(465, 450, 200, 20);
 block1 = new Block(410,420,30,40);
 block2 = new Block(430,420,30,40);;
 block3 = new Block(460,420,30,40);
 block4 = new Block(490,420,30,40);
 block5 = new Block(520,420,30,40);
 block6 = new Block(430,380,30,40);;
 block7 = new Block(460,380,30,40);
 block8 = new Block(490,380,30,40);
 block9 = new Block(460, 340,30,40);

 ground3 = new Ground(870, 250, 200,20);
 block10 = new Block(810,220,30,40);
 block11 = new Block(840,220,30,40);;
 block12 = new Block(870,220,30,40);
 block13 = new Block(900,220,30,40);
 block14 = new Block(930,220,30,40);
 block15 = new Block(840,180,30,40);;
 block16 = new Block(870,180,30,40);
 block17 = new Block(900,180,30,40);
 block18 = new Block(870, 140,30,40);

 hexagon = Bodies.circle(250,150,20, {friction: 1.0});
 World.add(world,hexagon);
 chain = new Chain(this.hexagon, {x: 250, y: 150});

}
function draw(){
    rectMode(CENTER);
    background(100);

    ground1.display();

    ground2.display();
    fill('red');
    block1.display();
    fill('yellow');
    block2.display();
    fill('green');
    block3.display();
    fill('blue');
    block4.display();
    fill('grey')
    block5.display();
    fill('orange');
    block6.display();
    fill('red')
    block7.display();
    fill('skyblue')
    block8.display();
    fill('pink');
    block9.display();

    ground3.display();
    fill('red');
    block10.display();
    fill('yellow');
    block11.display();
    fill('green');
    block12.display();
    fill('blue');
    block13.display();
    fill('grey')
    block14.display();
    fill('orange');
    block15.display();
    fill('red')
    block16.display();
    fill('skyblue')
    block17.display();
    fill('pink');
    block18.display();

    imageMode(CENTER);
    image(hexagonImg, hexagon.position.x, hexagon.position.y, 40,40);
    chain.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.hexagon, {x: mouseX, y: mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
    if (keyCode === 32 ){
        chain.attach(this.hexagon);
    }
}