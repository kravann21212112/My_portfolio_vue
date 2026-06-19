<template>
  <div class="page container">
    <h1>About Me</h1>
    <div class="about-content">
      <p>Hello! My name is Kravann Good boy. I build robust digital architectures using the latest ecosystem tools.</p>
      <h2>Core Skillset</h2>
      <div class="skills-grid">
        <span class="skill-tag">Vue.js 3</span>
        <span class="skill-tag">Vite</span>
        <span class="skill-tag">JavaScript</span>
        <span class="skill-tag">CSS Grid / Flexbox</span>
        <span class="skill-tag">Node.js</span>
        <span class="skill-tag">HTML5</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 4rem auto;
  padding: 0 2rem;
}
h1 { color: #2c3e50; margin-bottom: 1.5rem; }
h2 { color: #35495e; margin-top: 2rem; margin-bottom: 1rem; }
p { font-size: 1.1rem; line-height: 1.8; color: #555; }
.skills-grid { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem; }
.skill-tag { background: #35495e; color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem; }
</style>
