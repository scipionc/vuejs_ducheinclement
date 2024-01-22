<template>
    <div :style="{ backgroundColor: getBackgroundColor() }" class="card">
      <h2>{{ pokemon.name }}</h2>
      <img :src="pokemon.image" alt="pokemon" loading="lazy" />
      <p>Génération {{ this.pokemon.apiGeneration }}</p>
      <span v-for="type in pokemon.apiTypes">
        <img :src="type.image" alt="type" loading="lazy">
        <span>{{ type.name }}</span>
      </span>
    </div>
  </template>
  
  <style>
    .card {
      margin : 10px;
    }
  </style>
  
  <script>
  export default {
    props: {
      pokemon: {
        type: Object,
        required: true,
      },
    },
  methods: {
  getBackgroundColor() {
    if (this.pokemon.apiTypes[0].name == "Plante") {
                    return "green"
                } else if (this.pokemon.apiTypes[0].name == "Feu") {
                    return "red"
                } else if (this.pokemon.apiTypes[0].name == "Eau") {
                    return "blue"
                } else if (this.pokemon.apiTypes[0].name == "Insecte") {
                    return "brown"
                } else if (this.pokemon.apiTypes[0].name == "Normal") {
                    return "grey"
                } else if (this.pokemon.apiTypes[0].name == "Vol") {
                    return "lightblue"
                } else if (this.pokemon.apiTypes[0].name == "Poison") {
                    return "purple"
                } else if (this.pokemon.apiTypes[0].name == "Électrik") {
                    return "yellow"
                } else if (this.pokemon.apiTypes[0].name == "Fée") {
                    return "pink"
                } else if (this.pokemon.apiTypes[0].name == "Combat") {
                    return "orange"
                } else if (this.pokemon.apiTypes[0].name == "Sol") {
                    return "brown"
                } else if (this.pokemon.apiTypes[0].name == "Roche") {
                    return "brown"
                } else if (this.pokemon.apiTypes[0].name == "Spectre") {
                    return "purple"
                } else if (this.pokemon.apiTypes[0].name == "Dragon") {
                    return "purple"
                } else if (this.pokemon.apiTypes[0].name == "Acier") {
                    return "grey"
                } else if (this.pokemon.apiTypes[0].name == "Glace") {
                    return "lightblue"
                } else if (this.pokemon.apiTypes[0].name == "Psy") {
                    return "pink"
                } else if (this.pokemon.apiTypes[0].name == "Ténèbres") {
                    return "black"
                } else if (this.pokemon.apiTypes[0].name == "Fée") {
                    return "pink"
                } else {
                    return "white"
                }
  }
}

};
</script>