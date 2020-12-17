const button = document.getElementById("roll");
const points = document.getElementById("points").innerHTML;
const image = document.getElementById("dice");
console.log(image.style);
console.log(points);

button.addEventListener("click", ()=>{
    if (image.style.display == "none") {
        image.style.display = "block";
        button.textContent = "roll again";
    } else {
        image.style.display = "none";
        button.textContent = "roll"; 
    }
 })