"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const Base_1 = require("./Base");
class Comment extends Base_1.Base {
    content;
    _product;
    _fromUser;
    constructor(content, product, from) {
        super();
        this.content = content;
        this._product = product;
        this._fromUser = from;
    }
    get product() {
        return this._product;
    }
    get fromUser() {
        return this._fromUser;
    }
}
exports.Comment = Comment;
