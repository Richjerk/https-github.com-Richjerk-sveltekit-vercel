<script>
  let userName = '';
  let userEmail = '';
  let userWhatsapp = '';
  let errorMessage = '';

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function handleSubmit() {
    // Reset error message
    errorMessage = '';

    // Validate fields
    if (!userName || !userEmail || !userWhatsapp) {
      errorMessage = 'All fields are required.';
      return;
    }

    if (!validateEmail(userEmail)) {
      errorMessage = 'Please enter a valid email address.';
      return;
    }

    // Handle form submission logic here
    console.log('User registered:', { userName, userEmail, userWhatsapp });
  }
</script>

<h2 class="text-2xl font-bold mb-4">User Registration</h2>

<form on:submit|preventDefault={handleSubmit}>
  <div class="mb-4">
    <label for="userName" class="block font-bold mb-2">Name</label>
    <input type="text" id="userName" bind:value={userName} class="border rounded px-3 py-2 w-full" required>
  </div>

  <!-- Other input fields here -->

  {#if errorMessage}
    <p class="text-red-500">{errorMessage}</p>
  {/if}

  <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Register
  </button>
</form>
