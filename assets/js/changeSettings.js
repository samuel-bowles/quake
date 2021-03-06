class ChangeSettingsCooperative {

    // Render Change Settings Menu For Cooperative Mode
    render() {
        let menuEl = document.createElement('div');

        const gameModes = ["Cooperative", "Deathmatch", "Horde"]

        function makeList(arrList) {
            return arrList.map((item) => {
                return `<option value="${item}">${item}</option>`
            })
        }

        menuEl.innerHTML = `
            <h2>Multiplayer</h2>

            <table>
                <tr>
                    <td>
                        <label for="game-mode">Game Mode</label>
                    </td>
                    <td>
                        <select name="game-mode" id="game-mode">
                            ${makeList(gameModes)}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="episode">Episode</label>
                    </td>
                    <td>
                        <select name="episode" id="episode-select">
                            ${makeList(episodes)}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="map">Map</label>
                    </td>
                    <td>
                        <select name="map" id="map-select">
                            ${makeList(maps["quakeLevels"])}
                        </select>
                    </td>
                </tr>
                <tr>
                    <th colspan="2">Mode Settings</th>
                </tr>
                <tr>
                    <td><label for="difficulty">Difficulty</label></td>
                    <td>
                        <div class="slide-container">
                            <select name="difficulty id="difficulty-select">
                                ${makeList(difficulty)}
                            </select>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><label for="friendly-fire">Friendly Fire</label></td>
                    <td>
                        <input type="checkbox" id="friendly-fire" name="friendly-fire" value="on">
                    </td>
                </tr>
            </table> 
        `

        // This changes the map list dropdown based on the selected episode
        function updateMapList(){
            let episode = menuEl.querySelector("#episode-select");
            episode = episode.value.toLowerCase().split(" ").join("") + "Levels"
            
            let mapList = menuEl.querySelector("#map-select");

            mapList.innerHTML = ""
            mapList.innerHTML = makeList(maps[episode])            
        }

        menuEl.querySelector("#episode-select").onchange = (ev => {
            updateMapList();
        })

        return menuEl;
    }
}