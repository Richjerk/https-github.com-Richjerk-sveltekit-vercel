<script>
  import { Link } from 'svelte-routing';
</script>

<nav class="bg-gray-800 py-4">
  <div class="container mx-auto flex justify-between items-center">
    <Link to="/" class="text-white font-bold text-xl hover:text-gray-400">
      Township Business Directory
    </Link>
    <ul class="flex space-x-4">
      <li><Link to="/businesses" class="text-gray-300 hover:text-white">Businesses</Link></li>
      <li><Link to="/events" class="text-gray-300 hover:text-white">Events</Link></li>
      <li><Link to="/resources" class="text-gray-300 hover:text-white">Resources</Link></li>
    </ul>
  </div>
</nav>

