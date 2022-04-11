class Options {

    // Render Options Menu
    render() {
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
            <h1><img class="options-heading heading" src="assets/sprites/trans.png" alt="options-menu"></h1>

            <ul class="quake-large">
                <li class="menu-item" id="options-input">Input</li>
                <li class="menu-item" id="options-gameplay">Gameplay</li>
                <li class="menu-item" id="options-multiplayer">Multiplayer</li>
                <li class="menu-item" id="options-sound">Sound</li>
                <li class="menu-item" id="options-display">Display</li>
                <li class="menu-item" id="options-language">Language</li>
                <li class="menu-item" id="options-bethesda.net">Bethesda.net</li>
                <li class="menu-item" id="options-credits">Credits</li>
            </ul>
        `

        addOnClickHashChange(menuEl);

        return menuEl
    }
}