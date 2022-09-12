<template>
  <div>
    <h1>My age is: {{ age }}</h1>
    <button @click="add(1)">Add a Year</button>
    <button @click="subtract(1)">Subtract a Year</button>
    <button @dblclick="add(10)">Add 10 Years</button>
    <button @dblclick="subtract(10)">Subtract 10 Years</button>
    <div id="canvas" v-on:mousemove="updateXY">{{ x }}, {{ y }}</div>
    <a v-on:click="click" href="https://www.google.com.vn/?hl=vi"> click </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 24,
      x: 0,
      y: 0,
    };
  },
  methods: {
    add(inc) {
      this.age += inc;
    },
    subtract(del) {
      this.age -= del;
    },
    updateXY(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click() {
      alert("You clicked me");
    },
  },
};
</script>

<style scoped>
#canvas {
  width: 600px;
  padding: 200px 20px;
  text-align: center;
  border: 1px solid black;
}
</style>