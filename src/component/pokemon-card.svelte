<script>
	import { fade } from 'svelte/transition';
	export let pokemon;
</script>

<a
	class="p-4 bg-gray-100 text-gray-400 text-center rounded-md shadow-sm hoder:shadow-md flex flex-col items-center"
     
	href={`/pokemon/${pokemon.id}`}
	transition:fade
>    <span class="pt-1 h-10 w-10 rounded-full bg-white-800 border-4 border-gray-500 text-center text-lg ">
    {pokemon.id}
</span>

	<img class="h-40 w-40" src={pokemon.image} alt={pokemon.name} />
	<div class="p-2 border-2 border-gray-400 rounded-r-lg rounded-b-lg">
		<h2 class="uppercase">{pokemon.name}</h2>
	</div>
</a>
