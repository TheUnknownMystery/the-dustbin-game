
//creating class for paper ball......

class paperBall{
   //making constuctor to build the object and define properties

 //giving arguments to the constructor 

   constructor(x,y,width,height){

 //making paper ball a static object(non-moving object)
  
  var options={

  isStatic   : false ,

  restitution:  0.4 ,

  friction   :  0.3 ,

  density    :  1.2

             }
 
//making body by arguments(position and size).....

 this.body   =  Bodies.rectangle( x , y , width , height , options );

 this.width  =  width;

 this.height = height;

 World.add(world,this.body);

                               }

  display(){
//nameSpacing the position of a object.....

 var pos= this.body.position

 //making the object white color......

 fill("white");

 //defining (how to display the object??)(shape,Position.x,position.y)
 ellipse(pos.x,pos.y,this.width,this.height);


          }
            }