class LevelSelect {

    // Render Level Select Menu
    render() {
        let menuEl = document.createElement('div');

        function makeList(arrList) {
            return arrList.map((item) => {
                return `<option value="${item}">${item}</option>`
            })
        }
        
        menuEl.innerHTML = `
            <h1><img class="single-heading heading" src="assets/sprites/trans.png" alt="level-select-menu"></h1>
            
            <table>
                <tr>
                    <th>
                        Level Select
                    </th>
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
                    <td>
                        <label for="difficulty">Difficulty</label>
                    </td>
                    <td>
                        <select name="difficulty id="difficulty-select">
                            ${makeList(difficulty)}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        Play
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
        
        return menuEl
    }
}