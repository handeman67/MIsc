

let xS =  innerWidth- 25;
let yS =  innerHeight- 30;
let Asize=25;
let rows=Math.floor(xS/Asize);
let cols=Math.floor(yS/Asize);
let row =new Array(rows);
let col = new Array(cols);
let zed = new Array(row);


/*? */

 
 
Colr = (Color) => {
Colors=[]
Color=[]
   Color.r=Math.floor(Math.random()*255);
  Color. g=Math.floor(Math.random()*255);
 Color.b=Math.floor(Math.random()*255);
  Colors.push(Color.r,Color.g,Color.b)
return Colors
}
let C=Colr()

function setup(){
createCanvas(xS, yS,WEBGL);

}

function draw(){
background(0,0,0,100);
ellipseMode(CENTER)
translate(-width,-height,-width);
let spot=()=>{
for (let i =0;i< row.length;i++){
 var r=C[0]/*?*/
for (let j =0;j< col.length;j++){
var g=C[1]/*?*/
for (let k =0;k<zed.length;k++){
var b=C[2]/*?*/
   stroke(r,g,b);
  strokeWeight(5)
fill(255)
  
 push()
 translate(Asize+Asize*2*i,Asize+Asize*2*j,Asize+Asize*2*j);
let rowPoint=point(0,0,0)
// let v=vertex(i,j)

pop()

}}
}

};
spot()
// let spin=map(mouseX,mouseY,0,TWO_PI)
// spin
// rotate(spin)
box(Asize, Asize, Asize+mouseX, 1,1)



}
Colors
Colr.Color
row
col
zed
let f=r
f

