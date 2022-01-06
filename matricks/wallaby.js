// Wallaby.js configuration


module.exports = () => {
  return {
    files: [
      'src/css/style/main1.css',
      // {pattern: 'lib/jquery.js', instrument: false},
      'src/js/*.js',
      'src/js/index.js'
    ],
    tests: [
      'test/testSpec.js',
      'test/**Spec.js'
    ],
    externals: {
      threejs:"https://cdnjs.cloudflare.com/ajax/libs/three.js/110/three.js",
      dat:"https://cdn.jsdelivr.net/npm/dat.gui@0.7.6/build/dat.gui.min.js",
      orbit:"https://threejs.org/examples/js/controls/OrbitControls.js",
      p5:"https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.js",
      p5dom:"https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/addons/p5.dom.js"
    
    
    },

    env: {
      kind: 'chrome'
    },
    debug: true
  };
};
