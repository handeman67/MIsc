window.onload = function () {
  const start = () => {
    return {
      Link: document.getElementById("read"),
      Canvas: document.getElementsByTagName("canvas"),
      Overlay: document.getElementById("read-more"),
      Cards: document.getElementById("card")
    }
  }
  const button = start().Link;
  button.addEventListener(
    'click',
    () => {
      if (!button.className.match("adjust")) {
        button.innerText = `Read Less`;
      } else {
        button.innerText = `Read More`;
      };
      button.classList.toggle("adjust");
      overlay.classList.toggle("animate");
    },
    false
  );
  const overlay = start().Overlay,
    canvas = start().Canvas[0],
    card = start().Cards,
    cdw = card.offsetWidth,
    cdh = card.offsetHeight,
    ctx = canvas.getContext("2d");
  this.console.log(cdw);
  let size = 10,
    x = canvas.width / 2,
    y = canvas.height - 30,
    dx = 5,
    dy = -5,
    multi=.9,
    width = canvas.width = cdw,
    height = canvas.height = cdh-150;

  function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if (x + dx > canvas.width - size|| x + dx < size) {
      dx = -dx  
    }
    if (y + dy > canvas.height - size || y + dy< size) {
      dy = -dy
   
    }

    x += dx * multi;
    y += dy * multi;
  }

  setInterval(draw, 10);


  const circ = () => {
    ctx.beginPath();
    ctx.arc(100, 75, 10, 0, 2 * Math.PI);
    ctx.stroke();
  }



  update();

  function update() {
    ctx.fillStyle = '#abceaf'
    ctx.fillRect(0, 0, width, height);
   
    circ()
    draw()
    requestAnimationFrame(update);
  }
}