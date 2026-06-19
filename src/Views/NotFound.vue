<template>
  <div class="page not-found">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>Oops! The destination URL you are seeking does not exist or has been shifted permanently.</p>
    <router-link to="/" class="home-link">Return to Home Dashboard</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 5rem 2rem;
}
h1 {
    font-size: 6rem;
    color: #e74c3c;
    margin: 0;
}

h2 {
    font-size: 2rem;
    color: #35495e;
    margin-bottom: 1rem;
}

p {
    color: #7f8c8d;
    margin-bottom: 2rem;
}

.home-link {
    color: #42b883;
    font-weight: bold;
    text-decoration: none;
    border-bottom: 2px solid #42b883;
    padding-bottom: 4px;
}
</style>
