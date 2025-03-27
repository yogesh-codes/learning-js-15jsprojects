
function generate_lorem() {
    
    return Text;
}


// DOM ELEMENTs
button_random=document.querySelector(".button-random");
img_face=document.querySelector(".author-profilepic");
img_face_container=document.querySelector(".author-profilepic-container");


// button_random.addEventListener("click",function() {
//     console.log("You clicken");

//     // Set image
//     img_face.src="https://thispersondoesnotexist.com"

// });

// Add event listeners ---------------------

button_random.addEventListener("click", () => {

    // Replace container children to spinner:
    spinner=document.createElement("div");
    spinner.className="spinner"

    img_face_container.replaceChildren(spinner);
    
    
    //Setting up variables for load
    const temp = new Image();
    const url = "https://thispersondoesnotexist.com" //+"/?cache=" + Date.now();


    //Setting up event listener, this is not where this code runs.
    temp.onload = () => {
        console.log("step2- onload() is successfully triggered");

        img_face=temp; // ✅ Set the real image only after it's loaded
        console.log("bts set img_facesrc to url")
        img_face_container.replaceChildren(img_face);
        console.log("container's child is replaced")
        
        console.log("image loaded.")
    };

    // loading process runs NOW, this code triggers the loading,
    // after download, temp.onload() is auto triggered
    temp.src = url;
    console.log("step 1- temp.src=url executed.")

});



