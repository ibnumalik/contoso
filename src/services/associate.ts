import { Product, CartProduct } from 'src/types/Product';
import { totalize } from './cart';
import { rounder } from './rounder';

const generalDiscount = 5 / 100;

export function cartTotal(products: Product[]): CartProduct[] {
  let santaTotal = calculateSantaCruz(products);
  const totalExceptSanta = totalize(
    products.filter((product) => product.name !== 'SANTA CRUZ')
  ).map((product) => ({
    ...product,
    total: rounder(product.total * (1 - generalDiscount)),
  }));

  return santaTotal ? [...totalExceptSanta, santaTotal] : totalExceptSanta;
}

// For every 3 pay 2
function calculateSantaCruz(products: Product[]): CartProduct {
  const specialQty = 3;
  const santa = products.filter((product) => product.name === 'SANTA CRUZ');
  const santaQty = santa.length;
  const normalPriceQty = (santaQty % specialQty) * (1 - generalDiscount);
  // buy 3 get 2 price
  const specialPriceQty = Math.floor(santaQty / specialQty) * 2;

  if (!santaQty) {
    return;
  }

  return {
    name: santa[0].name,
    price: santa[0].price,
    total: rounder((normalPriceQty + specialPriceQty) * santa[0].price),
    qty: santaQty,
  };
}
