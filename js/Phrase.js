class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    };

    /**
     * display phrase on game board
     */
    addPhraseToDisplay() {
        const letters = [];
        letters.push(this.phrase.split(''));
        return letters;
    };
};