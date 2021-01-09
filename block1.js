class Block1 {
    constructor(x, y, width, height) {
        var options = {
            'restitution': 0.4,
            'friction': 0.5,
            'density': 2.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibilty = 255;


        World.add(world, this.body);
    }
    display() {
        push();
        var pos = this.body.position;
        rectMode(CENTER);
        stroke(0);
        strokeWeight(1);
        fill(255, 0, 0);
        rect(pos.x, pos.y, this.width, this.height);
        if(this.body.speed > 3){
            this.Visibility = this.Visibilty - 5;
            tint(255, this.Visibilty);
            World.remove(world, this.body)
        }
        pop();
    }
};
