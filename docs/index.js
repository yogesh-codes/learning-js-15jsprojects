

let is_mobile_navlinks_hidden=false;

//DOM elements
let hamburger=document.querySelector(".hamburger-svg-container");


hamburger.addEventListener("click",function() {
    if (is_mobile_navlinks_hidden){
        document.querySelector(".mobile-navlinks-container").style.height='8em';
        is_mobile_navlinks_hidden=false
    }

    else {
        document.querySelector(".mobile-navlinks-container").style.height='0em';
        is_mobile_navlinks_hidden=true
    }
    
})

