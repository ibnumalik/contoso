export function rounder(price: number) {
    return Math.round((price + Number.EPSILON) * 100) / 100;
}
