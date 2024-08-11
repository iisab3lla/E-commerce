"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Base_1 = require("./Base");
class User extends Base_1.Base {
    name;
    username;
    email;
    _cart;
    constructor(name, username, email) {
        super();
        this.name = name;
        this.username = username;
        this.email = email;
        this._cart = [];
    }
    addToCart(product) {
        this._cart.push(product);
    }
    removeFromCart(product) {
        this._cart = this._cart.filter((p) => p.id !== product.id);
    }
    showProducts() {
        return this._cart.map((product) => product.show()).join(", ");
    }
    rateProduct(product, rate) {
    }
}
exports.User = User;
