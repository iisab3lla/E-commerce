import { Base } from "./Base";
import { Rate, Rating } from "./Rating";
import { Comment } from "./Comment";
import { ratings } from "./../db/ratings";
import { comments } from "./../db/comment";
import { User } from "./User";

export class Product extends Base {
  public name: string;
  public value: number;
  private _rating: Rating[];
    id: any;

  constructor(name: string, value: number) {
    super();
    this.name = name;
    this.value = value;
    this._rating = [];
  }

  public show(): string {
    const resposta = `Produto: ${this.name}\nValor: R$${this.value}`;
    console.log(resposta);
    console.log(`\n---------------------\n`);
    return resposta;
  }

  public showDetails(): string {
    const productComments = comments.filter(
      (comment) => comment.product === this
    );

    if (productComments.length !== 0) {
      productComments.forEach((comment) =>
        console.log(`[${comment.fromUser.username}]: Nota: (${comment.content})`)
      
      );
    } else {
      console.log("Não existem comentários!");
    }
    console.log(`\n---------------------\n`);

    const productRatings = ratings.filter((rating) => rating.product === this);

    if (productRatings.length !== 0) {
      const averageRating =
        productRatings.reduce((sum, rating) => sum + rating.rate, 0) /
        productRatings.length;
      console.log(`A média das avaliações é: ${averageRating.toFixed(1)}`);
    } else {
      console.log("Não existem avaliações!");
    }

    return ``;
  }

  // user = User
  public comment(content: string, user: any): void {
    const comment = new Comment(content, this, user);
    comments.push(comment);
  }

  // user = User
  public rate(rate: Rate, user: User): void {
    const rating = new Rating(rate, this, user);
    ratings.push(rating);
  }
}
