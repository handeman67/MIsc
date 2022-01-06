var scene, renderer, camera;
var cube, angle = 0;
var gcontrols;
var orbitcontrols;
  var camY = 160;
 var camX = 400;
 var xsize=5;
     var ysize=5;
    var zsize=5;
var adds = [];

init();
animate();

function init() {

  renderer = new THREE.WebGLRenderer({
    antialias: true
  });

  renderer.setClearColor(0x888888);

  var width = window.innerWidth;
  var height = window.innerHeight;

  renderer.setSize(width, height);
  
  document.body.appendChild(renderer.domElement);

  scene = new THREE.Scene();

  var cubeGeometry = new THREE.BoxGeometry(xsize, ysize, zsize);
  var cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0x1ec876
  });
  cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

  scene.add(cube);


  camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.y =camY;
  camera.position.x = camX;
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  orbitcontrols = new THREE.OrbitControls(camera, renderer.domElement);

  var gridXZ = new THREE.GridHelper(200, 20, 'red', 'white');
  scene.add(gridXZ);

  var pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(0, 300, 200);
  scene.add(pointLight);

	//////////////////////////////////////////////////
  gcontrols = new function() {
    this.speed = 0.01;
    this.type = "box";
    this.turn = false;
    this.xsize=5;
     this.ysize=5;
      this.zsize=5;
    this.color = "#ff1234";
    this.camY = 160;
  this.camX = 400;
    this.addMesh = function() {
      var mesh = new THREE.Mesh(
        new THREE.BoxGeometry(this.xsize,this.ysize, this.zsize), new THREE.MeshBasicMaterial());
     
      var num=set(Math.random() * 50, 40, Math.random() * 50);
 mesh.position.num;
      adds.push(mesh);
       scene.add(mesh);
       pointLight.position.num;
  scene.add(pointLight);
     
    };
    this.removeAdds = function() {
      adds.forEach(function(e) {
        scene.remove(e);
      })
    };
  }

  var gui = new dat.GUI();
  gui.domElement.id = 'gui';

  var f1 = gui.addFolder("motion");
  f1.add(gcontrols, 'speed', -1.5, 1.5);
  f1.add(gcontrols, 'turn');
  f1.add(gcontrols,'camY')
   f1.add(gcontrols,'camX')
  var f2 = gui.addFolder('look');
  f2.addColor(gcontrols, 'color');
  f2.add(gcontrols, 'type', ["box", "sphere"]);
  var f3 = gui.addFolder('modify');
    f3.add(gcontrols, 'xsize');
      f3.add(gcontrols, 'ysize');
        f3.add(gcontrols, 'zsize');
  f3.add(gcontrols, 'addMesh');
  f3.add(gcontrols, 'removeAdds');

  // gui.close();

}

function animate() {
  requestAnimationFrame(animate);
  orbitcontrols.update();

  cube.material = new THREE.MeshLambertMaterial({
    color: gcontrols.color
  });
  if (gcontrols.type === 'box') {
    cube.geometry = new THREE.BoxGeometry(gcontrols.xsize, gcontrols.ysize, gcontrols.zsize);
  } else if (gcontrols.type === 'sphere') {
    cube.geometry = new THREE.SphereGeometry(gcontrols.xsize);
  }
  cube.position.set(50 * Math.cos(angle), 0, 50 * Math.sin(angle));
  if (gcontrols.turn) angle += gcontrols.speed * 0.05;
  renderer.render(scene, camera);
}
