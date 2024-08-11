<template>
    <footer class="footer" >
    <div class="container">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
      <nav class="footer-nav">
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>


<style>
/* Scope style wont work add some config to vite.config.js */
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #2c3e50;
    color: white;
    padding: 20px 0;
    text-align: center;
}

.footer .container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-nav {
  margin-top: 10px;
}

.footer-nav a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
}

.footer-nav a:hover {
  text-decoration: underline;
}
</style>