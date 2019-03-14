class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    };

    /**
     * display phrase on game board, render html
     */
    addPhraseToDisplay() {
        const letters = this.phrase.split('');
        const ul = document.getElementById('phrase').firstElementChild;
        letters.forEach(letter => {
            const li = document.createElement('li');
            if (letter !== ' ') {
                li.classList.add('hide', 'letter', letter);
                li.textContent = letter;
                ul.appendChild(li);
            } else {
                li.classList.add('space');
                li.textContent = ' ';
                ul.appendChild(li);
            }
        });
    };

    /**
     * check if passed letter is in phrase
     * @param {string} - letter to check
     * @return {boolean} - is letter includes in the array
     */
    checkLetter(letter) {
        const lettersToCheck = this.phrase.split('');
        return lettersToCheck.includes(letter);
    };

    /**
     * reveals the letter(s) on board after finding the matches
     * @param {string} - letter to display
     */
    showMatchedLetter(letter) {
        const matchedLetters = document.getElementsByClassName(letter);
        // use spread to convert HTMLCollection to an array then loop to change class name
        [...matchedLetters].forEach(matchedLetter => {
            matchedLetter.classList.replace('hide', 'show');
            // add some visual effects when letters show
            matchedLetter.style.transition = '.7s';
            matchedLetter.style.perspective = '700px';
            matchedLetter.style.transform = 'rotate3d(1,1,1,1080deg)';
        });
    };



};