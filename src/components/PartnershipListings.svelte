<script>
  let partnerships = [];
  let businessName = '';
  let partnershipDescription = '';

  function addPartnership() {
    if (businessName.trim() && partnershipDescription.trim()) {
      partnerships.push({ name: businessName, description: partnershipDescription });
      businessName = '';
      partnershipDescription = '';
    }
  }
</script>

<div class="bg-gray-100 p-4 rounded mt-4">
  <h3 class="text-xl font-bold mb-2">Partnership Listings</h3>
  <form on:submit|preventDefault={addPartnership} class="mb-4">
    <input type="text" bind:value={businessName} class="border rounded px-3 py-2 w-full mb-2" placeholder="Business Name" required>
    <textarea bind:value={partnershipDescription} class="border rounded px-3 py-2 w-full mb-2" placeholder="Partnership Description" required></textarea>
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Add Partnership
    </button>
  </form>
  <div class="grid grid-cols-1 gap-4">
    {#each partnerships as partnership}
      <div class="bg-white p-4 rounded shadow">
        <h4 class="font-bold text-lg">{partnership.name}</h4>
        <p>{partnership.description}</p>
      </div>
    {/each}
  </div>
</div>