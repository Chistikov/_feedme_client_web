<template>
  <a-layout class="home">
    <div class="home__sidebar" width="400">
      <div class="home__logo_conainer">
        <div class="home__logo">FEED<span>.ME</span></div>
      </div>
      <router-link to="/">Home</router-link>
      <br />
      <router-link to="/register">Register</router-link>
      <br />
      <router-link to="/login">Login</router-link>
      <br />
      <a-button>logout</a-button>
    </div>
    <a-layout>
      <a-layout-content class="home__content">
        Content
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
// import { Button } from "ant-design-vue";

export default {
  name: "Home"
  // components: { Button },
};
</script>

<style lang="scss">
.home {
  width: 100vw;
  height: 100vh;
  background: $gray1;
  position: relative;

  &__sidebar {
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 100vh;
    background: $gray1;
    display: flex;
    flex-direction: column;
  }

  &__content {
    padding-left: 400px;
  }

  &__logo_conainer {
    height: 216px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__logo {
    font-size: 39px;
    font-weight: 700;

    > span {
      color: $lilac1
    }
  }
}
</style>
