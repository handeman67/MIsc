Change = (e) => {
    let target = event.target || event.srcElement,
      id = target.id,
      Value = target.value,
      Output = document.getElementsByTagName("output"),
      Scene = document.getElementById("scene").style,
      Tridiv = document.getElementById("tridiv").style,
      house = document.getElementById("tridiv").style,
      x,
      y,
      z,
      s,
      ch = document.getElementById("button"),
      ch1 = document.getElementById("button1");
    ch1.style.color = "yellow";
    ch1.style.background = "transparent";
    ch.style.color = "yellow";
    ch.style.background = "transparent";
    this.Output = Output;
    this.Shapes = document.querySelectorAll(".shape");
    this.part = {
      "cub-1": "cub1",
      "cub-3": "cub3",
      "cub-6": "cub6",
      cub7: "cub7",
      "pri-6": "pri6",
      "pri-7": "pri7",
      "cub-8": "cub8",
      "cub-9": "cub9",
      "cub-11": "cub11",
      "cub-12": "cub12",
      "cub-13": "cub13"
    };
    switch (id) {
      case "rangeX":
        x = Output.resultX.value = Value;
        Scene.transform = "rotateX(" + x + "deg) ";
        break;
      case "rangeY":
        y = Output.resultY.value = Value;
        Scene.transform = "rotateY(" + y + "deg) ";
        break;
      case "rangeZ":
        z = Output.resultZ.value = Value;
        Scene.transform = "rotateZ(" + z + "deg)";
        break;
      case "zoom":
        s = Output.resultZo.value = Value;
        house.transform = "scale(" + s + " )";
        Tridiv.transform = "scale(" + s - s + " )";
        break;
      default:
        Scene.transform =
          "rotateX(" +
          Output.resultX.value +
          "deg) rotateY(" +
          Output.resultY.value +
          "deg) rotateZ(" +
          Output.resultZ.value +
          "deg)";
        break;
    }
    Scene.transform =
      "rotateX(" +
      Output.resultX.value +
      "deg) rotateY(" +
      Output.resultY.value +
      "deg) rotateZ(" +
      Output.resultZ.value +
      "deg)";
  };
  
  function ani() {
    this.a = 0;
    var key = Object.keys(this.part);
    for (let parts of this.Shapes) {
      for (let p in key) {
        if (parts.className.match(key[p])) {
          console.log("MATCH pats and pieces: ", this.part[key[p]]);
          this.a++;
          console.log("not added  ", parts.classList);
          let val = key[p];
          let st = this.part[val];
          parts.classList.toggle(st);
  
          console.log("added  ", parts.classList);
          break;
        } else {
          console.log("NO Match parts: ", key[p]);
        }
        //  Shape[parts].add(part[p])
      }
      // console.log('Outside--shape-part: ',parts.className);
      // console.log('Outside-Shape classs: ',key[parts]);
    }
  }
  
  // animate(1, );
  // animate(4, );
  // animate(5,);
  // animate(6,);
  // animate(7,);
  // animate(8,);
  // animate(9,);
  // animate(11, );
  // animate(12,);
  // animate(13, );
  
  function getSelectedOption(sel) {
    var opt;
    for (var i = 0, len = sel.options.length; i < len; i++) {
      opt = sel.options[i];
      if (opt.selected === true) {
        break;
      }
    }
    return opt;
  }
  
  // get selected option in sel (reference obtained above)
  
  // display its value and text
  