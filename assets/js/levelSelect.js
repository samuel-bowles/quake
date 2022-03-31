class LevelSelect {

    // Render Level Select Menu
    render() {
        let menuEl = document.createElement('div');

        let levelSet;

        const episodes = ["Quake", "Scourge of Armagon", "Dissolution of Eternity", "Dimension of the Past", "Dimension of the Machine"]

        const levelSets = {
            quakeLevels: ["Start: Entrance", "E1M1: Slipgate Complex", "E1M2: Castle of the Damned", "E1M3: The Necropolis", "E1M4: The Grisly Grotto", "E1M5: Gloom Keep", "E1M6: The Door To Chthon", "E1M7: The House Of Chthon", "E1M8: Ziggurat Vertigo", "E2M1: The Installation", "E2M2: Ogre Central", "E2M3: Crypt Of Decay", "E2M4: The Ebon Fortress", "E2M5: The Wizard's Manse", "E2M6: The Dismal Oubliette", "E2M7: Underearth", "E3M1: Terminationi Central", "E3M2: The Vaults Of Terror", "E3M3: The Tomb Of Terror", "E3M4: Satan's Dark Delight", "E3M5: Wind Tunnels", "E3M6: Chambers Of Torment", "E3M7: The Haunted Halls", "E4M1: The Sewage System", "E4M2: The Tower Of Despair", "E4M3: The Elder God Shrine", "E4M4: The Palace Of Hate", "E4M5: Hell's Atrium", "E5M6: The Pain Maze", "E4M7: Axure Agony", "E4M8: The Nameless City", "End: Shub-Niggurath's Pit"],
            
            scourgeofarmagonLevels: ["Start: Command HQ", "HIP1M1: The Pumping Station", "HIP1M2: Storage Facility", "HIP1M3: The Lost Mine", "HIP1M4: Research Facility", "HIP1M5: Military Complex", "HI2M1: Ancient Realms", "HIP2M2: The Black Cathedral", "HIP2M3: The Catacombs", "HIP2M4: The Crypt", "HIP2M5: Mortum's Keep", "HIP2M6: The Gremlin's Domain", "HIP3M1: Tur Torment", "HIP3M2: Pandemonium", "HIP3M4: The Gauntlet", "HIPDM1: The Edge Of Oblivion", "HIPEND: Amragon's Lair"],

            dissolutionofeternityLevels: ["Start: Split Decision", "R1M1: Deviant's Decision", "R1M2: Dread Portal", "R1M3: Judgement Call", "R1M4: Cave Of Death", "R1M5: Towers of Wrath", "R1M6: Temple Of Pain", "R1M7: Tomb Of The Overlord", "R2M1: Tempus Fugit", "R2M2: Elemental Fury I", "R2M3: Elemental Fury II", "R2M4 Curse Of Osiris", "R2M5: Wizard's Keep", "R2M6: Blood Sacrifice", "R2M7: Last Bastion", "R2M8: Source Of Evil"],

            dimensionofthepastLevels: ["Start: Entrance", "E5M1: The Military Base", "E5M2: The Power Supply", "E5M3: The Dark Days", "E5M4: The Catacombs", "E5M5: The Stronghold", "E5M6: The Underworld", "E5M7: The Otherworld", "E5END: The Year Zero", "E5SM1: The Forgotten Castle", "E5SM2: The House Of Doom"],

            dimensionofthemachineLevels: ["Start: The Gateway", "HUB: The Machine", "MGE1M1: The Pain Drain", "MGE1M2: The Wishing Well", "MGE1M3: Sandy's Room", "MGE2M1: Acid Sanctuary", "MGE2M2: Fading Embers", "MGE3M1: Down The Waste", "MGE3M2: Hell Or Dark Water", "MGE4M1: Grave Machine", "MGE4M2: A Grave Mistake", "MGE5M1: Nazard Terminal", "MGE5M2: Too Deep, Too Greedy", "MGEND: Chthon's Vengeance"],
        }

        const difficulty = ["Easy", "Medium", "Hard", "Nightmare"]

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
                            ${makeList(levelSets["quakeLevels"])}
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

            console.log(levelSets[episode])
            mapList.innerHTML = ""
            mapList.innerHTML = makeList(levelSets[episode])            
        }

        menuEl.querySelector("#episode-select").onchange = (ev => {
            updateMapList();
        }) 
        
        return menuEl
    }
}