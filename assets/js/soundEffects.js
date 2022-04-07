// Add Audio Effects

// Menu Hover
const menuHoverSound = new Audio("assets/audio/menu1.wav");
menuHoverSound.volume = 0.2;
menuHoverSound.muted = true;
// Menu Button Click
const menuButtonSound = new Audio("assets/audio/menu2.wav");
menuButtonSound.volume = 0.2;
menuButtonSound.muted = true


// Toggles Audio On and Off
function toggleAudio() {
        menuHoverSound.muted ? menuHoverSound.muted = false : menuHoverSound.muted = true;
        menuButtonSound.muted ? menuButtonSound.muted = false : menuButtonSound.muted = true;
}

// Play menu audio effect
function playMenu() {
    menuHoverSound.play();
}

function playButton() {
    menuButtonSound.play();
}

function hoverListener() {
    const menuItem = document.querySelectorAll('.menu-item');
    menuItem.forEach(item => {
        item.addEventListener("mouseover", playMenu)
    })
}