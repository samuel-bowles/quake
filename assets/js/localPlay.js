class LocalPlay {

    // Render Local Play Menu
    render() {
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
            <h2>Multiplayer</h2>
            <table>
                <tr>
                    <th>Next Match</th>
                    <th>Players 1</th>
                </tr>
                <tr>
                    <td>Deathmatch</td>
                    <td>Player 1</td>
                </tr>
                <tr>
                    <td>Quake</td>
                    <td>Join</td>
                </tr>
                <tr>
                    <td>Place Of Two Deaths</td>
                    <td>Join</td>
                </tr>
                <tr>
                    <th>Match Configuration</th>
                    <td>Join</td>
                </tr>
                <tr>
                    <!-- Cooperative is used here since it is the first game-mode selction on the Change Settings screen -->
                    <td class="menu-item" id="cooperative">Change Settings...</td>
                </tr>
                <tr>
                    <td>Play</td>
                </tr>
                <tr>
                    <td>End Game</td>
                </tr>
            </table>
        `

        addOnClickHashChange(menuEl);

        return menuEl
    }
}