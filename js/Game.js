class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    };
    /**
    * create multiple new phrases
    * @return {array} - an array of phrase objects to be used in game
    */
    createPhrases() {
        const phrases = [];
        phrases.push(new Phrase('Miss Ji got a computer for free'));
        phrases.push(new Phrase('My code stinks hell but it works'));
        phrases.push(new Phrase('nothing is worse than reviewing my code'));
        phrases.push(new Phrase('object oriented javascript is mysterious'));
        phrases.push(new Phrase('javascript is not java'));
        return phrases;
    };

    /**
     * get the random phrase to guess
     * @return {object} - random phrase object from the phrases array
     */
    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * 5);
        return this.phrases[randomIndex];
    };

    /**
     * start the game by hiding overlay, assigning a random phrase as activePhrase and render the phrase HTML by calling getRandomPhrase()
     */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    /**
     * Handle Game logic, show letters when user selects correct letters, lose heart when wrong. 5 wrong choices lead to game lose
     * 
     */
    handleInteraction(eventTarget) {
        eventTarget.disabled = true;
        if (!this.activePhrase.checkLetter(eventTarget.textContent)) {
            eventTarget.classList.remove('key');
            eventTarget.classList.add('wrong');
            this.removeLife();
        } else {
            eventTarget.classList.remove('key');
            eventTarget.classList.add('chosen');
            this.activePhrase.showMatchedLetter(eventTarget.textContent);
            this.checkForWin();
            if (this.checkForWin()) {
                this.gameOver(true);
            };
        };
    };

    /**
     * check if wins
     * @return {boolean} - if player has won the game
     */
    checkForWin() {
        const hideLetters = document.getElementsByClassName('hide');
        return hideLetters.length === 0;
    }

    /**
     * Increases the value of the missed property
     * Remove a life heart from the scoreboard
     * Check if player lost all 5 hearts, if so, end the game
     */
    removeLife() {
        const liveHearts = document.querySelectorAll('[src="images/liveHeart.png"]');
        liveHearts[liveHearts.length - 1].src = 'images/lostHeart.png';
        this.missed++;
        if (this.missed === 5) {
            this.gameOver(false);
        };
    };

    /**
     * Display game over message
     * @param {boolean} gameWon - whether or not the user won the game
     */
    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        const message = document.getElementById('game-over-message');
        if (gameWon === true) {
            message.textContent = 'Congratulations, You Won!';
            overlay.className = 'win';
        } else {
            message.textContent = 'Sorry, You Lost, Try Again?';
            overlay.className = 'lose';
        }
        document.getElementById('overlay').style.display = '';
        //remove all the li (letters) elements from ul
        const parent = document.getElementById('phrase').firstElementChild;
        while (parent.firstElementChild) {
            parent.firstElementChild.remove();
        };
        //enable all buttons and reset their class to 'key'
        const keyboard = document.querySelectorAll('button');
        keyboard.forEach(key => {
            key.classList.add('key');
            key.classList.remove('chosen');
            key.classList.remove('wrong');
            key.disabled = false;
        });
        //reset hearts to live hearts
        const hearts = document.querySelectorAll('[src="images/lostHeart.png"]');
        hearts.forEach(heart => heart.src = 'images/liveHeart.png');
    };
};