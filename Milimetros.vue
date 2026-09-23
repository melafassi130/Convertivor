<template>
  <v-container>
    <h1>Convertir Milímetros a Centímetros</h1>

    <v-text-field
      v-model="milimetros"
      label="Ingrese milímetros"
      type="number"
    ></v-text-field>

    <v-btn @click="convertir">
      Convertir
    </v-btn>

    <h2>{{ resultado }} centímetros</h2>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      milimetros: 0,
      resultado: 0
    }
  },

  methods: {
    convertir() {
      this.resultado = this.milimetros / 10
    }
  }
}
</script>