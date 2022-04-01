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
            <h2>Single</h2>
            
            <p>Level Select</p>
            <form action="#" method="post">
                <ul>
                    <li>
                        <label for="episode">Episode</label>
                        <select name="episode" id="episode-select">
                            ${makeList(episodes)}
                        </select>
                    </li>
                    <li>
                        <label for="map">Map</label>
                        <select name="map" id="map-select">
                            ${makeList(maps["quakeLevels"])}
                        </select>
                    </li>
                    <li>
                        <label for="difficulty">Difficulty</label>
                        <select name="difficulty id="difficulty-select">
                            ${makeList(difficulty)}
                        </select>
                    </li>
                </ul>
            </form>
            <p>Play</p>
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