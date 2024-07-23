<script>
  // You can fetch this data from an API or define it statically
  const guidanceItems = [
    {
      title: "Business Licensing",
      description: "Learn about the necessary licenses required to operate your business legally.",
      link: "https://example.com/business-licensing",
    },
    {
      title: "Tax Registration",
      description: "Understand how to register for taxes and comply with local regulations.",
      link: "https://example.com/tax-registration",
    },
    {
      title: "Health and Safety Regulations",
      description: "Get information on health and safety standards applicable to your business.",
      link: "https://example.com/health-safety",
    },
  ];
</script>

<h2 class="text-2xl font-bold mb-4">Regulatory Guidance for Informal Businesses</h2>

<ul class="list-disc pl-5">
  {#each guidanceItems as item}
    <li class="mb-2">
      <strong>{item.title}</strong>: {item.description}
      <br />
      <a href={item.link} class="text-blue-500 underline" target="_blank">Learn more</a>
    </li>
  {/each}
</ul>