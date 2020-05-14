import { Product, CartProduct } from 'src/types/Product';
import { UserType } from 'src/types/User';
import { rounder } from './rounder';
import { cartTotal as associateCartTotal } from './associate';
import { cartTotal as platinumCartTotal } from './platinum';
import { cartTotal as diamondCartTotal } from './diamond';

export function combineCartProducts(products: Product[], userType: UserType) {
  switch (userType) {
    case 'diamond':
      return diamondCartTotal(products);

    case 'platinum':
      return platinumCartTotal(products);

    case 'associate':
      return associateCartTotal(products);

    default:
      break;
  }
}

export function getPriceTotal(products: CartProduct[]) {
  return rounder(products.reduce((acc, curr) => acc + curr.total, 0));
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
