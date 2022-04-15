class Multiplayer {

    // Render Multiplayer Menu
    render() {
        let menuEl = document.createElement('div');

        menuEl.innerHTML = `
            <h1><img class="multiplayer-heading heading" src="assets/sprites/trans.png" alt="multiplayer-menu"></h1>

            <ul class="quake-large">
                <li class="menu-item modal-toggle" id="online">Online</li>
                <li class="menu-item" id="local-play">Local Play</li>
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