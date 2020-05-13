export function combineCartProducts(products: any[]) {
  return products.reduce((acc: any[], curr: any) => {
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

    acc.splice(index, 1);

    return [...acc, update];
  }, []);
}

export function getPriceTotal(products: any[]) {
  return products.reduce((acc, curr) => acc + curr.price, 0);
}
