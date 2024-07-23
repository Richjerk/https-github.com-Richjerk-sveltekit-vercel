<script>
  export let businessId;
  let rating = 0;
  let comment = '';

  async function submitReview() {
    await fetch('http://localhost:5000/api/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ businessId, rating, comment }),
    });
    rating = 0;
    comment = '';
    alert('Review submitted!');
  }
</script>

<h3 class="text-xl font-bold mb-4">Submit a Review</h3>
<form on:submit|preventDefault={submitReview}>
  <label>
    Rating (1-5):
    <input type="number" bind:value={rating} min="1" max="5" required />
  </label>
  <label>
    Comment:
    <textarea bind:value={comment} required></textarea>
  </label>
  <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Submit Review
  </button>
</form>