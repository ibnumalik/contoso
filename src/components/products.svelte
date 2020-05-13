<script lang="ts">
  const products = [
    { name: 'Kone', price: 3488.99 },
    { name: 'Ironhide', price: 3299.99 },
    { name: 'Ironhide Cartridge', price: 529.99 },
    { name: 'Fox + Float', price: 66.0 },
    { name: 'Shimano + Derailuer', price: 67.6 },
    { name: 'SANTA CRUZ', price: 185.5 },
  ];
</script>

<h2 class="text-2xl mb-8">Products</h2>

<ul class="flex flex-wrap">
  {#each products as product}
  <li class="w-1/3">
    <div class="p-2">
      <div class="rounded border">
        <p
          class="flex items-center justify-center bg-teal-600 text-teal-100 h-32 p-4"
        >
          {product.name}
        </p>

        <footer class="text p-4 border-t flex justify-between items-center">
          <div class="price">
            RM {product.price}
          </div>

          <button class="uppercase text-sm rounded hover:bg-gray-300 px-4 py-2">
            Add to cart
          </button>
        </footer>
      </div>
    </div>
  </li>
  {/each}
</ul>
