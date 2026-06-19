<script setup lang="ts">
import { RouterView } from 'vue-router';


</script>

<template>
  <h1>welcome to my app</h1>
  <nav class="pd-4">
  <RouterLink to="/">HOME</RouterLink>
  <RouterLink to="/about">ABOUT</RouterLink>
  </nav>

  <main>
<RouterView></RouterView>
  </main>
</template>

<style scoped></style>
