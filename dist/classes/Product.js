"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const Base_1 = require("./Base");
const Rating_1 = require("./Rating");
const Comment_1 = require("./Comment");
const ratings_1 = require("./../db/ratings");
const comment_1 = require("./../db/comment");
class Product extends Base_1.Base {
    name;
    value;
    _rating;
    id;
    constructor(name, value) {
        super();
        this.name = name;
        this.value = value;
        this._rating = [];
    }
    show() {
        const resposta = `Produto: ${this.name}\nValor: R$${this.value}`;
        console.log(resposta);
        console.log(`\n---------------------\n`);
        return resposta;
    }
    showDetails() {
        const productComments = comment_1.comments.filter((comment) => comment.product === this);
        if (productComments.length !== 0) {
            productComments.forEach((comment) => console.log(`[${comment.fromUser.username}]: Nota: (${comment.content})`));
        }
        else {
            console.log("Não existem comentários!");
        }
        console.log(`\n---------------------\n`);
        const productRatings = ratings_1.ratings.filter((rating) => rating.product === this);
        if (productRatings.length !== 0) {
            const averageRating = productRatings.reduce((sum, rating) => sum + rating.rate, 0) /
                productRatings.length;
            console.log(`A média das avaliações é: ${averageRating.toFixed(1)}`);
        }
        else {
            console.log("Não existem avaliações!");
        }
        return ``;
    }
    // user = User
    comment(content, user) {
        const comment = new Comment_1.Comment(content, this, user);
        comment_1.comments.push(comment);
    }
    // user = User
    rate(rate, user) {
        const rating = new Rating_1.Rating(rate, this, user);
        ratings_1.ratings.push(rating);
    }
}
exports.Product = Product;
