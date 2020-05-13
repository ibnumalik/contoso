<script lang="ts">
  import { cart } from '../stores';
  import { combineCartProducts, getPriceTotal } from '../services/cart';

  export let user;
  let productList;
  let total = 0;
  let test;

  cart.subscribe((products) => {
    productList = combineCartProducts(products);
    total = getPriceTotal(productList);
    test = JSON.stringify(products, null, 4);
  });
</script>

<header class="mb-8 flex items-center relative">
  <h2 class="text-2xl mr-4">Cart</h2>
  <span
    class="{ user === 'associate' ? 'bg-blue-500': user === 'diamond' ? 'bg-orange-500' : 'bg-indigo-500'} px-2 py-1 rounded text-white text-xs uppercase"
    style="font-size: 10px;"
  >
    {user}
  </span>
</header>

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

<pre class="bg-gray-200 p-8">{test}</pre>
