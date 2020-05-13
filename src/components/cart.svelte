<script lang="ts">
  import { cart } from '../stores';

  let productList;

  cart.subscribe((products) => (productList = products));
</script>

<h2 class="text-2xl mb-8">Cart</h2>

{#if productList.length < 1} No product in cart {/if}
<ul>
  {#each productList as product}
  <li class="border-t border-l border-r last:border-b p-4 flex justify-between">
    <p>{product.name}</p>

    <p>RM{product.price.toFixed(2)}</p>
  </li>
  {/each}
</ul>
