class mango{
    constructor(x,y,r){
        var options ={
            restitution : 0.5,
            friction : 0.4,
            density : 0.4,
            isStatic: true

        }
        this.body=Bodies.circle(x,y,r,options);
        this.Image= loadImage("Images/mango.png")
        this.r = r;
        World.add(world,this.body)

      
    }
    display (){
        var pos=this.body.position;
        var angle=this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     imageMode (CENTER);
     image(this.Image,0,0,this.r,this.r);
pop();

    }


}