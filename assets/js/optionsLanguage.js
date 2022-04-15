class OptionsLanguage {

    // Render Options Language Menu
    render(){
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
            <h1><img class="options-heading heading" src="assets/sprites/trans.png" alt="options-language-menu"></h1>

            <table>
                <tr>
                    <th colspan="2">
                        Language
                    </th>
                </tr>
                <tr>
                    <td class="triangle-cursor" >
                        Deutsch
                    </td>
                </tr>
                <tr>
                    <td class="triangle-cursor" >
                        English
                    </td>
                </tr>
                <tr>
                    <td class="triangle-cursor" >
                        Espa&ntilde;ol
                    </td>
                </tr>
                <tr>
                    <td class="triangle-cursor" >
                        Francais
                    </td>
                </tr>
                <tr>
                    <td class="triangle-cursor" >
                        Italiano
                    </td>
                </tr>
                <tr>
                    <td class="triangle-cursor" >
                        Pycckuu
                    </td>
                </tr>
            </table>
        `
        return menuEl
    }
}