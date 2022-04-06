class SinglePlayer {

    // Render Single Player Menu
    render() {
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
            <h1><img class="single-heading heading" src="assets/sprites/trans.png" alt="single-menu"></h1>
            <ul>
                <li class="menu-item" id="new-game">New Game</li>
                <li class="menu-item" id="level-select">Level Select</li>
                <li class="menu-item" id="load-game">Load Game</li>
            </ul>
        `

        addOnClickHashChange(menuEl);

        return menuEl
    }
}