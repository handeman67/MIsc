
var flag = 0;
var element ;
var X,Y;
var elem = document.getElementById('div1');


function rotated() {  
  document.getElementById('div1').style.transform = 'rotateX('+rotate()+'deg)rotateY('+rotate1()+'deg)rotateZ('+rotate2()+'deg)scale('+Size()+')';
  document.getElementById('span1').innerHTML = this.value + 'deg';

}
function rotate (value) {
return value;
}
function rotate1 (value) {
  return value;
}
function rotate2 (value) {
  return value;
}
function Size (value) {
  return value;
}
// onclick(function () {
//   console.log('HelloWorld! clicker')
// }, false)
// onmouseup.Mup
// Mup = (function () {
//   if (flag === 0) {
//     console.log('click')
//   } else if (flag === 1) {
//     console.log('drag')
//   }
// }, false)
