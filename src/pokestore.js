import { writable } from "svelte/store";

export const pokemon = writable([]);
export const _species = writable([]);
const pokemonDetails = {};
let loaded = false;

export const fetch_pokemon = async () =>{
	if (loaded) return;
	const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
	const res = await fetch(url);
	const data = await res.json();
	const loadedPokemon = data.results.map((data, index) => ({
		name: data.name,
		id: index + 1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			index + 1
		}.png`
	}));
	pokemon.set(loadedPokemon);
	loaded = true;
};

export const getPokemonById = async (id) => {
	if (pokemonDetails[id]) return pokemonDetails[id];

	try {
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const data = await res.json();
		pokemonDetails[id] = data;
		return data;
	} catch (err) {
		console.error(err);
		return null;
	}
};

export const getPokemonSpeciesById = async (id) =>{

		const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
		const res = await fetch(url);
		const data = await res.json();
		_species.set(data);
};