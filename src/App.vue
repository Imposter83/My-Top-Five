<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  /* import HelloWorld from './components/HelloWorld.vue' */
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <span>&nbsp;|&nbsp;</span>
      <RouterLink to="/about">About</RouterLink>
      <span>&nbsp;|&nbsp;</span>
      <RouterLink to="/contact">Contact</RouterLink>
      <span>&nbsp;|&nbsp;</span>
      <RouterLink to="/beatles">The Beatles</RouterLink>
      <span>&nbsp;|&nbsp;</span>
      <RouterLink to="/pink-floyd">Pink Floyd</RouterLink>
      <span>&nbsp;|&nbsp;</span>
      <RouterLink to="/prince">Prince</RouterLink>
      <span>&nbsp;|&nbsp;</span>
      <RouterLink to="/radiohead">Radiohead</RouterLink>
      <span>&nbsp;|&nbsp;</span>
      <RouterLink to="/sting">Sting</RouterLink>
    </nav>
  </header>
  <br />
  <!-- <HelloWorld msg="You did it!" /> -->
  <RouterView />
</template>

<style scoped></style>
