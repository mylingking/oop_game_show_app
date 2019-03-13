class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    };

    /**
     * display phrase on game board
     */
    addPhraseToDisplay() {
        // create an array of splited letters from the random phrase
        const letters = [];
        letters.push(this.phrase.split(''));
        //create the html of the splited letters
        const div = document.createElement('div');
        const PhraseHTML = document.createElement('div');
        PhraseHTML.className = 'section';
        PhraseHTML.id = 'phrase';
        const ul = document.createElement('ul');
        //loop to add li elements to ul
        letters.forEach(letter => {
            const li = document.createElement('li');
            if (letter === ' ') {
                li.className = 'space';
                li.innerHTML = ' ';
                console.log(li);
            } else {
                li.classList.add('hide', 'letter', letter);
                li.innerHTML = letter;
            };
            ul.appendChild(li);
        });

        console.log(phraseHTML);
    };
};