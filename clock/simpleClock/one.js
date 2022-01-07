

class container {
   constructor(x, y, image) {
      this.x = x;
      this.y = y;
      this.image = image;

      this.display = function (image) {
         imageMode(CENTER);
         image(this.image, this.x, this.y);

         this.update = function () {
            this.x = this.x + random(-1, 1);
            this.y = this.y + random(-1, 1);
         };
      };
   }
}
class Digital{
    constructor(){
     let t=this;
         t.hr = hour();
         t.min = minute();
         t.sec = second();
         t.mill = millis();

      }
      render()
      {
        this.cratetext=(a,b,c,d)=>{noFill();

        stroke(0);
        strokeWeight(2);
        //text for time
        textSize(30);
        text(t.hr + ':' + t.min + ':' + t.sec+':'+ t.mill, 10, 50);
    };
        angleMode(DEGREES);
        rotate(-90);
    
       this.im= new image(sechand, 0, 0, 100, 100);
        this.Clock=()=>{this.beginShape(arc);
        t.end1 = map(t.mill, 0, 60, 0, TWO_PI);
        arc(0, 0, 300, 300, 0, t.end1);
    
        endShape();
        beginShape(arc);
        t.end2 = map(t.min, 0, 60, 0, 360);
        arc(0, 0, 280, 280, 0, t.end2);
        
    
        endShape();
        beginShape(arc);
        t.end3 = map(t.hr % 12, 0, 12, 0, 360);
        stroke(0, 255, 0, 100);
        fill(200, 0, 0, 100);
        arc(0, 0, 260, 260, 0, t.end3);
    
        endShape();
        beginShape(arc);
        t.end4 = map(t.mill, 0, 1000, 0, TWO_PI);
        fill(255, 0, 0, 100);
        arc(0, 0, 240, 240, 0, t.end4);
    
        endShape();
      };
        this.Unknown=()=>{   // strokeWeight(6)
          // stroke(0)
          // fill(100,50)
          // strokeCap(ROUND)
          // ellipse(0, 0, 360, 360);
          //rotate(sec)
          // line(0, 100,0, 45);
          // //ellipse(x, y, w, [h])
    
    
    
         //  for (var i = 0; i < 60; i++) {
         //     push();
         //     rotate(this.sec, TWO_PI * i);
         //     translate(360, 0);
         //     point(0, 0);
         //     for (var j = 0; j < 24; j++) {
         //        push();
         //        rotate(this.sec);
         //        translate(this.y, this.x);
         //        rotate(this.mill);    
         //        point(0, 0);
         //        pop();
         //     }
         //     translate();
         //     pop();
         //  }
    };
    
    
      }
       
    }


function preload() {
   cl=build();
}
function build(){
   this.img=new container(0,0,loadImage('/simpleClock/images/purzen_Clock_face_web.webp'));
   this.sechand = new container(0, 0, loadImage('/simpleClock/images/modern_s.png'));
   this.minhand = new container(0, 0, loadImage('/simpleClock/images/modern_m.png'));
   this.hrhand = new container(0, 0, loadImage('/simpleClock/images/modern_h.png'));
   this.millhand = new container(0, 0,loadImage('/simpleClock/images/modern_dot.png'));
return this;
}

function setup() {
    createCanvas(400, 400, "2D");
  
    //background(0);
    rectMode(CENTER);
  
}


function draw() {
  let h=cl.hrhand;
  let face=cl.img;
console.log(face);

  
 angleMode(DEGREES);
    background(100);   
    noFill();
    stroke(0);
    strokeWeight(2);
    
    const hr = hour() % 12;
    const min = minute();
    const sec = second();
    const mill = millis();
let end1 = map(mill, 0, 60, 0, TWO_PI);
let end2 = map(min, 0, 60, 0, 360);
let end3 = map(hr, 0, 12, 0, 360);
let end4 = map(sec, 0, 1, 0, TWO_PI-0.3);
   textSize(30);
    translate(200, 200, [200]);
    //clockeFace
   image(face.image, -151, -151,300,300);
    push();
    beginShape(arc);
  
    fill(50, 100, 255, 50);
    arc(0, 0, 300, 300, 0, 360);
   
    endShape();
     
    pop();
    
    // rotateupright  
 
    
    beginShape(arc);
    strokeWeight(10);
    stroke(0, 255, 0, 250);
   

    arc(0, 0, 300, 300, 0, end1);
    push();
    rotate(end1);
    image(cl.sechand.image, -6, -65);
pop();
    endShape();
    fill(100, 255, 200, 100);
    
    beginShape(arc);
    stroke(0, 0, 200, 250);    
    arc(0, 0, 280, 280, 0, end2);
    push();
    rotate(end2);
    image(cl.minhand.image, -6, -65);
pop();
    endShape();
    
    beginShape(arc);    
    stroke(255, 52, 0, 200);
    strokeWeight(10);
    fill(200, 0, 0, 100);
    arc(0, 0, 260, 260, 0, end3); 
 push();
      rotate(-30,0,0);
      strokeWeight(1);
      stroke(0, 0, 0);
      rotate(end3,0,0);
      
      ellipse(hr,0,45,45);
      fill(255);
      text(hr,hr,-147);
   pop();
   push();
   rotate(end3);
   image(cl.hrhand.image, -6, -65);
pop();
    endShape();
     stroke(0, 0, 255);
   noFill();
   
    beginShape(arc); 
 push();
    arc(0, 0, 220, 220, 0, end4);
    push();
    rotate(end4);
    image(cl.sechand.image, -6, -65);
pop();
    rotate(-30,0,0);
    strokeWeight(1);
      stroke(0, 0, 0);
      rotate(end2 ,0,0);
      ellipse(min+100,100,45,45);
      fill(255);
      text(min,107,110);
   pop();
   
    endShape();


    // strokeWeight(6)
    // stroke(0)
    // fill(100,50)
    // strokeCap(ROUND)
    // ellipse(0, 0, 360, 360);
    //rotate(sec)
    // line(0, 100,0, 45);
    // //ellipse(x, y, w, [h])



    for (var i = 0; i < 60; i++) {
   
        push();
        strokeWeight(2);
        stroke(255, 100, 0);
        rotate(sec, i/TWO_PI );
        fill(255);
        textSize(20);
        text(hr + ':' + min + ':' + sec, 10, 50);
        textAlign(CENTER);

        noStroke();
        noFill();
        line(0, 100, 0, 45);

        pop();
       

    }
}