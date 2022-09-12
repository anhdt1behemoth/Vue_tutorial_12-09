<template>
  <div>
    <ul>
      <li v-for="(character, index) in characters" :key="character.id">
        <span>{{ index }}. {{ character }}</span>
      </li>
    </ul>

    <ul>
      <li v-for="(ninja, index) in ninjas" :key="ninja.id">
        {{ index }}. <span>{{ ninja.name }}</span> :<span>
          {{ ninja.age }}</span
        >
        <span>{{ ninja.address }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: ["Mario", "Luigi", "Yoshi", "Bowser"],
      ninjas: [
        { name: "Ryu", age: 25 },
        { name: "yoshi", age: 35 },
        { name: "Ken", age: 55 },
      ],
    };
  },
};
</script>

<style>
</style>