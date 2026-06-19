

<template>
  <div>
    <h1>Project Detail</h1>

    <div v-if="project">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <p>ID: {{ project.id }}</p>
    </div>

    <div v-else>
      <h2>Project Not Found</h2>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects'

const route = useRoute()

const projectId = Number(route.params.id)

const project = projects.find(
  p => p.id === projectId
)
</script>

<style scoped></style>
