<script>
  import Navbar from './components/Navbar.svelte';
  import Footer from './components/Footer.svelte';

  export let name;
</script>

<main>
  <!-- Navbar -->
  <Navbar />

  <!-- Main Content Container -->
  <div class="container mx-auto py-8">
    <h1>Hello {name}!</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  </div>

  <!-- Footer -->
  <Footer />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  a {
    color: #ff3e00;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
