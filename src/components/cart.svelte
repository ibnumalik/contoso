<script lang="ts">
  import { cart } from '../stores';
  import { combineCartProducts, getPriceTotal } from '../services/cart';

  export let user;
  let productList = [];
  let total = 0;
  let test;

  cart.subscribe((products) => {
    productList = combineCartProducts(products, user);
    total = getPriceTotal(productList);
    test = JSON.stringify(products, null, 4);
  });

  function addProduct(product) {
    cart.update((products) => [...products, product]);
  }
  function removeProduct(product) {
    cart.update((products) => {
      const index = products.findIndex(prev => prev.name === product.name)
      products.splice(index, 1);

      return products;
    });
  }
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

      <div class="flex items-center">
        <p class="mr-4">RM{product.total.toFixed(2)}</p>

        <div class="flex">
          <button
            class="bg-gray-300 border border-gray-400 h-8 rounded-bl rounded-tl w-8"
            on:click={() => removeProduct(product)}
          >
            -
          </button>
          <span
            class="bg-gray-100 border-t border-b border-gray-400 h-8 w-8 flex items-center justify-center"
          >
            {product.qty}</span
          >
          <button
            class="bg-gray-300 border border-gray-400 h-8 rounded-br rounded-tr w-8"
            on:click={() => addProduct(product)}
          >
            +
          </button>
        </div>
      </div>
    </li>
    {/each}
  </ul>
</section>

<div class="flex justify-between items-center">
  <h2 class="text-2xl">Total</h2>
  <p>RM {total.toFixed(2)}</p>
</div>
