const button = document.getElementById("roll");
const points = document.getElementById("points");
const image = document.getElementById("dice");
const player = document.getElementById("player-name");
console.log(image.style);


button.addEventListener("click", ()=>{
    if (button.innerHTML == "Play" || button.innerHTML == "Play Again?" ) {
        image.style.display = "block";
        button.innerHTML = "Roll";
        player.innerHTML = "Player 1";
        points.innerHTML = 0;
    }
    let x = Math.floor(Math.random() * 6) + 1;
    let y = parseInt(points.innerHTML);
    image.src = `./img/dice${x}.png`;
    
    if (x === 1) {
        player.innerHTML = "You Lost!";
        button.innerHTML = "Play Again?";
    } else if (points.innerHTML < 20) {
        y += x;
        points.innerHTML = y
    }
    if (y >= 20) {
        player.innerHTML = "Winner!";
        button.innerHTML = "Play Again?";
    }
})
