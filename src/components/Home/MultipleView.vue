<template>
  <div>
    <div id="vue-one" v-for="(task, index) in task1" :key="index">
      <h1>{{ task.title }}</h1>
      <h1>{{ greet1 }}</h1>
    </div>
    <div id="vue-two" v-for="(tasks, index) in task2" :key="index">
      <h1>{{ tasks.title }}</h1>
      <h1>{{ greet2 }}</h1>
      <button v-on:click="changeTitle()">Change App One Title</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task1: [
        {
          title: "vue app one",
        },
      ],
      task2: [
        {
          title: "vue app two",
        },
      ],
    };
  },
  methods: {
    changeTitle(index) {
      console.log(this.task1.splice(index, 1, { title: "title change" }));
      console.log(this.task2.splice(index, 1, { title: "two" }));
    },
  },

  computed: {
    greet1() {
      return "Hello from app one :)";
    },
    greet2() {
      return "yo dudes, this is app 2 speeking to ya :)";
    },
  },
};
</script>

<style>
</style>