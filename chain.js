class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bird.body,
            bodyB:log.body,
            stiffness:1,
            length:10
            }
            this.chain=Constraint.create(options);
            World.add(world,this.chain);
    }
    display(){
        var posa=this.chain.bodyA.position;
        var posb=this.chain.bodyB.position;

        strokeWeight(4);
line(posa.x,posa.y,posb.x,posb.y);
    }
}