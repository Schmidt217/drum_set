const crash = new Audio("sounds/crash.mp3");
const kickBass = new Audio("sounds/kick-bass.mp3");
const snare = new Audio("sounds/snare.mp3");
const tom1 = new Audio("sounds/tom-1.mp3");
const tom2 = new Audio("sounds/tom-2.mp3");
const tom3 = new Audio("sounds/tom-3.mp3");
const tom4 = new Audio("sounds/tom-4.mp3");

// Detecting Button Press

for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
   document.querySelectorAll(".drum")[i].addEventListener('click', function(){
       playSound(this.innerHTML);
       buttonAnimation(this.innerHTML);
   });
}

// Detecting Keyboard Press

document.addEventListener("keydown", function(){
    playSound(event.key);
    buttonAnimation(event.key);
});


function playSound(key){
  
    switch (key) {
        case "w":
            tom1.play();
            break;
        case "a":
            tom2.play();
            break;
        case "s":
            tom3.play();
            break;
        case "d":
            tom4.play();
            break;
        case "j":
            snare.play();
            break;
        case "k":
            crash.play();
            break;
        case "l":
            kickBass.play();
            break;
        default: console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
