var timeleft = 20;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById('a').style.display='block';
  }
  document.getElementById("progressBar").value = 20 - timeleft;
  timeleft -= 1;
},1000);

