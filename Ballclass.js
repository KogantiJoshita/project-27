class Ball{
    constructor(x,y,width,height) {
        var options = {
           isStatic: true,
            //restitution:0.6,
            //friction:0.5,
            //density:1.2,
        }
        this.body = Bodies.circle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
       fill("yellow")
       ellipse(0,0,this.width,this.height);
        pop();
      }
}