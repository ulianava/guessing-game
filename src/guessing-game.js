class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
       return this.guessNumber = Math.round((this.max + this.min)/2)
    }

    lower() {
        this.max = this.guessNumber;
    }

    greater() {
        this.min = this.guessNumber
    }
}

module.exports = GuessingGame;
