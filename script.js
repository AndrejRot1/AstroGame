
var player = document.getElementById("player");
var block = document.getElementById("block");

document.addEventListener("click",jump);

function jump(){
    player.classList.add("animate");
    setTimeout(removeJump,500);
}

function removeJump(){
    player.classList.remove("animate");
}

function checkDead(){
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    console.log(playerTop,blockLeft);

    if(blockLeft<15 && blockLeft>-15 && playerTop>=190){
        alert("Game over");
    }
}

setInterval(checkDead, 10);