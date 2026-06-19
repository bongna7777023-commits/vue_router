<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <h1>welcome to my app</h1>
  <nav class="pd-4">
    <RouterLink to="/">HOME</RouterLink>
    <RouterLink to="/about">ABOUT</RouterLink>
    <RouterLink to="/projects/1">Project 1</RouterLink> |
    <RouterLink to="/projects/2">Project 2</RouterLink> |
    <RouterLink to="/projects/3">Project 3</RouterLink>
  </nav>

  <main>
    <RouterView></RouterView>
  </main>
</template>

<style scoped></style>
