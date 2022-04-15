class MainMenu {

    // Render Main Menu
    render() {
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
            <h1><img class="main-menu-heading heading" src="assets/sprites/trans.png" alt="main-menu"></h1>
            <ul class="quake-large">
                <li class="menu-item" id="single-player" tabindex="1">Single Player</li>
                <li class="menu-item" id="multiplayer" tabindex="2">Multiplayer</li>
                <li class="menu-item modal-toggle" id="add-ons" tabindex="3">Add-Ons</li>
                <li class="menu-item modal-toggle" id="news" tabindex="4">News</li>
                <li class="menu-item modal-toggle" id="achievements" tabindex="5">Achievements</li>
                <li class="menu-item" id="options" tabindex="6">Options</li>
            </ul>

            <dialog class="modal" id="modal">
                <p>Connecting...</p>
                <button class="ui-button close-button quake-small"><span>A</span> Back</button>
            </dialog>
        `
        
        addOnClickHashChange(menuEl);
        const modal = menuEl.querySelector('.modal')
        const openModal = menuEl.querySelectorAll('.modal-toggle');
        const closeModal = menuEl.querySelector('.close-button');

        openModal.forEach(element => {
            element.addEventListener('click', () => {
                modal.showModal();
            })
        })

        closeModal.addEventListener('click', () => {
            modal.close();
        })



        return menuEl
    }
}