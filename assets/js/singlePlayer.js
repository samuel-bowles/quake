class SinglePlayer {

    // Render Single Player Menu
    render() {
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
            <h2>Single</h2>
            <ul>
                <li>New Game</li>
                <li>Level Select</li>
                <li>Load Game</li>
            </ul>
        `

        addOnClickHashChange(menuEl);

        return menuEl
    }
}