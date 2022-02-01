var w;
function startTimer(){
    if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {
      w = new Worker("counter.js");
    }
    w.onmessage = function(event) {
      document.getElementById("result").innerHTML = event.data;
    };
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
  }
    
}

function stopTimer() { 
  w.terminate();
  w = undefined;
}