 // Funkcja uruchamiająca animację po kliknięciu przycisku
function startAnimationAndRedirect() {
  document.getElementById("block_left").style.animationPlayState = "running";
  document.getElementById("block_right").style.animationPlayState = "running";
  window.location.href = "../../Front/HTML_Templates/Sowa_require.html";
}
//  window.location.href = 'Carbo Race/Front/HTML_Templates/Sowa-require.html';
