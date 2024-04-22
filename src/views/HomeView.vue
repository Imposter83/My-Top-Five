<script setup>
  /* import TheWelcome from '../components/TheWelcome.vue' */
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <h1>MyTopFive</h1>
    <h2 @click="$router.push('/beatles')">The Beatles</h2>
    <div class="container"></div>
    <img src="@/assets/images/Beatles.png" />
    <h2 @click="$router.push('/pink-floyd')">Pink Floyd</h2>
    <div class="container">
      <img src="@/assets/images/Pink Floyd.jpg" />
    </div>
    <h2 @click="$router.push('/prince')">The Prince</h2>
    <div class="container">
      <img src="@/assets/images/Prince.png" />
    </div>
    <h2 @click="$router.push('/radiohead')">Radiohead</h2>
    <div class="container">
      <img src="@/assets/images/Radiohead.jpg" />
    </div>
    <h2 @click="$router.push('/sting')">Sting</h2>
    <div class="container">
      <img src="@/assets/images/Sting.jpg" />
    </div>
  </main>
</template>
<style scoped>
  h2:hover {
    background-color: lightgray;
  }
</style>
