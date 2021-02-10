const counter = document.querySelector("#counter-value");
const btns = document.querySelectorAll(".btn");
let counterValue = 0;

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
       if(e.currentTarget.classList.contains("subtract")){
            counterValue--;
            counter.textContent = counterValue;
        
       }
       else if(e.currentTarget.classList.contains("reset")){
            counterValue = 0;
           counter.textContent = counterValue;
        
       }
       else {
            counterValue++;
            counter.textContent = counterValue;
       }
    })
    
} )