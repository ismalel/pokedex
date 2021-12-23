<script context="module">
	import { getPokemonById } from '../../pokestore';

	export async function load({ page }) {
		const id = page.params.id;
		console.log(id);
		const pokemon = await getPokemonById(id);
		return { props: { pokemon } };
	}
</script>

<script>
	export let pokemon;

	const type = pokemon.types[0].type.name;
	const img = pokemon.sprites.other['official-artwork'].front_default;
</script>

<svelte:head>
	<title>Pokedex - {pokemon.name}</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">
	{pokemon.name}<span class="ml-2 text-4xl text-center my-8 uppercase text-gray-500"
		>N.º{pokemon.id}</span
	>
</h1>

<div class="grid grid-rows-3 grid-flow-col gap-4">
	<div class="row-span-3">
		<img class="card-image bg-gray-100 rounded-md" src={img} alt={pokemon.name} />
	</div>
	<div class="col-span-2 rounded-md p-10" style="background-color: #30a7d7;">
        <p class="text-white">Type: <span class="text-gray-700"><strong>{type}</strong></span></p> 
        <br>
        <p class="text-white">Height: <span class="text-gray-700"><strong>{pokemon.height}m</strong></span></p> 
        <br>
        <p class="text-white">Weight: <span class="text-gray-700"><strong>{pokemon.weight}kg</strong></span></p> 
    </div>
	
</div>
