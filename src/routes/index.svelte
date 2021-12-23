<script>
	import { pokemon, fetch_pokemon } from '../pokestore';
	import PokemonCard from '../component/pokemon-card.svelte';

	let search_pokemon = '';
	let filtered_pokemon = [];

    $: {
        if(search_pokemon){
            filtered_pokemon = $pokemon.filter(p => p.name.toLowerCase().includes(search_pokemon.toLocaleLowerCase()));
        }else{
            filtered_pokemon = [ ... $pokemon]
        }
    }

    fetch_pokemon();
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<img class="m-auto w-80"src="poke-logo.png"  alt="Pokemon">

<input class="mt-10 w-full rounded-md text-lg p-4 border-2 border-gray-200" type="text" placeholder="Search Pokemon" bind:value={search_pokemon}/>

<div class="py-4 grid gap-4 md:grid-cols-4 grid-cols-1">
	{#each filtered_pokemon as p}
		<PokemonCard pokemon={p} />
	{/each}
</div>

