<script>
  // Fetch data for funding opportunities and financial literacy resources
  let fundingOpportunities = [
    {
      name: 'Township and Rural Empowerment Program (TREP)',
      description: 'Financial assistance for township businesses',
      link: 'https://sefa.org.za'
    },
    {
      name: 'NYDA Grant Programme',
      description: 'Grants for youth-owned businesses',
      link: 'https://www.nyda.gov.za/Products-Services/NYDA-Grant-Programme.html'
    }
  ];

  let financialLiteracyResources = [
    {
      title: 'Financial Management Basics',
      type: 'Article',
      link: 'https://alison.com/course/advanced-diploma-in-financial-management-for-managers?utm_source=bing&utm_medium=cpc&utm_campaign=436347241&utm_content=1356799855383592&utm_term=kwd-84801126054500:loc-168&msclkid=ef371de09f4e15ca57ce7b7ee9b1d92f'
    },
    {
      title: 'Budgeting for Small Businesses',
      type: 'Video',
      link: 'https://www.bing.com/search?q=Budgeting+for+Small+Businesses+video&cvid=51ed491d37a14e0f91b4c59c38d8552d&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDUyNzJqMGo5qAIIsAIB&FORM=ANAB01&adppc=EDGEESS&PC=U531'
    },
    {
      title: 'Financial Literacy Workshop',
      type: 'Workshop',
      link: 'https://www.momentummetropolitan.co.za/social-investment/financial-literacy'
    }
  ];
</script>

<h2 class="text-2xl font-bold mb-4">Financial Support Resources</h2>

<div class="mb-8">
  <h3 class="text-xl font-bold mb-2">Funding Opportunities</h3>
  <ul class="list-disc pl-6">
    {#each fundingOpportunities as opportunity}
      <li><a href={opportunity.link} class="text-blue-500 hover:underline">{opportunity.name}</a> - {opportunity.description}</li>
    {/each}
  </ul>
</div>

<div>
  <h3 class="text-xl font-bold mb-2">Financial Literacy Resources</h3>
  <ul class="list-disc pl-6">
    {#each financialLiteracyResources as resource}
      <li><a href={resource.link} class="text-blue-500 hover:underline">{resource.title}</a> ({resource.type})</li>
    {/each}
  </ul>
</div>