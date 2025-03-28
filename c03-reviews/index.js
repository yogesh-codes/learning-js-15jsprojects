
import {faker} from 'https:esm.sh/@faker-js/faker';


document.addEventListener('DOMContentLoaded',() => {

// DOM ELEMENTs
const button_random=document.querySelector(".button-random");
let img_face=document.querySelector(".author-profilepic");
let img_face_container=document.querySelector(".author-profilepic-container");
const review_card=document.querySelector(".review-cards");
const author_name=document.querySelector(".author-name");
const author_designation=document.querySelector(".author-designation");
const author_description=document.querySelector(".author-description");

// button_random.addEventListener("click",function() {
//     console.log("You clicken");

//     // Set image
//     img_face.src="https://thispersondoesnotexist.com"

// });



function generate_random_author(){
    let sex= faker.person.sex();
    const review_author = {
        'sex':sex,
        'fullName':faker.person.fullName({sex:sex}),
        'bio':faker.person.bio(),
        'jobTitle':faker.person.jobTitle(),
        'profile_pic_url':faker.image.personPortrait({sex:sex}),
        'description':faker.lorem.paragraph()
        // profile_pic:"https://thispersondoesnotexist.com"
    };

    console.log(review_author);

    return review_author;    
};

function update_image_to_spinner(){
    // Replace container children to spinner:
    let spinner=document.createElement("div");
    spinner.className="spinner"

    img_face_container.replaceChildren(spinner);
    

};


function load_image(url){
        //Setting up variables for load
        const temp = new Image();
    
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
};

function update_text_details(author) {
    console.log(author);
    author_name.textContent=author['fullName'];
    author_designation.textContent=author['jobTitle'];
    author_description.textContent=author['description'];
}


// Add event listeners ---------------------

button_random.addEventListener("click", () => {
    let author=generate_random_author();
    update_image_to_spinner();
    load_image(author['profile_pic_url']);
    update_text_details(author);
});



});

