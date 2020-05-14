import { getPriceTotal } from './cart';
import { cartTotal } from './diamond';

describe('diamond', () => {
  /*
RECIPIENT: Diamond
Cart Items: Kone, Kone, Kone, Ironhide, Ironhide, Ironhide Cartridge, Ironhide Cartridge, Ironhide Cartridge
Total Expected: RM 13826.95
*/
  const cartA = [
    ...Array(3).fill({ name: 'Kone', price: 3488.99 }),
    ...Array(2).fill({ name: 'Ironhide', price: 3299.99 }),
    ...Array(3).fill({ name: 'Ironhide Cartridge', price: 529.99 }),
  ];

  test('calculate cart A total', () => {
    expect(getPriceTotal(cartTotal(cartA))).toBe(13826.95);
  });

  /*
RECIPIENT: Diamond
Cart Items: Ironhide Cartridge, Ironhide Cartridge, Ironhide Cartridge, SANTA CRUZ, SANTA CRUZ
Total Expected: RM 1356.78
 */
  const cartB = [
    ...Array(2).fill({ name: 'SANTA CRUZ', price: 185.5 }),
    ...Array(3).fill({ name: 'Ironhide Cartridge', price: 529.99 }),
  ];

  test('calculate cart B total', () => {
    expect(getPriceTotal(cartTotal(cartB))).toBe(1356.78);
  });
});
