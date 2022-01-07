function get(a) {
    let elm = document.querySelector(a);
    return elm;
}

function create(a, b) {
  let elm = document.createElement(a);
  elm.classList.add(b);
  return elm;
}
class tm {
  constructor() {
    const d = new Date();
    this.day = d.getDay();
    this.hr = d.getHours();
    this.mn = d.getMinutes();
    this.sc = d.getSeconds();
    // console.log(this.hr-12);
    // console.log(this.mn);
    // console.log(this.sc);
    return this;
  }
}

let time= new tm();
let day=time.day;
let tmsc=time.sc;
let tmmin=time.mn;
let tmhr=time.hr;
let days=[`sunday`,
`monday`,
`tuesday`,
`wednesday`,
`thurday`,
`friday`,
`saterday`];

function angled(a){
  return 360/60*a;
}
console.log(angled(tmhr));
let nums = [];
console.log(days[day]);
let count = new Array(0);
const clrScl=innerWidth/100;
const body = get("body");
const mainWrap = create("div", "mainWrap");
const innerWrap = create("div", "innerWrap");
const colorWheel = create("div", "colorWheel");
const circleInner = create("div", "circleInner");
const dial = create("div", "dial");
const bigHand =create("hr","bighand");
const littleHand =create("hr","littlehand");
// const time=document.documentElement.setAttribute('--time', timer);

////////////////////////////////////////////////////////////////
// working her on the hand to clock connectiomn
littleHand.style.transform=`rotate3d(0,0,1,${0}deg)rotateZ(${tmsc}deg)translateX(-2%)`;
bigHand.style.transform=`rotate3d(0,0,1,${0}deg)rotateZ(${tmhr}deg)translateX(-2%)`;
const angle = Math.PI * 2;
const Deg = radians_to_degrees(angle);
const segments = new Array(Deg);

const arc = radians_to_degrees(angle);
const segmentSize = arc / segments.length;

function radians_to_degrees(radians) {
  var pi = Math.PI;
  return radians * (180 / pi);
}




for (let sg = 0; sg <= segments.length; sg++) {
  const sect = create("div", "section");
  colorWheel.append(sect);

  const sections = document.querySelectorAll(".section");
  if (sections) {
    let cnt;

    sections.forEach((sct) => {
      cnt = segmentSize;
      let s = sct.style;
      s.transform = `rotate(${cnt}deg)scale(1)translateY(${clrScl}em)`;
      sct.style.background = `hsl(${cnt},100%,50%)`;
      //  s.animationDelay=`${count}s` 
      count.length += cnt;

      cnt = cnt += 35;
      if (count.length >= 360) {
        return;
      }
      return s;
    });
  }
}


function Span() {
  let view = document.documentElement.clientWidth; //?
  let div = 1; //num count multiplier 1=12
  let cnt = 12 * div; //numcount
  let num = 1; //
  let plus = 30;
  let multi = (30 / div);
  let fontsize = ((17/cnt)*(multi*div));

  while (num <= cnt) { //mult*2
    sn = create("div", "clock");
    sn.id = ` num${num}`;
    sn2 = create("span", "numbers");
    sn2.innerText = num;
    sn.append(sn2);
    sn.style =`
    transform:translate(0, 0)rotateZ(${plus}deg)rotateX(0deg)rotateY(0deg);`;
    sn2.style = `
    display:grid; 
       background:transparent;
       text-align: center;
       text-justify: auto;       
       transform:translate(0,70%);
       `;
    nums.push(sn);
    num++;
    plus += multi;
    Pushspan(fontsize);
  }
}

function Pushspan(a) {
  for (let n in nums) {

    let numstyle = nums[n].style;
    numstyle.background='transparent';
    numstyle.height='1em';
    numstyle.width='1em';
    circleInner.appendChild(nums[n]);
    numstyle.fontSize=`{a}px`;
  }
}
Span();
if (body) {
  body.append(mainWrap);
  mainWrap.append(innerWrap);
  
  innerWrap.append(colorWheel);
  innerWrap.append(circleInner);
  innerWrap.appendChild(dial);
  dial.appendChild(littleHand);
  dial.appendChild(bigHand);
}