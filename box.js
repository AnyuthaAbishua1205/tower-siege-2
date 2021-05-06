class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
      }
      display(){

        var angle=this.body.angle;
        var pos= this.body.position;

        push()
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("pink");
        rect (pos.x,pos.y,this.width,this.height);
        pop();

        
        if (this.body.speed < 3){
          this.display();
        }
        else{
          World.remove (world,this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          pop()
        }
      }
}