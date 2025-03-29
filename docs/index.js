let is_mobile_navlinks_hidden=true;


//DOM elements
let hamburger=document.querySelector(".hamburger-svg-container");


hamburger.addEventListener("click",function() {
    if (is_mobile_navlinks_hidden){
        document.querySelector(".mobile-navlinks-container").style.height='8em';
        hamburger.style.transform="rotate(90deg)";
        is_mobile_navlinks_hidden=false;
    }

    else {
        document.querySelector(".mobile-navlinks-container").style.height='0em';
        is_mobile_navlinks_hidden=true;
        hamburger.style.transform="rotate(0deg)";
    }
    
});


let inputPrincipal=document.getElementById("principal");
let inputAnnualInterestRate=document.getElementById("annual-interest-rate");
let inputNYears=document.getElementById("n-years");


let simpleInterest=null 
let calculateButton= document.getElementById("calculate-button");
let displaySimpleInterest=document.querySelector(".textfield-simple-interest")

calculateButton.addEventListener('click', function(){
    console.log("principal",inputPrincipal.value,"annualrate",inputAnnualInterestRate.value,'n_years',inputNYears.value);
    simpleInterest=inputPrincipal.value*inputAnnualInterestRate.value*inputNYears.value;

    displaySimpleInterest.textContent= `Simple Interest: ${simpleInterest}`;

})