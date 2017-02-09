
// <div id="stopButton" class="button">Stop</div>
// <div id="slowButton" class="button">Slow</div>
// <div id="goButton" class="button">Go</div>

(function() {
  'use strict';

  // YOUR CODE HERE
  var stopButton = document.getElementById('stopButton');
  var slowButton = document.getElementById('slowButton');
  var goButton = document.getElementById('goButton');



  console.log(stopButton,slowButton,goButton);

  stopButton.addEventListener('click', function(){
    var light = document.getElementById('stopLight');
    light.style.backgroundColor = "red"
  });

  slowButton.addEventListener('click',function(){
    var light = document.getElementById('slowLight');
    light.style.backgroundColor = "yellow";
  });
  goButton.addEventListener('click',function(){
    var light = document.getElementById('goLight');
    light.style.backgroundColor = "green";
  });
})();
