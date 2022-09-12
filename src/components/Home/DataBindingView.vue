<template>
  <div>
    <div>
      <label>Name :</label>
      <input type="text" v-model="name" />
      <h1>{{ name }}</h1>
      <label>Age :</label>
      <input type="text" v-model="age" />
      <h1>{{ age }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
    };
  },

  getName() {
    this.name;
  },

  getAge() {
    this.age;
  },
};
</script>

<style>
</style>