//Feel free to change values to see what happens :D
class BALL{
  
  constructor(x,r,acc,col){
    
    this.x =  x
    this.y = height/2
    this.r = r
    this.col = col
    this.acc = acc
  }
  
  show(){
    fill(this.col)
    ellipse(this.x,this.y,this.r)
    
  }
  
  
  move(){
    
    this.x += this.acc
    if(this.x > width-this.r/2){
      
      this.acc = -this.acc
      
    }
    else if(this.x < 0 +this.r/2)
     this.acc = -this.acc
  }
  
}


function setup() {
  createCanvas(400, 400);
  ball1 = new BALL(0+25,25,2,"#00AA99")
  ball2 = new BALL(width-25,25,-2,"#6600ff")
  


  score = 0
}

function draw() {
  background(220);
  
  ball1.show()
  ball1.move()
  
  ball2.show()
  ball2.move()
  
  if(CCollider(ball1,ball2)){
    
    ball1.acc = -ball1.acc
    ball2.acc = -ball2.acc
    
    textSize(32)
    score++
  }
  
  textSize(16)
  fill("black")
  //BALL 1
  text("Ball 1 (blue)",10,30)
  text(`x: ${ball1.x}`, 10, 50);
  text(`y: ${ball1.y}`, 10, 70);
  text(`Diameter: ${ball1.r}`, 10, 90);
  text(`Radius: ${ball1.r/2}`, 10, 110);
  text(`Acceleration: ${ball1.acc}`, 10, 130);
  
  //Ball 2
  text("Ball 2(purple)",width-150,30)
  text(`x: ${ball1.x}`, width-150, 50);
  text(`y: ${ball1.y}`, width-150, 70);
  text(`Diameter: ${ball1.r}`,width-150, 90);
  text(`Radius: ${ball1.r/2}`, width-150, 110);
  text(`Acceleration: ${ball1.acc}`, width-150, 130);
  
  textSize(32)
  fill("red")
  text(`Times collided: ${score}`,width/2-120,height/2+100)
  
}

function CCollider(obj1,obj2){ 

  let distX = obj1.x - obj2.x
  let distY = obj1.y - obj2.y
  
  let dist = sqrt(distX*distX + distY*distY)
  
  if(dist < obj1.r/2 + obj1.r/2){
    
    return true
  }
  else{
    return false
  }
  
}

