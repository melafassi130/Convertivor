<template>
  <v-container>
    <h1>Convertir Kilómetros a Metros</h1>

    <v-text-field
      v-model="kilometros"
      label="Ingrese kilómetros"
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
      kilometros: 0,
      resultado: 0
    }
  },

  methods: {
    convertir() {
      this.resultado = this.kilometros * 1000
    }
  }
}
</script>
