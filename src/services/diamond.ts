/**
Diamond
1. Get a discount on Kone where 3 or more purchased. The price dropped to RM 2588.99 per unit
2. Get a discount on Ironhide where the price dropped to RM 2500.00 per unit
3. Get a 3 for 2 deal on Ironhide Cartridge
*/

import { Product, CartProduct } from 'src/types/Product';
import { totalize } from './cart';
import { rounder } from './rounder';

const generalDiscount = 20 / 100;
const koneDiscountAfterThree = -900;
const ironhideDiscount = -799.99;
const ironhideCartridgeSpecialQty = 3;

export function cartTotal(products: Product[]): CartProduct[] {
  const kone = calculateKonePrice(products);
  const ironhide = calculateIronhidePrice(products);
  const ironhideCartridge = calculateIronhideCartridgePrice(products);

  const others = totalize(
    products.filter((product) => {
      return (
        product.name !== 'Kone' &&
        product.name !== 'Ironhide Cartridge' &&
        product.name !== 'Ironhide'
      );
    })
  ).map((product) => ({
    ...product,
    total: rounder(product.total * (1 - generalDiscount)),
  }));

  return [...others, kone, ironhide, ironhideCartridge].filter(Boolean);
}

function calculateKonePrice(products: Product[]): CartProduct {
  const kone = products.filter((product) => product.name === 'Kone');
  const koneQty = kone.length;
  if (!koneQty) {
    return;
  }

  let konePrice =
    koneQty >= 3
      ? kone[0].price + koneDiscountAfterThree
      : kone[0].price * (1 - generalDiscount);

  return {
    name: kone[0].name,
    price: konePrice,
    total: rounder(koneQty * konePrice),
    qty: koneQty,
  };
}

function calculateIronhidePrice(products: Product[]) {
  const ironhide = products.filter((product) => product.name === 'Ironhide');
  const ironhideQty = ironhide.length;
  if (!ironhideQty) {
    return;
  }

  const ironHidePrice = ironhide[0].price + ironhideDiscount;

  return {
    name: ironhide[0].name,
    price: ironHidePrice,
    total: rounder(ironhideQty * ironHidePrice),
    qty: ironhideQty,
  };
}

function calculateIronhideCartridgePrice(products: Product[]): CartProduct {
  const ironhideCartridge = products.filter(
    (product) => product.name === 'Ironhide Cartridge'
  );
  const ironhideCartridgeQty = ironhideCartridge.length;
  const normalPriceQty =
    (ironhideCartridgeQty % ironhideCartridgeSpecialQty) *
    (1 - generalDiscount);
  const specialPriceQty =
    Math.floor(ironhideCartridgeQty / ironhideCartridgeSpecialQty) * 2;

  if (!ironhideCartridgeQty) {
    return;
  }

  return {
    name: ironhideCartridge[0].name,
    price: ironhideCartridge[0].price,
    total: rounder(
      (normalPriceQty + specialPriceQty) * ironhideCartridge[0].price
    ),
    qty: ironhideCartridgeQty,
  };
}
