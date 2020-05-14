import { getPriceTotal } from './cart';
import { cartTotal } from './associate';

const santa = { name: 'SANTA CRUZ', price: 185.5 };
const notSanta = [
  { name: 'Fox + Float', price: 66.0 },
  { name: 'Ironhide', price: 3299.99 },
];
const cartA = [...notSanta, ...Array(3).fill(santa)];

describe('associate', () => {
  test('calculate cart total A', () => {
    expect(getPriceTotal(cartTotal(cartA))).toBe(3568.69);
  });
});
