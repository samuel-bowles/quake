class ChangeSettingsHorde {

    // Render Change Settings Menu For Deathmatch Mode
    render() {
        let menuEl = document.createElement('div');

        const hordeMaps = ["Horde1: Tower Of The Apprentice", "Horde2: Frozen Court", "Horde3: The Foundry", "Horde4: The Hunt"]

        function makeList(arrList) {
            return arrList.map((item) => {
                return `<option value="${item}">${item}</option>`
            })
        }

        // Deathmatch Menu Screen
        menuEl.innerHTML = `
            <h2>Multiplayer</h2>

            <table>
                <tr>
                    <td>
                        <label for="game-mode">Game Mode</label>
                    </td>
                    <td>
                        <select name="game-mode" id="game-mode">
                            <option value="Cooperative">Cooperative</option>
                            <option value="Deathmatch">Deathmatch</option>
                            <option value="Horde" selected>Horde</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="map">Map</label>
                    </td>
                    <td>
                        <select name="map" id="map-select">
                            ${makeList(hordeMaps)}
                        </select>
                    </td>
                </tr>
                <tr>
                    <th colspan="2">Mode Settings</th>
                </tr>
                <tr>
                    <td>Number Of Bots</td>
                    <td>
                        <div class="slide-container">
                            <p><span id="bot-counter"></span></p>
                            <input type="range" min="0" max="7" value="0" class="slider" id="num-bots">
                        </div>
                    </td>
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

        
        // Bot Slider Counter
        let botSlider = menuEl.querySelector("#num-bots");
        let botOutput = menuEl.querySelector("#bot-counter");
        botOutput.innerHTML = botSlider.value;
        botSlider.oninput = function() {
            botOutput.innerHTML = this.value;  
        }

        menuEl.querySelector("#game-mode").onchange = (ev => {
            addDropDownHashChange(menuEl);
        })
        
        return menuEl;
    }
}



