class MainMenu {

    // Render Main Menu
    render() {
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
            <h1><img class="main-menu-heading heading" src="assets/sprites/trans.png" alt="main-menu"></h1>
            <ul class="quake-large">
                <li class="menu-item" id="single-player" tabindex="1">Single Player</li>
                <li class="menu-item" id="multiplayer" tabindex="2">Multiplayer</li>
                <li class="menu-item" id="add-ons" tabindex="3">Add-Ons</li>
                <li class="menu-item" id="news" tabindex="4">News</li>
                <li class="menu-item" id="achievements" tabindex="5">Achievements</li>
                <li class="menu-item" id="options" tabindex="6">Options</li>
            </ul>
        `
        
        addOnClickHashChange(menuEl);

        return menuEl
    }
}