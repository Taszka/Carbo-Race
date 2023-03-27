 // Funkcja uruchamiająca animację i przekierowanie po kliknięciu przycisku
 function ChangeCar_left() {
    var stripLeft = document.getElementById("strip_left");
    var stripCentrum = document.getElementById("strip_centrum");
    var stripRight = document.getElementById("strip_right");

    stripLeft.style.animationPlayState = "running";
    stripCentrum.style.animationPlayState = "running";
    stripRight.style.animationPlayState = "running";

    stripLeft.addEventListener("animationend", reset_animation);
    stripCentrum.addEventListener("animationend", reset_animation);
    stripRight.addEventListener("animationend", reset_animation);

 }

 function reset_animation() 
 {
    /*document.write(5 + 6);*/

    var stripLeft = document.getElementById("strip_left");
    var stripCentrum = document.getElementById("strip_centrum");
    var stripRight = document.getElementById("strip_right");

    stripLeft.style.animationPlayState = "paused"; // pauzujemy animację
    stripCentrum.style.animationPlayState = "paused"; // pauzujemy animację
    stripRight.style.animationPlayState = "paused"; // pauzujemy animację


    stripLeft.style.animationDuration = "0s"; // ustawiamy czas trwania animacji na 0s
    stripCentrum.style.animationDuration = "0s"; // ustawiamy czas trwania animacji na 0s
    stripRight.style.animationDuration = "0s"; // ustawiamy czas trwania animacji na 0s

    setTimeout(function() {
        stripLeft.style.animationDuration = "1s"; // ustawiamy czas trwania animacji na wartość początkową (1s)
        stripCentrum.style.animationDuration = "1s"; // ustawiamy czas trwania animacji na wartość początkową (1s)
        stripRight.style.animationDuration = "1s"; // ustawiamy czas trwania animacji na wartość początkową (1s)
    }, 50);
  }; // Do poprawek jutro







 function ChangeCar_right() {
    var stripLeft = document.getElementById("strip_left");
    var stripCentrum = document.getElementById("strip_centrum");
    var stripRight = document.getElementById("strip_right");

    stripLeft.style.animationPlayState = "running";
    stripCentrum.style.animationPlayState = "running";
    stripRight.style.animationPlayState = "running";

 }