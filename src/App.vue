<template>
  <h1>My Top Five</h1>
  <nav>
    <ul>
      <li>Home</li>
      <li>Contact</li>
      <li>About Me</li>
    </ul>
  </nav>
  <main>
    <p>The Beatles</p>
    <div class="container">
      <img src="@/assets/images/Beatles.png" />
    </div>
    <p>Pink Floyd</p>
    <div class="container">
      <img src="@/assets/images/pink-floyd-seeklogo.png" />
    </div>
    <p>The Prince</p>
    <div class="container">
      <img src="@/assets/images/Prince.png" />
    </div>
    <p>Radiohead</p>
    <div class="container">
      <img src="@/assets/images/Radiohead.png" />
    </div>
    <p>Sting</p>
    <div class="container">
      <img src="@/assets/images/Sting.jpg" />
    </div>
  </main>
</template>
<style>
.container {
  width: 1000px;
  height: auto;
}

.container img {
  max-width: 100%;
  max-height: 100%;
  display: blockS;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: inline;
  margin-right: 10px;
}
h1 {
  color: blanchedalmond;
  background-color: blue;
  text-align: center;
  font-family: verdana;
  font-size: 300%;
}
p {
  color: blanchedalmond;
  background-color: blue;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 160%;
}
</style>
