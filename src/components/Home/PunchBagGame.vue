<template>
  <div id="vue__app">
    <div id="bag">
      <img
        src="@/assets/pngtree-boxing-bag-3d-modelling-png-image_4741851.jpeg"
        alt=""
      />
    </div>
    <div id="bag__health"></div>
    <div id="bag__control">
      <button>Punch</button>
      <button>Restart</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#bag {
  width: 200px;
  height: 500px;
  margin: 0 auto;
  background: url(/assets/logo.png);
}

#bag__control {
  margin: 0 auto;
}
</style>