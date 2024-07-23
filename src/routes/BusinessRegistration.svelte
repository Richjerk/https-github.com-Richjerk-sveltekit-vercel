<script>
  let businessName = '';
  let businessDescription = '';
  let businessImage = '';
  let businessAddress = '';
  let businessEmail = '';
  let businessWhatsapp = '';
  let ownerName = '';
  let errorMessage = '';

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function handleSubmit() {
    // Reset error message
    errorMessage = '';

    // Validate fields
    if (!businessName || !businessDescription || !businessAddress || !businessEmail || !businessWhatsapp || !ownerName) {
      errorMessage = 'All fields are required.';
      return;
    }

    if (!validateEmail(businessEmail)) {
      errorMessage = 'Please enter a valid email address.';
      return;
    }

    // Handle form submission logic here
    console.log('Form submitted:', { businessName, businessDescription, businessAddress, businessEmail, businessWhatsapp, ownerName });
  }
</script>

<h2 class="text-2xl font-bold mb-4">Business Registration</h2>

<form on:submit|preventDefault={handleSubmit}>
  <div class="mb-4">
    <label for="businessName" class="block font-bold mb-2">Business Name</label>
    <input type="text" id="businessName" bind:value={businessName} class="border rounded px-3 py-2 w-full" required>
  </div>
  
  <!-- Other input fields here -->

  {#if errorMessage}
    <p class="text-red-500">{errorMessage}</p>
  {/if}

  <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Register
  </button>
</form>
