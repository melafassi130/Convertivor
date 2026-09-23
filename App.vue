<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>Conversor de Unidades</v-toolbar-title>

      

      <v-btn>
        <RouterLink to="/kilometros">Kilómetros</RouterLink>
      </v-btn>

      <v-btn>
        <RouterLink to="/centimetros">centimetros</RouterLink>
      </v-btn>

      <v-btn>
        <RouterLink to="/gramos">Gramos</RouterLink>
      </v-btn>

      <v-btn>
        <RouterLink to="/litros">Litros</RouterLink>
      </v-btn>

      <v-btn>
        <RouterLink to="/milimetros">milimetros</RouterLink>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
