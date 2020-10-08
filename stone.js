class Stone{
    constructor(x,y,r){
        var options ={
            restitution : 0.5,
            friction : 0.4,
            density : 0.4
           

        }
        this.stone=Bodies.circle(x,y,r,options);
        this.stoneImage= loadImage("Images/stone.png")
        this.r = r;
        World.add(world,this.stone)

      
    }
    display (){
        var pos=this.stone.position;
        var angle=this.stone.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     imageMode (CENTER);
     image(this.stoneImage,0,0,this.r,this.r);
pop();

    }


}