<template>
    <footer class="footer">
      <p>{{ Name }} {{ LastName }} - TP{{ TPNumber }}</p>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        Name: "Duchemin",
        LastName: "Clément",
        TPNumber: "A",
      };
    },
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #f0f0f0;
    padding: 10px;
    text-align: center;
  }
  </style>

