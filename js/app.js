let game;
const startBtn = document.getElementById('btn__reset');


//when user clicks on start button, begin the game
startBtn.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

//Listen to the screen keyboard
const keyboard = document.getElementById('qwerty');
keyboard.addEventListener('click', (event) => {
    if (event.target.className.includes('keyForPhysicalKyboard')) {
        game.handleInteraction(event.target);
    };
});


//the class name 'keyForPhysicalkyboard' does not change with game methods, use it to find all keys
const keys = document.getElementsByClassName('keyForPhysicalKyboard');

//Listen to physical keyboard
window.addEventListener('keydown', (event) => {
    const key = event.keyCode;

    const string = String.fromCharCode(key).toLowerCase();
    //if player pressed a character, find the corresponding key on screen then fire handleInteraction method on game
    const overlay = document.getElementById('overlay');
    if (overlay.style.display === 'none') {
        if (/^[a-z]$/.test(string)) {
            for (let i = 0; i < keys.length; i++) {
                if (string === keys[i].textContent) {
                    game.handleInteraction(keys[i]);
                    console.log(key[i]);
                };
            };
        };
    }
});