class Bird extends Base { 
  

    constructor(x,y,b,h) {
      
      super(x,y,b,h);

    }

 display()  {
     this.body.position.x = mouseX;
     this.body.position.y = mouseY;
   
     fill("red");

     super.display();

 }
 
}