class MainMenu {

    // Render Main Menu
    render() {
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
            <h2>Main</h2>
            <ul>
                <li class="menu-item" id="single-player">Single Player</li>
                <li class="menu-item" id="multiplayer">Multiplayer</li>
                <li class="menu-item" id="add-ons">Add-Ons</li>
                <li class="menu-item" id="news">News</li>
                <li class="menu-item" id="achievements">Achievements</li>
                <li class="menu-item" id="options">Options</li>
            </ul>
        `
        
        addOnClickHashChange(menuEl);

        return menuEl
    }
}