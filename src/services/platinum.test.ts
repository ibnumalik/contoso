import { getPriceTotal } from './cart';
import { cartTotal } from './platinum';

const ironhideCartridge = { name: 'Ironhide Cartridge', price: 529.99 };
const others = [
  { name: 'Kone', price: 3488.99 },
  { name: 'Fox + Float', price: 66.0 },
  { name: 'Shimano + Derailuer', price: 67.6 },
];
const cartA = [...others, ...Array(5).fill(ironhideCartridge)];

describe('platinum', () => {
  test('calculate cart A total', () => {
    expect(getPriceTotal(cartTotal(cartA))).toBe(5199.16);
  });
});
