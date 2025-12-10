export default class Currency {
    constructor(code, name) {
        this._code = code
        this._name = name
    }
    //getters
    get code() {
        return this._code;
    }
    get name() {
        return this._name;
    }
    //setters with type verification
    set code(value) {
        if (typeof value !== "string") {
            throw new TypeError("code must be a string")
        }
        this._code = value;
    }
    set name(value) {
        if (typeof value !== "string") {
            throw new TypeError("Name must be a string")
        }
        this._name = value
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`
    } 
}
