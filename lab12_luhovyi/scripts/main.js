const menuButton = document.querySelector('.js-menu-button');
const menuButtonIcon = document.querySelector('.js-menu-button-icon');
const headerColumn = document.querySelector('.js-header-column');

function toggleMenu() {
    const isActive = headerColumn.classList.toggle('is-active');
    menuButton.classList.toggle('is-active');
    document.body.classList.toggle('no-scroll');

    if (isActive) {
        menuButtonIcon.src = 'images/close.svg';
    } else {
        menuButtonIcon.src = 'images/menu.svg';
    }
}

menuButton.addEventListener('click', toggleMenu);