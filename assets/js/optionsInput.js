class OptionsInput {

    // Render Options Input Menu
    render() {
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
            <h1><img class="options-heading heading" src="assets/sprites/trans.png" alt="options-input-menu"></h1>

            <table>
                <tr>
                    <th>
                        Current Player: Player 1
                    </th>
                </tr>
                <tr>
                    <td>
                        Customize Bindings
                    </td>
                </tr>
                <tr>
                    <th>Controller</th>
                </tr>
                <tr>
                    <td>
                        <label class="triangle-cursor" for="aim-assist">Aim Assist</label>
                    </td>
                    <td >
                        <input type="checkbox" id="aim-assist" name="aim-assist" value="on">
                        <label class="on-off" for="aim-assist"></label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="triangle-cursor" for="invert-look">Invert Look<label>
                    </td>
                    <td>
                        <input type="checkbox" id="invert-look" name="invert-look" value="on">
                        <label class="on-off" for="invert-look"></label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="triangle-cursor" for="vibration-feature">Vibration Feature</label>
                    </td>
                    <td>
                        <input type="checkbox" id="vibration-feature" name="vibration-feature" value="on">
                        <label class="on-off" for="vibration-feature"></label>
                    </td>
                </tr>
                <tr>
                    <td>
                        Vibration Intensity   
                    </td>
                    <td>
                        <div class="slide-container">
                            <p><span id="vibration-intensity"></span></p>
                            <input type="range" min="1" max="10" value="5" class="slider" id="vibration-intensity-slider">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        Aim X
                    </td>
                    <td>
                        <div class="slide-container">
                            <p><span id="aim-x"></span></p>
                            <input type="range" min="1" max="20" value="7" class="slider" id="aim-x-slider">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        Aim Y
                    </td>
                    <td>
                        <div class="slide-container">
                            <p><span id="aim-y"></span></p>
                            <input type="range" min="1" max="20" value="7" class="slider" id="aim-y-slider">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        Aim Accel
                    </td>
                    <td>
                        <div class="slide-container">
                            <p><span id="aim-accel"></span></p>
                            <input type="range" min="0" max="50" value="3" class="slider" id="aim-accel-slider">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        Accel Exponent
                    </td>
                    <td>
                        <div class="slide-container">
                            <p><span id="accel-exponent"></span></p>
                            <input type="range" min="1" max="4" value="2" step="0.5" class="slider" id="accel-exponent-slider">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="triangle-cursor" for="aim-smoothing">Aim Smoothing</label>
                    </td>
                    <td>
                        <input type="checkbox" id="aim-smoothing" name="aim-smoothing" value="on">
                        <label class="on-off" for="aim-smoothing"></label>
                    </td>
                </tr>
                <tr>
                    <th>
                        Deadzone
                    </th>
                </tr>
                <tr>
                    <td>
                        Left Stick
                    </td>
                    <td>
                        <div class="slide-container">
                            <p><span id="left-stick"></span></p>
                            <input type="range" min="5" max="50" value="10" class="slider" id="left-stick-slider">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        Right Stick
                    </td>
                    <td>
                        <div class="slide-container">
                            <p><span id="right-stick"></span></p>
                            <input type="range" min="5" max="50" value="10" class="slider" id="right-stick-slider">
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>
                        Motion Sensor
                    </th>
                </tr>
                <tr>
                <td>
                    <label class="triangle-cursor" for="motion-sensor">Enabled</label>
                </td>
                <td>
                    <input type="checkbox" id="motion-sensor" name="motion-sensor" value="off">
                    <label class="on-off" for="motion-sensor"></label>
                </td>
                </tr>
                <tr>
                    <td>
                        Aim X
                    </td>
                    <td>
                        <div class="slide-container">
                            <p><span id="aim-x-motion"></span></p>
                            <input type="range" min="1" max="64" value="17" class="slider" id="aim-x-motion-slider">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        Aim Y
                    </td>
                    <td>
                        <div class="slide-container">
                            <p><span id="aim-y-motion"></span></p>
                            <input type="range" min="1" max="64" value="17" class="slider" id="aim-y-motion-slider">
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

        addOnClickHashChange(menuEl);

        return menuEl
    }
}