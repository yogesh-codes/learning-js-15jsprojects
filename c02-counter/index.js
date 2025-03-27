//DOM elements 
const button_increment=document.querySelector("button.increment");
const button_decrement=document.querySelector("button.decrement");
const button_reset=document.querySelector("button.reset");

const current_count=document.querySelector(".current-count");

 
button_increment.addEventListener('click',function() {
    
    current_count.innerHTML=parseInt(current_count.textContent)+1;
    set_my_color();
})


button_decrement.addEventListener('click',function() {
    
    current_count.innerHTML=parseInt(current_count.textContent)-1;
    set_my_color();
})

button_reset.addEventListener('click',function() {
    
    current_count.innerHTML=0;
    set_my_color();
})



function set_my_color() {
    if (parseInt(current_count.textContent)>=1){
        current_count.style.color = "green";
    }

    else if (parseInt(current_count.textContent)===0){
        current_count.style.color = "black";
    } 

    else {
        current_count.style.color = "red";

        
    }
}
