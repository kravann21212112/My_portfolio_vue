<template>
  <div id="app-layout">
    <!-- Shared Global Layout Navigation Structure -->
    <nav class="global-navbar">
      <div class="nav-brand">Yorm Kravann</div>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/project">Projects</router-link>
      </div>
    </nav>

    <!-- Component Render Mounting Sandbox Zone Injection Window Viewport Link -->
    <main class="main-viewport">
      <router-view />
    </main>

    
  </div>
</template>

<style>
/* Global Reset Overrides */
html, body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* Prevents double scrolling bars */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

/* Flexbox Full-Screen Layout Wrapper Container */
#app-layout {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}

/* Global Navbar Styling */
.global-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  height: 70px; /* Fixed height metric boundary */
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  flex-shrink: 0; /* Prevents collapsing */
  box-sizing: border-box;
}

.nav-brand { font-size: 1.3rem; font-weight: bold; color: #42b883; }
.nav-links a {
  margin-left: 1.5rem;
  text-decoration: none;
  color: #555;
  font-weight: 500;
}
.nav-links .router-link-active {
  color: #42b883;
  font-weight: bold;
}

/* Scrollable Viewport Frame Core Engine */
.main-viewport {
  flex-grow: 1; /* Automatically consumes remaining screen gap layout */
  overflow-y: auto; /* Contains scroll tracking bounds within the section frame */
  width: 100%;
  box-sizing: border-box;
}

/* Global Footer Bottom Bar Layout */
.global-footer {
  text-align: center;
  height: 50px; /* Fixed footer boundaries */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #35495e;
  color: white;
  font-size: 0.9rem;
  flex-shrink: 0; /* Keeps bar structural integrity fixed */
}

</style>
