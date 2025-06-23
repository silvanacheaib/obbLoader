$(document).ready(function(){
    let percent = 0;
    let interval = setInterval(function(){
      if(percent >= 100){
        clearInterval(interval);
      } else {
        percent++;
        $('#percent').text(percent + '%');
      }
    }, 20); 
  });