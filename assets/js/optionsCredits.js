class OptionsCredits {

    // Render Options Credits Screen
    render() {
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
        
            <ul>
                <li>Web Site by Samuel Bowles &copy;</li>
                <li>All rights of Quake to whoever owns them. It's not me. Probably id or Bethesda. </li>
            </ul>
        `

        return menuEl
    }
}