
var flag = 0
var element ;
var X,Y;
var elem = document.getElementById('div1');

window.addEventListener('deviceorientation', function (e) {
  // remember to use vendor-prefixed transform property
  elem.style.transform =
    'rotateZ(' + (e.alpha - 180) + 'deg) ' +
    'rotateX(' + e.beta + 'deg) ' +
    'rotateY(' + (-e.gamma) + 'deg)';
})
/* ? */
function rotated(value) {  
  document.getElementById('div1').style.webkitTransform = 'rotateX(' + value + 'deg)'
  document.getElementById('div1').style.msTransform = 'rotateX(' + value + 'deg)'
  document.getElementById('div1').style.MozTransform = 'rotateX(' + value + 'deg)'
  document.getElementById('div1').style.OTransform = 'rotateX(' + value + 'deg)'
  document.getElementById('div1').style.transform = 'rotateX(' + value + 'deg)'
  document.getElementById('span1').innerHTML = value + 'deg'
 value++
}
function rotate (value) {
  document.getElementById('div1').style.webkitTransform = 'rotateY(' + value + 'deg)'
  document.getElementById('div1').style.msTransform = 'rotateY(' + value + 'deg)'
  document.getElementById('div1').style.MozTransform = 'rotateY(' + value + 'deg)'
  document.getElementById('div1').style.OTransform = 'rotateY(' + value + 'deg)'
  document.getElementById('div1').style.transform = 'rotateY(' + value + 'deg)'
  document.getElementById('span1').innerHTML = value + 'deg'
}
function rotate1 (value) {
  document.getElementById('div1').style.webkitTransform = 'rotateX(' + value + 'deg)'
  document.getElementById('div1').style.msTransform = 'rotateX(' + value + 'deg)'
  document.getElementById('div1').style.MozTransform = 'rotateX(' + value + 'deg)'
  document.getElementById('div1').style.OTransform = 'rotateX(' + value + 'deg)'
  document.getElementById('div1').style.transform = 'rotateX(' + value + 'deg)'
  document.getElementById('span2').innerHTML = value + 'deg'
}
function rotate2 (value) {
  document.getElementById('div1').style.webkitTransform = 'rotateZ(' + value + 'deg)'
  document.getElementById('div1').style.msTransform = 'rotateZ(' + value + 'deg)'
  document.getElementById('div1').style.MozTransform = 'rotateZ(' + value + 'deg)'
  document.getElementById('div1').style.OTransform = 'rotateZ(' + value + 'deg)'
  document.getElementById('div1').style.transform = 'rotateZ(' + value + 'deg)'
  document.getElementById('span3').innerHTML = value + 'deg'
}
function Size (value) {
   document.getElementById('div1').style.width = 'width(' + value + 'px)'
  document.getElementById('div1').style.height = 'height(' + value + 'px)'
  document.getElementById('span4').innerHTML = value + 'px'
  document.getElementById('span5').innerHTML = value + 'px'
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
