class Multiplayer {

    // Render Multiplayer Menu
    render() {
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
            <h2>Multiplayer</h2>

            <ul>
                <li id="online">Online</li>
                <li class="menu-item" id="local-play">Local Play</li>
            </ul>
        `
        addOnClickHashChange(menuEl);

        return menuEl
    }
}