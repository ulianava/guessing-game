class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
       return this.midium = Math.round((this.max + this.min)/2)
    }

    lower() {
        this.max = this.midium;
    }

    greater() {
        this.min = this.midium
    }
}

module.exports = GuessingGame;
