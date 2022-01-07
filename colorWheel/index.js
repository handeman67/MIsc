function get(a) {
  let elm = document.querySelector(a);
  return elm;
}

function create(a, b) {
  let elm = document.createElement(a);
  elm.classList.add(b);
  return elm;
}
let nums = [];
let count = 0;
const min=100;
const wth=(Math.floor(Math.random()*180))+min;
const body = get("body");
const mainWrap = create("div", "mainWrap");
const innerWrap = create("div", "innerWrap");
const colorWheel = create("div", "colorWheel");
const circleInner = create("div", "circleInner");
const dial = create("div", "dial")

innerWrap.appendChild(dial);
const angle = Math.PI * 2;
const Deg = radians_to_degrees(angle);
const segments = new Array(Deg);

const arc = radians_to_degrees(angle);
const segmentSize = arc / segments.length;

function radians_to_degrees(radians) {
  const pi = Math.PI;
  return radians * (180 / pi);
}

if (body) {
  body.append(mainWrap);
  mainWrap.append(innerWrap);
  innerWrap.append(colorWheel);


};


for (let sg = 0; sg <= segments.length; sg++) {
  const sect = create("div", "section");
  colorWheel.append(sect);

  const sections = document.querySelectorAll(".section");
  if (sections) {
    let cnt = segmentSize;
    const clrScl=innerWidth/wth
    sections.forEach(sct => {
      let s = sect.style;
      let rancolor=`hsla(${cnt},100%,50%,0.1)`
      // s.width=`15em`; 
      // s.height=`5em`;          
      s.transform = `rotate(${cnt}deg)scale(1)translateY(${clrScl}em)`;      
      s.background =rancolor ;
      sect.dataset.colr=rancolor;
      s.color=rancolor;
      const listener=(event) => {
        console.log(event)
      }
       sect.addEventListener('click', listener());
    
      //  s.animationDelay=`${count}s` 
      count += cnt;

      cnt = cnt += 35;
      if (count >= 360) {
        return
      }
      return s
    })
  }
}
innerWrap.append(circleInner);

// function Span() {
//   let view = document.documentElement.clientWidth; //?
//   let div = 2; //num count multiplier 1=12
//   let cnt = 12 * div; //numcount
//   let num = 1; //
//   let plus = 0;
//   let multi = (30 / div);
//   let fontsize = ((17/cnt)*(multi*div)*div);

//   while (num <= cnt) { //mult*2
//     sn = create("div", "clock");
//     sn.id = ` num${num}`
//     sn2 = create("span", "numbers");
//     sn2.innerText = num;
//     sn.append(sn2);
//     sn.style =`
//     transform:translate(0, 0)rotateZ(${plus}deg)rotateX(0deg)rotateY(22deg);`;
//     sn2.style = `
//        display: block;    
//        text-align:center;       
//        background:transparent;
//        text-align: center;
//        text-justify: auto;       
//        transform:translate(0,100%);
//        `;
//     nums.push(sn);
//     num++;
//     plus += multi;
//     Pushspan(fontsize);
//   }
// }

// function Pushspan(a) {
//   for (let n in nums) {

//     let numstyle = nums[n].style;
//     numstyle.background='transparent';
//     numstyle.height='1em';
//     numstyle.width='1em';
//     circleInner.appendChild(nums[n]);
//     numstyle.fontSize=`{a}px`;
//   }
// }
// Span()