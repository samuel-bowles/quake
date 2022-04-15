class OptionsCredits {

    // Render Options Credits Screen
    render() {
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
        
            <ul class="quake-small">
                <li>Quake Copy 2022 &copy;</li>
                <li>Background Video Recorded on my Nintendo Switch</li>
                <li>Sound files obtained from <a href="https://www.sounds-resource.com/pc_computer/quakeexpansions/sound/15383/">Here</a></li>
                <li>Sprite resources obtained from <a href="https://www.spriters-resource.com/pc_computer/quake/sheet/165194/">Here.</a></li>
                <li>All rights of Quake to whoever owns them. It's not me. Probably id or Bethesda. <br>
                Or wait doesn't Microsoft own them now? Anyway hope you like this little project.</li>
            </ul>
        `

        return menuEl
    }
}