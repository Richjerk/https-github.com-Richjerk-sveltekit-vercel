<script>
  import { onMount } from 'svelte';
  import axios from 'axios';
  import ReviewForm from './ReviewForm.svelte';
  import PerformanceDashboard from './PerformanceDashboard.svelte'; // Import the PerformanceDashboard component

  let businesses = [];
  let selectedBusinessId = null;
  let searchQuery = '';
  let selectedCategory = '';

  // Fetch businesses from the server when the component mounts
  onMount(async () => {
    try {
      const response = await fetch('http://localhost:5000/api/businesses');
      businesses = await response.json();
    } catch (error) {
      console.error('Error fetching businesses:', error);
    }
  });

  // Extract unique categories from the fetched businesses
  const categories = [...new Set(businesses.map(b => b.category))];

  // Filter businesses based on search query and selected category
  function filteredBusinesses() {
    return businesses.filter(business => {
      const matchesSearch = business.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? business.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }

  // Track views
  async function trackView(businessId) {
    try {
      await axios.post('http://localhost:5000/api/analytics/update', {
        businessId,
        type: 'view',
      });
    } catch (error) {
      console.error('Error tracking view:', error);
    }
  }

  // Track clicks
  async function trackClick(businessId) {
    try {
      await axios.post('http://localhost:5000/api/analytics/update', {
        businessId,
        type: 'click',
      });
    } catch (error) {
      console.error('Error tracking click:', error);
    }
  }

  // Show the review form for the selected business
  function showReviews(businessId) {
    selectedBusinessId = businessId;
  }
</script>

<h3 class="text-xl font-bold mb-4">Registered Businesses</h3>

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
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {#each filteredBusinesses() as business}
    <div class="bg-white p-4 rounded shadow" on:mouseenter={() => trackView(business._id)} on:click={() => trackClick(business._id)}>
      <h4 class="font-bold text-lg">
        {business.name} {business.featured ? '(Featured)' : ''}
      </h4>
      <p>{business.description}</p>
      <p><strong>Address:</strong> {business.address}</p>
      <p><strong>Email:</strong> {business.email}</p>
      <p><strong>WhatsApp:</strong> {business.whatsapp}</p>
      <button on:click={() => showReviews(business._id)}>View Reviews</button>
      <PerformanceDashboard businessId={business._id} /> <!-- Add PerformanceDashboard component -->
    </div>
  {/each}
</div>

<!-- Conditionally Render the Review Form -->
{#if selectedBusinessId}
  <ReviewForm businessId={selectedBusinessId} />
{/if}
