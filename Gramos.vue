<template>
  <v-container>
    <h1>Convertir Gramos a Kilos</h1>

    <v-text-field
      v-model="gramos"
      label="Ingrese gramos"
      type="number"
    ></v-text-field>

    <v-btn @click="convertir">
      Convertir
    </v-btn>

    <h2>{{ resultado }} kilos</h2>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      gramos: 0,
      resultado: 0
    }
  },

  methods: {
    convertir() {
      this.resultado = this.gramos / 1000
    }
  }
}
</script>