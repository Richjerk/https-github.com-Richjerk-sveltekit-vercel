<script>
  let eventName = '';
  let eventDate = '';
  let events = [];

  function handleEventSubmit() {
    if (eventName.trim() && eventDate) {
      events = [...events, { name: eventName.trim(), date: eventDate }];
      eventName = ''; // Reset input field
      eventDate = ''; // Reset input field
    }
  }
</script>

<div class="bg-white p-4 rounded shadow">
  <h3 class="text-xl font-bold mb-2">Community Events Calendar</h3>
  <form on:submit|preventDefault={handleEventSubmit}>
    <input type="text" bind:value={eventName} placeholder="Event Name" class="border rounded px-3 py-2 w-full mb-2" required />
    <input type="date" bind:value={eventDate} class="border rounded px-3 py-2 w-full mb-2" required />
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Add Event
    </button>
  </form>
  <h4 class="mt-4 font-bold">Upcoming Events:</h4>
  <ul>
    {#each events as event}
      <li>{event.name} - {event.date}</li>
    {/each}
  </ul>
</div>