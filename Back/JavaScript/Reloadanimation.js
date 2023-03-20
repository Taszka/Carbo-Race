function startReloadAnimation() {
    var blockLeft = document.getElementById("block_left");
    var blockRight = document.getElementById("block_right");
    blockLeft.style.animationPlayState = "running";
    blockRight.style.animationPlayState = "running";
    blockLeft.addEventListener("animationend", hideBlocks);
    blockRight.addEventListener("animationend", hideBlocks);
}

function hideBlocks() {
    var blockLeft = document.getElementById("block_left");
    var blockRight = document.getElementById("block_right");
    blockLeft.style.display = "none";
    blockRight.style.display = "none";
}