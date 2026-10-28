const root = document.documentElement;
const directionStatus = document.querySelector('#direction-status');
const directionButtons = document.querySelectorAll('[data-direction]');
const writingModeButtons = document.querySelectorAll('[data-writing-mode]');

function updateButtonState(buttons, selectedButton) {
    buttons.forEach((button) => {
        const isSelected = button === selectedButton;
        button.classList.toggle('is-selected', isSelected);
        button.setAttribute('aria-pressed', String(isSelected));
    });
}

function updateStatus() {
    const direction = root.dir === 'rtl' ? 'right to left' : 'left to right';
    const writingMode = root.dataset.writingMode === 'vertical-rl'
        ? 'vertical right to left'
        : 'horizontal';

    directionStatus.textContent = `Current direction: ${direction}. Current writing mode: ${writingMode}.`;
}

directionButtons.forEach((button) => {
    button.addEventListener('click', () => {
        root.dir = button.dataset.direction;
        updateButtonState(directionButtons, button);
        updateStatus();
    });
});

writingModeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        root.dataset.writingMode = button.dataset.writingMode;
        updateButtonState(writingModeButtons, button);
        updateStatus();
    });
});
