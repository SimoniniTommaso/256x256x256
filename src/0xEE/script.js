

document.addEventListener("DOMContentLoaded", setup);
 

function changeHandler (event) {
     top.postMessage('SUCCESS', '*');
    alert("Congratulations!");
  
}

function setup(){
   var btn = document.querySelector("button")
    function Timer(){ 
         btn.classList.remove('hide')
        }
setTimeout(Timer, 10000)

   btn.onmousedown = changeHandler;
}


