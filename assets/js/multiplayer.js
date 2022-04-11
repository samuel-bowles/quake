class Multiplayer {

    // Render Multiplayer Menu
    render() {
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
            <h1><img class="multiplayer-heading heading" src="assets/sprites/trans.png" alt="multiplayer-menu"></h1>

            <ul class="quake-large">
                <li class="menu-item" id="online">Online</li>
                <li class="menu-item" id="local-play">Local Play</li>
            </ul>
        `
        addOnClickHashChange(menuEl);

        return menuEl
    }
}