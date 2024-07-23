<!-- src/components/ProductList.svelte -->
<script>
  import { writable } from 'svelte/store';

  // Store to manage cart items
  export const cart = writable([]);

  // Sample product data
  let products = [
    { id: 1, name: "Product 1", price: 10.00, description: "Description of Product 1", image: "path/to/image1.jpg" },
    { id: 2, name: "Product 2", price: 15.00, description: "Description of Product 2", image: "path/to/image2.jpg" },
    // Add more products as needed
  ];

  function addToCart(product) {
    cart.update(items => {
      const existing = items.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        items.push({ ...product, quantity: 1 });
      }
      return items;
    });
  }
</script>

<h2 class="text-2xl font-bold mb-4">Products</h2>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {#each products as product}
    <div class="border rounded p-4">
      <img src={product.image} alt={product.name} class="w-full h-48 object-cover mb-2">
      <h3 class="font-bold">{product.name}</h3>
      <p>{product.description}</p>
      <p class="text-lg font-bold">${product.price.toFixed(2)}</p>
      <button on:click={() => addToCart(product)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
  {/each}
</div>