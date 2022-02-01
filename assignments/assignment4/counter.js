var i=0;
function countTimer(){
    
    i = i + 1;
  postMessage(i);
  setTimeout(timedCount(),500);
}
countTimer();

