
let follower=document.getElementById("follower");
console.log(follower);

document.addEventListener("mousemove",(event) => {
    const {clientX, clientY}= event;

    console.log("mouse moved");
    follower.style.transform=`translate (${clientX}px,${clientY}px)`;
});

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    follower.style.transform = `translate(${clientX}px, ${clientY}px)`;
  });