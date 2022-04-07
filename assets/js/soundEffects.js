// Add Audio Effects

sessionStorage.setItem('mute', true);
let mute = sessionStorage.getItem('mute');

let menuHoverSound = new Audio("assets/audio/menu1.wav");
menuHoverSound.volume = 0.2;
let menuButtonSound = new Audio("assets/audio/menu2.wav");
menuButtonSound.volume = 0.2;

// Toggles Audio On and Off
function toggleAudio() {
        mute === "true" ? mute = "false" : mute = "true";
}

// Play menu audio effect
function playMenu() {
    mute === "false" ? menuHoverSound.play() : false;
}

function playButton() {
    mute === "false" ? menuButtonSound.play() : false;
}

function hoverListener() {
    const menuItem = document.querySelectorAll('.menu-item');
    menuItem.forEach(item => {
        item.addEventListener("mouseover", playMenu)
        item.addEventListener("click", playButton)
    })
}
