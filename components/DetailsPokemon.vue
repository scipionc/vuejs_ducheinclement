<template>
  <div class="details-pokemon">
    <h2>{{ pokemon.name }}</h2>
    <img :src="pokemon.image" alt="pokemon" />
    <p>Génération {{ pokemon.apiGeneration }}</p>
    <ul>
      <li v-for="type in pokemon.apiTypes" :key="type.name">
        {{ type.name }}
      </li>
    </ul>
    <p>Statistiques:</p>
    <ul>
      <li>HP: {{ pokemon.stats.HP }}</li>
      <li>Attaque: {{ pokemon.stats.attack }}</li>
      <li>Défense: {{ pokemon.stats.defense }}</li>
      <li>Attaque Spéciale: {{ pokemon.stats.special_attack }}</li>
      <li>Défense Spéciale: {{ pokemon.stats.special_defense }}</li>
      <li>Vitesse: {{ pokemon.stats.speed }}</li>
    </ul>
    <p>Résistances:</p>
    <ul>
      <li v-for="resistance in pokemon.apiResistances" :key="resistance.name">
        {{ resistance.name }} - Multiplier: {{ resistance.damage_multiplier }} - Relation: {{ resistance.damage_relation }}
      </li>
    </ul>
    <router-link to="/" class="redirect-button">Retour à l'accueil</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pokemon: {},
    };
  },
  methods: {
    getDetailsPokemon(id) {
      axios
        .get(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
        .then((response) => {
          this.pokemon = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    const pokemonId = this.$route.params.id;
    this.getDetailsPokemon(pokemonId);
  },
};
</script>

<style scoped>
.redirect-button {
  display: block;
  margin-top: 10px;
  text-decoration: none;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
</style>
