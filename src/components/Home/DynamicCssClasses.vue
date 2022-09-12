<template>
  <div>
    <h1>Dynamic CSS</h1>
    <h2>Example 1</h2>
    <div
      v-on:click="available = !available"
      v-bind:class="{ available: available }"
    >
      <span>Hiển thị</span>
    </div>

    <h2>Example 2</h2>
    <button v-on:click="nearby = !nearby">Togge nearby</button>
    <button v-on:click="available = !available">Togge available</button>
    <div v-bind:class="compClasses">
      <span>Hiển thị</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      available: false,
      nearby: false,
    };
  },

  computed: {
    compClasses() {
      return {
        available: this.available,
        nearby: this.nearby,
      };
    },
  },
};
</script>

<style>
span {
  background: red;
  display: inline-block;
  padding: 10px;
  color: #fff;
  margin: 10px 0;
}

.available span {
  background: green;
}

.nearby span::after {
  content: "nearby";
  margin-left: 10px;
}
</style>