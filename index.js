
// <div id="stopButton" class="button">Stop</div>
// <div id="slowButton" class="button">Slow</div>
// <div id="goButton" class="button">Go</div>

(function() {
  'use strict';

  function addLight(button, lightID, className){
    var light = document.getElementById(lightID);
    button.addEventListener('click',function(){
      light.classList.toggle(className);
    });
  }

  // YOUR CODE HERE
  var stopButton = document.getElementById('stopButton');
  var slowButton = document.getElementById('slowButton');
  var goButton = document.getElementById('goButton');

  addLight(stopButton,'stopLight','stop');
  addLight(slowButton, 'slowLight','slow');
  addLight(goButton, 'goLight','go');

})();
