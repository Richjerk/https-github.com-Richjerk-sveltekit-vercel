<script>
  import Chatbot from './components/Chatbot.svelte';
  import BusinessList from './components/BusinessList.svelte';
  import Workshops from './components/Workshops.svelte'; // Import Workshops component
  import SuccessStories from './components/SuccessStories.svelte'; // Import Success Stories component
</script>

<main class="p-4">
  <h1 class="text-3xl font-bold">Township Small Business Directory</h1>
  <Chatbot />
  <BusinessList />
  <Workshops /> <!-- Add Workshops component -->
  <SuccessStories /> <!-- Add Success Stories component -->
</main>

<script>
  // Mock data for workshops
  let workshops = [
    {
      title: "Digital Marketing Basics",
      date: "2024-08-01",
      description: "Learn the fundamentals of digital marketing to grow your business online.",
      location: "Community Center",
    },
    {
      title: "Customer Service Excellence",
      date: "2024-08-15",
      description: "Enhance your customer service skills to improve client satisfaction.",
      location: "Local Library",
    },
  ];
</script>

<h3 class="text-xl font-bold mb-4">Upcoming Skill Development Workshops</h3>
<div class="grid grid-cols-1 gap-4">
  {#each workshops as workshop}
    <div class="bg-white p-4 rounded shadow">
      <h4 class="font-bold text-lg">{workshop.title}</h4>
      <p><strong>Date:</strong> {workshop.date}</p>
      <p>{workshop.description}</p>
      <p><strong>Location:</strong> {workshop.location}</p>
    </div>
  {/each}
</div>