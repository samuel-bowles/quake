const menuHover = new Audio("assets/audio/menu1.wav");


function playSound() {
    menuHover.play();
}

function hoverListener() {
    const menuItem = document.querySelectorAll('.menu-item');
    menuItem.forEach(item => {
        item.addEventListener("mouseover", playSound)
    })
}
