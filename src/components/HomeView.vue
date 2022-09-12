<template>
  <div id="vue__app">
    <h1>{{ greet("night") }}</h1>
    <p>Name: {{ name }}</p>
    <p>Address: {{ address }}</p>
    <a v-bind:href="website">Google</a>
    <input type="text" v-bind:value="address" />
    <p v-html="websiteTag"></p>
    <button @click="$router.push('/event')">Event</button>
    <button @click="$router.push('/key')">KeyBroad</button>
    <button @click="$router.push('/binding')">dataBinding</button>
    <button @click="$router.push('/computed')">Computed Properties</button>
    <button @click="$router.push('/dynamic')">Dynamic CSS Classes</button>
    <button @click="$router.push('/contionals')">Contionals</button>
    <button @click="$router.push('/loop')">Looping with v-for</button>
    <button @click="$router.push('/game')">Simple Punchbag Game</button>
    <button @click="$router.push('/multiple')">Multiple Vue Instances</button>
    <button @click="$router.push('/refs')">Refs</button>
    <button @click="$router.push('/nesting')">
      Nesting Component Examples
    </button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      name: "tuananh",
      address: "Hà Nội",
      website: "https://www.google.com.vn/?hl=vi",
      websiteTag: `<a v-bind:href="https://www.google.com.vn/?hl=vi">Google</a> `,
    };
  },
  methods: {
    greet(time) {
      return "Good" + " " + time + " " + this.name;
    },
  },
};
</script>

<style>
</style>