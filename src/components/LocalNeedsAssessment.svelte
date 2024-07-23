<script>
  let request = '';
  let requests = [];

  async function handleSubmit(event) {
    event.preventDefault();
    
    if (request.trim()) {
      try {
        await fetch('http://localhost:5000/api/needs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ request: request.trim() }),
        });
        requests = [...requests, request.trim()];
        request = ''; // Reset input field
      } catch (error) {
        console.error('Error submitting request:', error);
      }
    }
  }
</script>

<div class="bg-white p-4 rounded shadow">
  <h3 class="text-xl font-bold mb-2">Local Needs Assessment</h3>
  <form on:submit|preventDefault={handleSubmit}>
    <textarea bind:value={request} placeholder="What products or services do you need?" class="border rounded px-3 py-2 w-full mb-2" required></textarea>
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Submit Request
    </button>
  </form>
  <h4 class="mt-4 font-bold">Submitted Requests:</h4>
  <ul>
    {#each requests as req}
      <li>{req}</li>
    {/each}
  </ul>
</div>
