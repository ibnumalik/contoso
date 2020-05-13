import { combineCartProducts, getPriceTotal } from './cart';

const products = [
  { name: 'Kone', price: 3488.99 },
  { name: 'Kone', price: 3488.99 },
  { name: 'Ironhide', price: 3299.99 },
  { name: 'Ironhide Cartridge', price: 529.99 },
  { name: 'Ironhide Cartridge', price: 529.99 },
];

test('calculate cart total', () => {
  expect(getPriceTotal(products)).toBe(11337.95);
});
