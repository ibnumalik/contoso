<script lang="ts">
  import tailwind from './tailwind.svelte';
  import Products from './components/products.svelte';
  import {user} from './stores';

  const members = ['associate', 'platinum', 'diamond'];
  let userMember = '';

  function register(selected) {
    user.update(user => selected);
  }

  user.subscribe(user => userMember = user)
</script>

<div class="container mx-auto">
  <header class="py-4 mb-20 flex justify-between">
    <a href="/">
      <h1 class="uppercase font-bold">Contoso</h1>
    </a>

    <button>Cart</button>
  </header>

  <section class="mb-20 members">
    <h2 class="mb-8 text-2xl">Continue as: {userMember}</h2>

    <ul class="flex">
      {#each members as member}
      <li class="flex-1 px-4 first:pl-0 last:pr-0">

        <button
          class="{member === userMember ? 'bg-indigo-600' : ''} rounded bg-blue-600 px-4 py-6 uppercase font-bold text-center text-blue-200 w-full hover:bg-blue-700"
          on:click={() => register(member)}
        >
          {member}
        </button>
      </li>
      {/each}
    </ul>
  </section>

  <section class="mb-20">
    <Products />
  </section>
</div>
