<script>
  let businessName = '';
  let ownerName = '';
  let businessAddress = '';
  let contactNumber = '';
  let email = '';
  let description = '';

  async function handleSubmit() {
    // Simulate form submission (replace with actual API call)
    const informalBusinessData = {
      businessName,
      ownerName,
      businessAddress,
      contactNumber,
      email,
      description,
    };

    console.log('Informal Business Registered:', informalBusinessData);
    // Here you would typically send this data to your backend API
  }
</script>

<h2 class="text-2xl font-bold mb-4">Informal Business Registration</h2>

<form on:submit|preventDefault={handleSubmit}>
  <div class="mb-4">
    <label for="businessName" class="block font-bold mb-2">Business Name</label>
    <input type="text" id="businessName" bind:value={businessName} class="border rounded px-3 py-2 w-full" required>
  </div>

  <div class="mb-4">
    <label for="ownerName" class="block font-bold mb-2">Owner Name</label>
    <input type="text" id="ownerName" bind:value={ownerName} class="border rounded px-3 py-2 w-full" required>
  </div>

  <div class="mb-4">
    <label for="businessAddress" class="block font-bold mb-2">Business Address</label>
    <input type="text" id="businessAddress" bind:value={businessAddress} class="border rounded px-3 py-2 w-full" required>
  </div>

  <div class="mb-4">
    <label for="contactNumber" class="block font-bold mb-2">Contact Number</label>
    <input type="text" id="contactNumber" bind:value={contactNumber} class="border rounded px-3 py-2 w-full" required>
  </div>

  <div class="mb-4">
    <label for="email" class="block font-bold mb-2">Email</label>
    <input type="email" id="email" bind:value={email} class="border rounded px-3 py-2 w-full" required>
  </div>

  <div class="mb-4">
    <label for="description" class="block font-bold mb-2">Business Description</label>
    <textarea id="description" bind:value={description} class="border rounded px-3 py-2 w-full" required></textarea>
  </div>

  <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Register Informal Business
  </button>
</form>