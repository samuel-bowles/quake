class OptionsSound {

    // Render Options Sound Menu
    render() {
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
            <h2>Options</h2>

            <table>
                <tr>
                    <th>
                        Sound
                    </th>
                </tr>
                <tr>
                    <td>
                        Music Volume
                    </td>
                    <td>
                        <div class="slide-container">
                            <p><span id="music-volume"></span></p>
                            <input type="range" min="0" max="10" value="10" class="slider" id="music-volume-slider">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        Sound Volume
                    </td>
                    <td>
                        <div class="slide-container">
                            <p><span id="sound-volume"></span></p>
                            <input type="range" min="0" max="10" value="5" class="slider" id="sound-volume-slider">
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

        return menuEl;

    }
}