<template>
  <div class="page home-page">
    <div class="hero-card">
      <h1>Welcome to My Portfolio</h1>
      <p>My name is Kravann, I am a creative full-stack developer dedicated to building fast, modular, and beautiful web applications.</p>
      <router-link to="/projects" class="cta-btn">Explore My Work</router-link>
    </div>
  </div>
</template>

<style scoped>

.home-page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%; /* Spans exactly 100% of main viewport frame height */
  min-height: calc(100vh - 120px); /* Fallback safety subtraction calculation */
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  text-align: center;
  box-sizing: border-box;
}
.hero-card h1 {
  font-size: 3.5rem;
  color: #2c3e50;
  margin: 0 0 1rem 0;
}
.hero-card p {
  font-size: 1.3rem;
  max-width: 600px;
  margin: 0 auto 2.5rem;
  color: #555;
}
.cta-btn {
  background: #42b883;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: background 0.2s;
}
.cta-btn:hover {
  background: #33a06f;
}
</style>


