<!-- src/components/Cart.svelte -->
<script>
  import { cart } from './ProductList.svelte';
  import { onMount } from 'svelte';

  let items = [];

  onMount(() => {
    const unsubscribe = cart.subscribe(value => {
      items = value;
    });
    return () => unsubscribe();
  });

  async function checkout() {
    try {
      const response = await fetch('http://localhost:3000/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const session = await response.json();
      const stripe = Stripe('your-stripe-public-key'); // Replace with your Stripe public key
      const { error } = await stripe.redirectToCheckout({ sessionId: session.id });

      if (error) {
        console.error('Error redirecting to checkout:', error);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  }
</script>

<h2 class="text-2xl font-bold mb-4">Shopping Cart</h2>
{#if items.length > 0}
  <ul>
    {#each items as item}
      <li>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</li>
    {/each}
  </ul>
  <button on:click={checkout} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
    Checkout
  </button>
{:else}
  <p>Your cart is empty.</p>
{/if}
