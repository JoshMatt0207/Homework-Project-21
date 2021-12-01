class Ground{
    constructor(x,y,w,h){
        this.x=x
        this.y=y
        this.w=w
        this.h=h


        var opti={
            isStatic:true
        }
        
        this.side=Bodies.rectangle(x,y,w,h,opti)
        World.add(world,this.side)


    }

 display(){
 rect(this.side.position.x, this.side.position.y,this.side.position.w, this.side.position.y,)

 }
}