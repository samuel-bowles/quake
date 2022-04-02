class OptionsMultiplayer {

    // Render Options Multiplayer Menu
    render() {
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
            <h2>Options</h2>

            <table>
                <tr>
                    <th>
                        Multiplayer
                    </th>
                </tr>
                <tr>
                    <td>
                        <label for="enable-voice-chat">Enable Voice Chat</label>
                    </td>
                    <td>
                        <input type="checkbox" id="enable-voice-chat" name="enable-voice-chat" value="on">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="enable-microphone">Enable Microphone</label>
                    </td>
                    <td>
                        <input type="checkbox" id="enable-microphone" name="enable-microphone" value="on">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="enable-crossplay">Enable Crossplaye</label>
                    </td>
                    <td>
                        <input type="checkbox" id="enable-crossplay" name="enable-crossplay" value="on">
                    </td>
                </tr>
                <tr>
                    <th>Player Configuration</th>
                </tr>
                <tr>
                    <td>
                        Shirt Color
                    </td>
                    <td>
                        Shirt
                    </td>
                </tr>
                <tr>
                    <td>
                        Pants Color
                    </td>
                    <td>
                        Pants
                    </td>
                </tr>
            </table>
        `

        return menuEl
    }
}