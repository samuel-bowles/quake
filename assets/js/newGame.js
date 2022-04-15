class NewGame {
    
    // Render New Game Menu
    render() {
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
            <h1><img class="single-heading heading" src="assets/sprites/trans.png" alt="new-game-menu"></h1>
            <ul class="quake-large">
                <li class="menu-item">Quake</li>
                <li class="menu-item">Scourge of Armagon</li>
                <li class="menu-item">Dissolution of Eternity</li>
                <li class="menu-item">Dimension of the Past</li>
                <li class="menu-item">Dimension of the Machine</li>
            </ul>
        `

        return menuEl
    }
}