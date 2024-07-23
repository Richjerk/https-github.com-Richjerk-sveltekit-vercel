<script>
  import Navbar from './components/Navbar.svelte';
  import Footer from './components/Footer.svelte';
  import { onMount } from 'svelte';
  import Chatbot from './components/Chatbot.svelte';
  import BusinessList from './components/BusinessList.svelte';

  let businesses = [];
  let searchQuery = '';
  let selectedCategory = '';

  // Mock data for businesses
  const mockBusinesses = [
    {
      id: 1,
      name: "Joe's Coffee",
      description: "A cozy coffee shop with the best brews in town.",
      address: "123 Coffee St.",
      email: "info@joescoffee.com",
      whatsapp: "+1234567890",
    },
    {
      id: 2,
      name: "Jane's Bakery",
      description: "Freshly baked goods made daily.",
      address: "456 Bakery Ave.",
      email: "contact@janesbakery.com",
      whatsapp: "+0987654321",
    },
    {
      id: 3,
      name: "Mike's Hardware",
      description: "Your one-stop shop for all hardware needs.",
      address: "789 Tool Rd.",
      email: "info@mikeshardware.com",
      whatsapp: "+1122334455",
    },
  ];

  // Fetch businesses from the server
  onMount(async () => {
    try {
      const response = await fetch('http://localhost:5000/api/businesses');
      businesses = await response.json();
    } catch (error) {
      console.error('Error fetching businesses:', error);
      // Use mock data if there's an error fetching real data
      businesses = mockBusinesses;
    }

    // Extract unique categories after fetching businesses
    categories = [...new Set(businesses.map(b => b.category || 'Uncategorized'))];
  });

  // Extract unique categories dynamically from businesses
  let categories = [];

  // Filter businesses based on search query and selected category
  function filteredBusinesses() {
    return businesses.filter(business => {
      const matchesSearch = business.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? business.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }

  // Function to handle showing reviews (placeholder for future implementation)
  function showReviews(businessId) {
    console.log(`Show reviews for business ID: ${businessId}`);
  }
</script>

<main class="p-4 max-w-4xl mx-auto">
  <!-- Navbar -->
  <Navbar />

  <h1 class="text-3xl font-bold mb-4">Township Small Business Directory</h1>
  
  <!-- Search Input -->
  <div class="mb-4">
    <input
      type="text"
      bind:value={searchQuery}
      placeholder="Search businesses..."
      class="border rounded px-3 py-2 w-full"
    />
  </div>

  <!-- Category Filter -->
  <div class="mb-4">
    <select bind:value={selectedCategory} class="border rounded px-3 py-2 w-full">
      <option value="">All Categories</option>
      {#each categories as category}
        <option value={category}>{category}</option>
      {/each}
    </select>
  </div>

  <!-- Display Filtered Businesses -->
  <div class="grid grid-cols-1 gap-4">
    {#each filteredBusinesses() as business}
      <div class="bg-white p-4 rounded shadow">
        <h4 class="font-bold text-lg">
          {business.name} {business.featured ? '(Featured)' : ''}
        </h4>
        <p>{business.description}</p>
        <p><strong>Address:</strong> {business.address}</p>
        <p><strong>Email:</strong> {business.email}</p>
        <p><strong>WhatsApp:</strong> {business.whatsapp}</p>
        <button on:click={() => showReviews(business.id)}>View Reviews</button>
      </div>
    {/each}
  </div>

  <!-- Main Features -->
  <Chatbot />
  <BusinessList /> <!-- Display the business listings here -->
  <!-- Add other components like BusinessRegistration, UserRegistration, etc. -->

  <!-- Footer -->
  <Footer />
</main>
