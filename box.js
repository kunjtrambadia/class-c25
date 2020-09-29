class Box  extends Base {
  

   constructor(x,y,b,h) {
     super(x,y,b,h); 
   }

display()  {
   
super.display();

}

}

class Ground{

constructor (groundColor) {
console.log (groundColor);
  var options = {
     isStatic:true
   }
   
   this.body = Bodies.rectangle(600,400,1200,10,options)
   World.add(myWorld,this.body)
   this.color = groundColor;
}
display() {
 
  fill(this.color);
  rectMode(CENTER);
  rect(this.body.position.x,this.body.position.y,1200,10);
  
}


}
