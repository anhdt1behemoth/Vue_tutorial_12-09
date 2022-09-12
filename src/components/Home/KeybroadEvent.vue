<template>
  <div>
    <h1>Keybroad Event</h1>
    <label>Name: </label>
    <input type="text" v-on:keyup.enter="logName" />
    <label>Age: </label>
    <input type="text" v-on:keyup.alt.enter="logAge" />
  </div>
</template>

<script>
export default {
  methods: {
    logName() {
      console.log("you entered your name");
    },
    logAge() {
      console.log("you entered your age");
    },
  },
};
</script>

<style>
</style>