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
};