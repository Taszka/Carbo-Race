 // Funkcja uruchamiająca animację i przekierowanie po kliknięciu przycisku
 function startAnimationAndRedirect() {
  var blockLeft = document.getElementById("block_left");
  var blockRight = document.getElementById("block_right");
  
  blockLeft.addEventListener("animationend", redirect);
  blockRight.addEventListener("animationend", redirect);
  
  blockLeft.style.animationPlayState = "running";
  blockRight.style.animationPlayState = "running";
}

function redirect() {
  setTimeout(function() {
    window.location.href = "Front/HTML_Templates/menu_game_window.html";
  }, 1000);
}


