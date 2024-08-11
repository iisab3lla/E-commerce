"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const crypto_1 = require("crypto");
class Base {
    _id;
    constructor() {
        this._id = (0, crypto_1.randomUUID)(); //gera um id automático a cada instância nova
    }
}
exports.Base = Base;
