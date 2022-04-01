class ChangeSettingsDeathmatch {

    // Render Change Settings Menu For Deathmatch Mode
    render() {
        let menuEl = document.createElement('div');

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
                            <option value="Deathmatch" selected>Deathmatch</option>
                            <option value="Horde">Horde</option>
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
                            ${makeList(maps["quakeMPLevels"])}
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>Mode Settings</th>
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
                    <td>Frag Limit</td>
                    <td>
                        <div class="slide-container">
                            <p><span id="frag-counter"></span></p>
                            <input type="range" min="0" max="100" value="0" class="slider" id="num-frags">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Time Limit</td>
                    <td>
                        <div class="slide-container">
                            <p><span id="time-counter"></span></p>
                            <input type="range" min="0" max="100" value="0" class="slider" id="num-time">
                        </div>
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
        
        // Frag Slider Counter
        let fragSlider = menuEl.querySelector("#num-frags");
        let fragOutput = menuEl.querySelector("#frag-counter");
        fragOutput.innerHTML = fragSlider.value;
        fragSlider.oninput = function() {
            fragOutput.innerHTML = this.value;  
        }
        
        // Time Slider Counter
        let timeSlider = menuEl.querySelector("#num-time");
        let timeOutput = menuEl.querySelector("#time-counter");
        timeOutput.innerHTML = timeSlider.value;
        timeSlider.oninput = function() {
            timeOutput.innerHTML = this.value;  
        } 
        
        menuEl.querySelector("#episode-select").onchange = (ev => {
            updateMapList();
        })

        menuEl.querySelector("#game-mode").onchange = (ev => {
            addDropDownHashChange(menuEl);
        })
        
        return menuEl;
    }
}



