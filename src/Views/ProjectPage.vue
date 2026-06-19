<template>
  <div class="page container">
    <h1>Featured Projects</h1>
    <div class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <span class="tech-badge">{{ project.tech }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const projects = ref([
  { id: 1, title: 'Cleaning App', description: 'A simple cleaning application for managing tasks.', tech: 'Node.js HTML CSS' },
  { id: 2, title: 'Weather App', description: 'Real-time weather information application.', tech: 'JavaScript HTML CSS' }
])
</script>

<style scoped>
.container { max-width: 1000px; margin: 4rem auto; padding: 0 2rem; }
h1 { color: #2c3e50; margin-bottom: 2rem; text-align: center; }
.projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.project-card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.project-card h3 { margin-top: 0; color: #42b883; }
.project-card p { color: #666; margin: 1rem 0; }
.tech-badge { background: #e8f5e9; color: #2e7d32; font-size: 0.8rem; padding: 0.3rem 0.6rem; border-radius: 4px; font-weight: bold; }
</style>
