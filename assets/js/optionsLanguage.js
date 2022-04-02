class OptionsLanguage {

    // Render Options Language Menu
    render(){
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
            <h2>Options</h2>
            <table>
                <tr>
                    <th>
                        Language
                    </th>
                </tr>
                <tr>
                    <td>
                        Deutsch
                    </td>
                </tr>
                <tr>
                    <td>
                        English
                    </td>
                </tr>
                <tr>
                    <td>
                        Espa&ntilde;ol
                    </td>
                </tr>
                <tr>
                    <td>
                        Francais
                    </td>
                </tr>
                <tr>
                    <td>
                        Italiano
                    </td>
                </tr>
                <tr>
                    <td>
                        Pycckuu;
                    </td>
                </tr>
            </table>
        `
        return menuEl
    }
}