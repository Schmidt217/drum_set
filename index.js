const tom1 = new Audio("sounds/tom-1.mp3");
const tom2 = new Audio("sounds/tom-2.mp3");
const tom3 = new Audio("sounds/tom-3.mp3");
const tom4 = new Audio("sounds/tom-4.mp3");
const snare = new Audio("sounds/snare.mp3");
const crash = new Audio("sounds/crash.mp3");
const kickBass = new Audio("sounds/kick-bass.mp3");
const drums = document.querySelectorAll(".drum");
// Detecting Button Press

for(var i = 0; i < drums.length; i++){
   drums[i].addEventListener('click', function(){
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
            tom1.currentTime = 0
            tom1.play();
            break;
        case "a":
            tom2.currentTime = 0
            tom2.play();
            break;
        case "s":
            tom3.currentTime = 0
            tom3.play();
            break;
        case "d":
            tom4.currentTime = 0
            tom4.play();
            break;
        case "j":
            snare.currentTime = 0
            snare.play();
            break;
        case "k":
            crash.currentTime = 0
            crash.play();
            break;
        case "l":
            kickBass.currentTime = 0
            kickBass.play();
            break;
        default: console.log(this.innerHTML);
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
