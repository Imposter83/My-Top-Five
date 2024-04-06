<template>
  <div id="app">
    <nav>

<router-link to="/">Contact</router-link>
</nav>

<router-view />

</div>

</template>

<script>
import Contact from './views/Contact.vue';


export default{

ContactPage}
  <h1>
    'MyTopFive'
    <h1>
  <><nav>
      <ul>
        <li>Home</li>
        <li>Contact</li>
      </ul> 
    </nav><main>
        <p>The Beatles</p>
        <div class="container">
          <img src="@/assets/images/Beatles.png" />
        </div>
        <p>Pink Floyd</p>
        <div class="container">
          <img src="@/assets/images/Pink Floyd.jpg" />
        </div>
        <p>The Prince</p>
        <div class="container">
          <img src="@/assets/images/Prince.png" />
        </div>
        <p>Radiohead</p>
        <div class="container">
          <img src="@/assets/images/Radiohead.jpg" />
        </div>
        <p>Sting</p>
        <div class="container">
          <img src="@/assets/images/Sting.jpg" />
        </div>
      </main></>
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
  color: yellow;
  background-color: green;
  text-align: center;
  font-family: verdana;
  font-size: 300%;
}
p {
  color: yellow;
  background-color: green;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 150%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  color: yellow;
  line-height: 100px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

ul {
  color: yellow;
  font-size: larger;
}
body {
  background-image: url("~/src/assets/images/background.jpg");
}
</style>
