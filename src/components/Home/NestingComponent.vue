<template>
  <div>
    <HeaderView></HeaderView>
    <BodyView :ninjas="ninjas"></BodyView>
    <FooterView></FooterView>
  </div>
</template>

<script>
import HeaderView from "@/View/NestingComponent/HeaderView.vue";
import BodyView from "@/View/NestingComponent/NestingBodyView.vue";
import FooterView from "@/View/NestingComponent/FooterView.vue";
export default {
  components: {
    HeaderView,
    FooterView,
    BodyView,
  },
  data() {
    return {
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardy", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false },
      ],
    };
  },
};
</script>

<style>
</style>