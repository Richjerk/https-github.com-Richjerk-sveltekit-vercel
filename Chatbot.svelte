const ollama = new Ollama({
    apiKey: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOMqqnkVzrm0SdG6UOoqKLsabgH5C9okWi0dh2l9GKJl 140.82.121.3', 
  });

<script>
  import { Ollama } from 'ollama';

  const ollama = new Ollama({
    apiKey: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOMqqnkVzrm0SdG6UOoqKLsabgH5C9okWi0dh2l9GKJl 140.82.121.3', 
  });

  let message = '';
  let response = '';
  let errorMessage = '';

  async function sendMessage() {
    errorMessage = ''; // Reset error message
    try {
      const res = await ollama.chat({
        model: 'gpt-3.5-turbo', // Specify the model you want to use
        messages: [{ role: 'user', content: message }],
      });
      response = res.choices[0].message.content;
    } catch (error) {
      console.error('Error:', error);
      errorMessage = 'An error occurred while processing your request. Please try again later.';
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
    {#if errorMessage}
      <p class="text-red-500">{errorMessage}</p>
    {/if}
  </div>
  <form on:submit|preventDefault={sendMessage} class="mt-4">
    <input type="text" bind:value={message} class="border rounded px-3 py-2 w-full" placeholder="Type your message..." required>
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
      Send
    </button>
  </form>
</div>