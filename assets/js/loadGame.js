class LoadGame {

    // Render Load Game Menu
    render() {
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
            <h1><img class="load-heading heading" src="assets/sprites/trans.png" alt="load-menu"></h1>

            <table>
                <tr>
                    <td>
                        Quick: Terra
                    </td>
                </tr>
                <tr>
                    <td>
                        Sentinal Rave
                    </td>
                    <td>
                        Kils:239/260
                    </td>
                </tr>
                <tr>
                    <td>
                        Terra
                    </td>
                </tr>
                <tr>
                    <td>
                        Sentinal Rave
                    </td>
                    <td>
                        Kills: 204/260
                    </td>
                </tr>
                <tr>
                    <td>
                        Quake
                    </td>
                </tr>
                <tr>
                    <td>
                        Azure Agony
                    </td>
                    <td>
                        Kills: 0/54
                    </td>
                </tr>
                <tr>
                    <td>
                        Honey
                    </td>
                </tr>
                <tr>
                    <td>
                        Constantly No Respect
                    </td>
                    <td>
                        Kills: 0/121
                    </td>
                </tr>
            </table>
        `
        return menuEl
    }
}