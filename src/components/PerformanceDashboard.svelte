<script>
  import { onMount } from 'svelte';
  import axios from 'axios';

  export let businessId;

  let analytics = { views: 0, clicks: 0 };

  onMount(async () => {
    const response = await axios.get(`http://localhost:5000/api/analytics/${businessId}`);
    analytics = response.data;
  });
</script>

<div class="bg-white p-4 rounded shadow">
  <h4 class="font-bold text-lg">Performance Dashboard</h4>
  <p><strong>Views:</strong> {analytics.views}</p>
  <p><strong>Clicks:</strong> {analytics.clicks}</p>
</div>