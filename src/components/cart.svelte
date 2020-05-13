<script lang="ts">
  import { cart } from '../stores';
  import { combineCartProducts, getPriceTotal } from '../services/cart';

  let productList;
  let total = 0;
  let test;

  cart.subscribe((products) => {
    productList = combineCartProducts(products);
    test = JSON.stringify(productList);

    total = getPriceTotal(products);
  });
</script>

<h2 class="text-2xl mb-8">Cart</h2>

<section class="mb-8">
  {#if productList.length < 1}
  <p>No product in cart</p>
  {/if}
  <ul>
    {#each productList as product}
    <li
      class="border-t border-l border-r last:border-b p-4 flex justify-between"
    >
      <p>{product.name}</p>

      <div class="flex">
        <p class="mr-4">Total: {product.qty}</p>
        <p>RM{product.total.toFixed(2)}</p>
      </div>
    </li>
    {/each}
  </ul>
</section>

<div class="flex justify-between items-center">
  <h2 class="text-2xl">Total</h2>
  <p>RM {total.toFixed(2)}</p>
</div>
