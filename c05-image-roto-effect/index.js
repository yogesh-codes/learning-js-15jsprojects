let currentImageUrl="https://images.pexels.com/photos/368260/pexels-photo-368260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
let nextImageUrl="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"


let temp1=new Image()
let temp2=new Image()

temp1.src=currentImageUrl
temp2.src=nextImageUrl


let rotoButton=document.querySelector(".roto-button");

let rotoImageCommon= document.querySelector(".rotoimage-common");
let image1=document.querySelector(".image1");
let image2=document.querySelector(".image2");
let image3=document.querySelector(".image3");

rotoButton.addEventListener('click',function () {
    
    console.log("button clicked");

    let root=document.documentElement;
    root.style.setProperty('--current-background',`url(${currentImageUrl})`);
    root.style.setProperty('--next-background',`url(${nextImageUrl})`);

    console.log("root set");

   
    [image1, image2, image3].forEach((img) => {
        img.classList.remove("roto-animation");
        void img.offsetWidth; // Force reflow
        img.classList.add("roto-animation");
    });
    
    console.log("success");
})