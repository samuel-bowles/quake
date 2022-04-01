class LoadGame {

    // Render Load Game Menu
    render() {
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
            <h2>Load</h2>
            <ul>
                <li class="menu-item" class="quick-load">Udob</li>
                <li class="menu-item" class="quick-load"><p>Last Waltz</p><p>Kills: 38/106</p> </li>
                <li class="menu-item" class="regular-load">Dimension Of The Machine</li>
                <li class="menu-item" id="regular-load"><p>Grave Machine</p><p>Kills: 0/104</p></li>
            </ul>
        `
        return menuEl
    }
}