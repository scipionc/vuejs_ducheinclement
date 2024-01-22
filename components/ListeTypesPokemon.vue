<template>
    <div class="liste-types-pokemon">
      <h2>Liste des Types de Pokémon</h2>
      <ul>
        <li v-for="(count, type) in typesCount" :key="type">
          {{ type }} : {{ count }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      pokemons: {
        type: Array,
        required: true,
      },
    },
    computed: {
      typesCount() {
        const countMap = {};
        for (const pokemon of this.pokemons) {
          const type = pokemon.apiTypes[0].name;
          countMap[type] = (countMap[type] || 0) + 1;
        }
        return countMap;
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  