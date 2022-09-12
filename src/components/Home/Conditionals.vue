<template>
  <div>
    <h1>Conditionals</h1>
    <button v-on:click="error = !error">Toggle Error</button>
    <button v-on:click="success = !success">Toggle Error</button>
    <!-- <p v-if="error">There has been an error</p>
    <p v-else-if="success">Whooo.success :)</p> -->
    <p v-show="error">There has been an error</p>
    <p v-show="success">Whoo,success :)</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      success: false,
    };
  },
};
</script>

<style>
</style>