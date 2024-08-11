"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = void 0;
class Rating {
    rate;
    _product;
    _user;
    constructor(rate, product, user) {
        this.rate = rate;
        this._product = product;
        this._user = user;
    }
    get product() {
        return this._product;
    }
}
exports.Rating = Rating;
