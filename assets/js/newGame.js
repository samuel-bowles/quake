class NewGame {
    
    // Render New Game Menu
    render() {
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
            <h2>Single</h2>
            <ul>
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