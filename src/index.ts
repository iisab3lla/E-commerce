import { Product } from "./classes/Product";
import { User } from "./classes/User";

const user1 = new User("Amanda Ohsel", "EUA", "gu@ikigade.bg");
const user2 = new User("Charlote Mends", "Canada", "amehe@lulozaol.ir");
const user3 = new User("Madge Baldwin", "Australia", "jutat@ufilo.cg");
const product1 = new Product("Shampoo", 500);

product1.show();
product1.comment("Essa shampoo é bom demais", user1);
product1.comment("Essa shampoo é bom demais", user2);
product1.comment("Essa shampoo é péssimo", user3);

product1.rate(5, user1);
product1.rate(3, user2);
product1.rate(1, user3);

product1.showDetails();
