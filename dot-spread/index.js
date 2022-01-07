const body = document.body;
const wth = 70;
const mult = 24;
const width = Math.floor(innerWidth - mult);//?
const height = Math.floor(innerHeight - mult);
const wsize= Math.floor(width/wth);//?
const hsize = Math.floor(height/wth);//?
const El = [];
let cnt = 1;
let c = 1;
let r = 1;


   for(let i=1;i < wsize;i++){
        for(let j=1;j < hsize;j++){
          let e = elm("div",c,r,c);
           El.push(e);
       c++;
      }
        r++;
        c=1;
    }
   



El.forEach((item) => {
  const app = document.querySelector(".app");
  item.style.animationDelay=`${cnt}*5ms`;

   app.appendChild(item);
   cnt+=1;
});
// function rand(){
//   return Math.random();
// }
 
function elm(e,d,f,g) {
  
  let em = document.createElement(e);
  em.classList.add("box");
  em.id=`box${d}`;
  let E=cnt;
  let tnt=Math.floor(Math.random()*360);
let clr=Math.floor(Math.random()*90);//?

  em.style=`align-items:stretch :center;grid-column:${f};
  grid-row:${g};background-color:hsl(${tnt},${(clr% 100)}%,${clr}%); width:${wth%clr}px;height:${wth%clr}px;`;
  cnt += 1;
 //?
  return em;
}
let box = document.querySelectorAll(".box");

 
for (let b in box){
  let e=El[b]; 
   let time= (Math.random()*10)/(Math.random()*-10);
  if(e != undefined){El[b].style.setProperty('--randomnum', time +'s');}
  

  }
  