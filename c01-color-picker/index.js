const colors = ["green","red","blue","yellowgreen","#123456"];

// Select DOM Elements and setup event listeners



let selected_option_value=null;

//For Radio Buttons
const group = document.querySelector(".options-radiogroup"); // class, not ID
const radios = group.querySelectorAll('input[type="radio"]');
console.log("obtained",radios);

radios.forEach(radio => {
    radio.addEventListener('change', function() {
        var labels= group.querySelectorAll('label');
        
        labels.forEach(label => label.classList.remove('active'));
        
        radio.closest('label').classList.add('active');
        
        selected_option_value=radio.getAttribute("value")
        
        console.log("selected",selected_option_value);
    });
});


//For Submit button
const submit_button= document.getElementById("submit-button");
const generated_color_code= document.getElementById("generated-color-code");
let my_random_index=0;

submit_button.addEventListener('click',function() {
    
    if (selected_option_value==="option-simple") {
        my_random_index= Math.floor(Math.random()*colors.length);
        my_new_color=colors[my_random_index];
    
    }

    else if (selected_option_value==="option-hex") {
        my_new_color="#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

    }

    else {
        alert("man something wrong");
    }

    console.log("New index and color is ",my_random_index,my_new_color);

    generated_color_code.style.backgroundColor=my_new_color;
    generated_color_code.innerText=my_new_color ;


})