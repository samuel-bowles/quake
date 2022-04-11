class OptionsGameplay {

    // Render Options Gameplay Menu
    render() {
        let menuEl = document.createElement('div');

        const hudStyle = ["Off", "Minimal", "Standard", "Full"];
        const crosshairStyle = ["Off", "&plus;", "&percnt;", "O", ".", "&minus;", "╎", "&lowast;"]

        function makeList(arrList) {
            return arrList.map((item) => {
                return `<option value="${item}">${item}</option>`
            })
        }

        menuEl.innerHTML = `
            <h1><img class="options-heading heading" src="assets/sprites/trans.png" alt="options-gameplay-menu"></h1>

            <table>
                <tr>
                    <th>
                        Gameplay
                    </th>
                </tr>
                <tr>
                    <td>
                        <label class="triangle-cursor" for="always-run">Always Run</label>
                    </td>
                    <td>
                        <input type="checkbox" id="always-run" name="always-run" value="on">
                        <label class="on-off" for="always-run"></label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="triangle-cursor" for="view-bob">View Bob</label>
                    </td>
                    <td>
                        <input type="checkbox" id="view-bob" name="view-bob" value="on">
                        <label class="on-off" for="view-bob"></label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="hud-style">Hud Style</label>
                    </td>
                    <td>
                        <select name="hud-style" id="hud-style">
                            ${makeList(hudStyle)}
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>Crosshair</th>
                </tr>
                <tr>
                    <td>
                        <label for="crosshair-style">Crosshair Style</label>
                    </td>
                    <td>
                        <select name="crosshair-style" id="crosshair-style">
                            ${makeList(crosshairStyle)}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Red</td>
                    <td>
                        <div class="slide-container">
                            <p><span id="red"></span></p>
                            <input type="range" min="0" max="255" value="255" class="slider" id="red-slider">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Green</td>
                    <td>
                        <div class="slide-container">
                            <p><span id="green"></span></p>
                            <input type="range" min="0" max="255" value="255" class="slider" id="green-slider">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Blue</td>
                    <td>
                        <div class="slide-container">
                            <p><span id="blue"></span></p>
                            <input type="range" min="0" max="255" value="255" class="slider" id="blue-slider">
                        </div>
                    </td>
                </tr>
            </table>
        `
        
        // Add slider counters
        let slidersInput = menuEl.querySelectorAll(".slider");
        slidersInput.forEach(element => {
            let sliderOutput = menuEl.querySelector('#' + element.id.slice(0, -7))
            sliderOutput.innerHTML = element.value
            element.oninput = function() {
                sliderOutput.innerHTML = this.value
            }
        })

        return menuEl
    }
}