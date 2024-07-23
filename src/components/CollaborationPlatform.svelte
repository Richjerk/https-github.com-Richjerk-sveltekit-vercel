<script>
  let messages = [];
  let newMessage = '';

  function sendMessage() {
    if (newMessage.trim()) {
      messages.push({ content: newMessage, timestamp: new Date().toLocaleTimeString() });
      newMessage = '';
    }
  }
</script>

<div class="bg-gray-100 p-4 rounded">
  <h3 class="text-xl font-bold mb-2">Collaboration Platform</h3>
  <div class="bg-white p-4 rounded shadow mb-4">
    {#each messages as message}
      <div class="border-b py-2">
        <p>{message.content}</p>
        <span class="text-gray-500 text-sm">{message.timestamp}</span>
      </div>
    {/each}
  </div>
  <form on:submit|preventDefault={sendMessage} class="flex">
    <input type="text" bind:value={newMessage} class="border rounded px-3 py-2 w-full" placeholder="Type your message..." required>
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
      Send
    </button>
  </form>
</div>