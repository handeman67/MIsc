var wallabify = require('wallabify');
var wallabyPostprocessor = wallabify({
    // browserify options, such as
    // insertGlobals: false
  }
  // you may also pass an initializer function to chain other
  // browserify options, such as transformers
  // , b => b.exclude('mkdirp').transform(require('babelify'))
);
export default (wallaby) => {
  console.log(wallaby)
  return {
    'name': 'cetapeed',
    'files': [
     {
       'pattern': ' index.html',/*? */
       instrument: false,
      },
     
      {
        'pattern':'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.js',
        instrument: false,
      
      },
      {
        'pattern': 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/addons/p5.dom.js',
        instrument: false,
     
      },
      {
        'pattern': 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/addons/p5.sound.js',
        instrument: false,
     
      },
      // {
      //   'pattern': 'libraries/*.js',
      //   instrument: false,
    
      // },
  

 
     { pattern:'js/*.js',load: false },
     // !'./js/sound.js' 
     

{pattern: 'src/libs/*.js', load:false},
{pattern:"test/**/*Spec.js",ignore:true}
    ],
  
    "tests": [
      {pattern:"test/**/*Spec.js",load:false}
    ],
       postprocessor: wallabyPostprocessor,

    setup: function () {
      // required to trigger tests loading
      window.__moduleBundler.loadTests();
    },
 compilers: {
      '**/*.js*': wallaby.compilers.babel()
    },
    testFramework: 'mocha',
    'env': {

      'kind': 'chrome'
    },
    'workers': {
      'restart': true
    },
    'debug': true
  };
}