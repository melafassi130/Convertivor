<template>
  <v-container>
    <h1>Convertir Mililitros a Litros</h1>

    <v-text-field
      v-model="mililitros"
      label="Ingrese mililitros"
      type="number"
    ></v-text-field>

    <v-btn @click="convertir">
      Convertir
    </v-btn>

    <h2>{{ resultado }} litros</h2>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      mililitros: 0,
      resultado: 0
    }
  },

  methods: {
    convertir() {
      this.resultado = this.mililitros / 1000
    }
  }
}
</script>