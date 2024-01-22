<template>
  <div class="pokedex">
    <label for="numberOfPokemons">Nombre de Pokémons:</label>
    <input id="numberOfPokemons" v-model="numberOfPokemons" type="number" min="1" @input="getPokemon" />

    <label for="selectedGeneration">Génération:</label>
    <select id="selectedGeneration" v-model="selectedGeneration" @change="getPokemon">
      <option value="All">Toutes les générations</option>
      <option v-for="generation in generations" :key="generation" :value="generation">{{ generation }}</option>
    </select>

    <ListeTypesPokemon :pokemons="pokemons" />

    <div class="pokemon-container">
      <router-link v-for="pokemon in pokemons" :key="pokemon.id" :to="{ name: 'details-pokemon', params: { id: pokemon.id } }">
        <Pokemon :key="pokemon.name" :pokemon="pokemon" style="color: white;" />
        
      </router-link>
    </div>
  </div>
</template>


<script>
import Pokemon from './Pokemon.vue';
import axios from 'axios';
import ListeTypesPokemon from './ListeTypesPokemon.vue';

export default {
  components: {
    Pokemon,
    ListeTypesPokemon,
  },
  data() {
    return {
      pokemons: [],
      numberOfPokemons: 20,
      selectedGeneration: 'All',
      generations: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
  methods: {
    getPokemon() {
      const url =
        this.selectedGeneration === 'All'
          ? `https://pokebuildapi.fr/api/v1/pokemon/limit/${this.numberOfPokemons}`
          : `https://pokebuildapi.fr/api/v1/pokemon/generation/${this.selectedGeneration}`;

      axios
        .get(url)
        .then((response) => {
          this.pokemons = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getPokemon();
  },
};
</script>


<style scoped>
.pokemon-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(33.33% - 20px), 1fr));
  gap: 20px;
  padding: 0 20px;
  padding-left: 0;
  padding-right: 0;
}
</style>