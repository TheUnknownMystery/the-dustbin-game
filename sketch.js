//constant for engine,world,body and bodies(object).......
const Engine   = Matter.Engine;

const World    = Matter.World ;

const Bodies   = Matter.Bodies;

const Body     = Matter.Body  ;

//variables for ball and ground and dustbin....

var ball,ground_1,dustbin_1,dustbin_2,dustbin_3;


function setup() {

//creating canvas of size 990,400.....

	createCanvas(990, 400);

 //nameSpacing the engine.....

  engine = Engine.create();
  
	world  = engine.world;

  //Create the Bodies Here and making the engine run....

    ball         =  new paperBall(100,100,20,20);

    ground_1     =  new ground(490,394,1000,20)

    dustbin_1    = new dustbin(400,400,20,20)

   Engine.run(engine);
    }


function draw() {
 //making background of color black(0)
   background(0);

 //updaing engine

  Engine.update(engine);

  rectMode(CENTER);

 //displaying 
  ball.display();

  ground_1.display();

  dustbin_1.display();
  
 
               }



function keyPressed(){

 //if key pressed up arrow /up button then it will apply force

 if(keyCode === UP_ARROW){

 Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:85})

                         }

                    }



