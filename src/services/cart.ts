import { Product, CartProduct } from 'src/types/Product';
import { UserType } from 'src/types/User';
import { cartTotal } from './associate';

export function combineCartProducts(products: Product[], userType: UserType) {
  switch (userType) {
    case 'diamond':
      return totalize(products);

    case 'platinum':
      return totalize(products);

    case 'associate':
      return cartTotal(products);

    default:
      break;
  }
}

export function getPriceTotal(products: CartProduct[]) {
  return products.reduce((acc, curr) => acc + curr.total, 0);
}

export function totalize(products: Product[]) {
  return products.reduce((acc: CartProduct[], curr: Product) => {
    const index = acc.findIndex((ac) => ac.name === curr.name);

    if (index === -1) {
      return [
        ...acc,
        {
          name: curr.name,
          price: curr.price,
          total: curr.price,
          qty: 1,
        },
      ];
    }

    const currProd = acc[index];
    const update = {
      name: currProd.name,
      total: currProd.total + curr.price,
      qty: currProd.qty + 1,
      price: curr.price,
    };

    acc.splice(index, 1, update);

    return acc;
  }, []);
}
