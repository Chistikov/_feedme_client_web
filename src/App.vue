<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap");
@import "./styles/custom_ant_styles.scss";

.app {
  background: $gray1;
  min-width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
}
</style>
