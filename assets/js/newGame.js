class NewGame {
    
    // Render New Game Menu
    render() {
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
            <h1><img class="single-heading heading" src="assets/sprites/trans.png" alt="new-game-menu"></h1>
            <ul class="quake-large">
                <li>Quake</li>
                <li>Scourge of Armagon</li>
                <li>Dissolution of Eternity</li>
                <li>Dimension of the Past</li>
                <li>Dimension of the Machine</li>
            </ul>
        `

        return menuEl
    }
}