class OptionsDisplay {

    // Render Options Display Menu
    render() {
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
            <h1><img class="options-heading heading" src="assets/sprites/trans.png" alt="options-display-menu"></h1>

            <table>
                <tr>
                    <th>
                        Display
                    </th>
                </tr>
                <tr>
                    <td>
                        Brightness
                    </td>
                    <td>
                        <div class="slide-container">
                            <p><span id="brightness"></span></p>
                            <input type="range" min="0" max="20" value="12" class="slider" id="brightness-slider">
                        </div>
                    </td>
                </th>
                <tr>
                    <td>
                        Field Of View
                    </td>
                    <td>
                        <div class="slide-container">
                            <p><span id="field-of-view"></span></p>
                            <input type="range" min="75" max="125" value="100" step="5" class="slider" id="field-of-view-slider">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        Split Direction
                    </td>
                    <td>
                        Horizontal
                    </td>
                <tr>
                    <td>
                        <label class="triangle-cursor" for="texture-smoothing">Texture Smoothing</label>
                    </td>
                    <td>
                        <input type="checkbox" id="texture-smoothing" name="texture-smoothing" value="on">
                        <label class="on-off" for="texture-smoothing"></label>
                    </td>
                </tr>
                <tr>
                    <th>
                        Enhancements
                    </th>
                </tr>
                <tr>
                    <td>
                        <label class="triangle-cursor" for="resolution">Resolution</label>
                    </td>
                    <td>
                        <input type="checkbox" id="resolution" name="resolution" value="on">
                        <label class="on-off" for="resolution"></label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="triangle-cursor" for="antialiasing">Antialiasing</label>
                    </td>
                    <td>
                        <input type="checkbox" id="antialiasing" name="antialiasing" value="on">
                        <label class="on-off" for="antialiasing"></label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="triangle-cursor" for="ambient-occlusion">Ambient Occlusion</label>
                    </td>
                    <td>
                        <input type="checkbox" id="ambient-occlusion" name="ambient-occlusion" value="on">
                        <label class="on-off" for="ambient-occlusion"></label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="triangle-cursor" for="depth-of-field">Depth Of Field</label>
                    </td>
                    <td>
                        <input type="checkbox" id="depth-of-field" name="depth-of-field" value="on">
                        <label class="on-off" for="depth-of-field"></label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="triangle-cursor" for="motion-blur">Motion Blur</label>
                    </td>
                    <td>
                        <input type="checkbox" id="motion-blur" name="motion-blur" value="on">
                        <label class="on-off" for="motion-blur"></label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="triangle-cursor" for="model-interpolation">Model Interpolation</label>
                    </td>
                    <td>
                        <input type="checkbox" id="model-interpolation" name="model-interpolation" value="on">
                        <label class="on-off" for="model-interpolation"></label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="triangle-cursor" for="enhanced-models">Enhanced Models</label>
                    </td>
                    <td>
                        <input type="checkbox" id="enhanced-models" name="enhanced-models" value="on">
                        <label class="on-off" for="enhanced-models"></label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="triangle-cursor" for="color-lightmaps">Color Lightmaps<label>
                    </td>
                    <td>
                        <input type="checkbox" id="color-lightmaps" name="color-lightmaps" value="on">
                        <label class="on-off" for="color-lightmaps"></label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="triangle-cursor" for="fog">Fog</label>
                    </td>
                    <td>
                        <input type="checkbox" id="fog" name="fog" value="on">
                        <label class="on-off" for="fog"></label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="triangle-cursor" for="dynamic-shadows">Dynamic Shadows</label>
                    </td>
                    <td>
                        <input type="checkbox" id="dynamic-shadows" name="dynamic-shadows" value="on">
                        <label class="on-off" for="adynamic-shadows"></label>
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