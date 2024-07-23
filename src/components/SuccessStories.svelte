<script>
  // Mock data for success stories
  let stories = [
    {
      name: "Joe's Coffee",
      story: "Started as a small stall, now a popular coffee shop in the township, serving over 200 customers daily.",
    },
    {
      name: "Jane's Bakery",
      story: "Began with a family recipe, now a thriving bakery known for its artisanal bread and pastries.",
    },
  ];
</script>

<h3 class="text-xl font-bold mb-4">Success Stories</h3>
<div class="grid grid-cols-1 gap-4">
  {#each stories as story}
    <div class="bg-white p-4 rounded shadow">
      <h4 class="font-bold text-lg">{story.name}</h4>
      <p>{story.story}</p>
    </div>
  {/each}
</div>