<template>
  <h1>Contact</h1>

  <div class="container">
    <form action="action_page.php">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your name.." />

      <label for="country">Country</label>
      <select id="country" name="country"></select>

      <label for="subject">Subject</label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Write something.."
        style="height: 200px"
      ></textarea>

      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
<script>
export default {
  name: "Contact-Page",
};
</script>
<style>
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
}

input[type="submit"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
