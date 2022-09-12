<template>
  <div>
    <h1>Refs</h1>
    <input type="text" ref="input" />
    <button v-on:click="readRefs">Submit</button>
    <p>Your fav food: {{ output }}</p>
    <div ref="test">Hello</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      output: "Your fav food",
    };
  },

  methods: {
    readRefs() {
      console.log(this.$refs.test.innerText);
      this.output = this.$refs.input.value;
    },
  },
};
</script>

<style>
</style>