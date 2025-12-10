export default class Building {
    constructor(sqft) {
        if (this.constructor !== Building && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
            throw new Error('Class extending Building must override evacuationWarningMessage');
        }
        this._sqft = sqft;
    }
    //getters
    get sqft() {
        return this._sqft;
    }

    set sqft(value) {
        if (typeof value !== "number" || Number.isNaN(value)) {
            throw new TypeError('sqft must be an integer')
        }
        this._sqft = value;
    }

    evacuationWarningMessage() {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}
