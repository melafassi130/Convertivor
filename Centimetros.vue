<template>
  <v-container>
    <h1>Convertir Centímetros a Metros</h1>

    <v-text-field
      v-model="centimetros"
      label="Ingrese centímetros"
      type="number"
    ></v-text-field>

    <v-btn @click="convertir">
      Convertir
    </v-btn>

    <h2>{{ resultado }} metros</h2>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      centimetros: 0,
      resultado: 0
    }
  },

  methods: {
    convertir() {
      this.resultado = this.centimetros / 100
    }
  }
}
</script>