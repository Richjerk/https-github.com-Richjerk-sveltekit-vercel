<script>
  import { createClient } from '@smith.ai/langchain';

  const client = createClient({
    apiKey: 'your-api-key-here'
  });

  let message = '';
  let response = '';

  async function sendMessage() {
    try {
      const result = await client.chat({
        messages: [{ role: 'user', content: message }]
      });
      response = result.choices[0].message.content;
    } catch (error) {
      console.error('Error:', error);
      response = 'An error occurred while processing your request.';
    }
    message = '';
  }
</script>

<div class="bg-gray-100 p-4 rounded">
  <h3 class="text-xl font-bold mb-2">Chatbot</h3>
  <div class="bg-white p-4 rounded shadow">
    {#if response}
      <p>{response}</p>
    {:else}
      <p>Hello! How can I assist you today?</p>
    {/if}
  </div>
  <form on:submit|preventDefault={sendMessage} class="mt-4">
    <input type="text" bind:value={message} class="border rounded px-3 py-2 w-full" placeholder="Type your message..." required>
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
      Send
    </button>
  </form>
</div>