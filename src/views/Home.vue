<template>
  <a-layout class="home">
    <div class="home__sidebar">
      <div class="home__logo_conainer">
        <div class="home__logo">FEED<span>.ME</span></div>
      </div>
      <div class="home__user_block">
        <UserAvatar class="home__avatar"></UserAvatar>
        <div class="home__user_name">Rono<br />Donosolono</div>
        <div class="home__menu-container">
          <MenuButton></MenuButton>
        </div>
      </div>
      <div class="home__menu">
        <router-link to="/">Home</router-link>
        <br />
        <router-link to="/register">Register</router-link>
        <br />
        <router-link to="/login">Login</router-link>
        <br />
      </div>
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
import UserAvatar from "@/components/UserAvatar";
import MenuButton from "@/components/MenuButton";

export default {
  name: "Home",
  components: { UserAvatar, MenuButton },
};
</script>

<style lang="scss" scoped>
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
    padding: 30px;
    justify-content: space-between;
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
    color: $black1;

    > span {
      color: $lilac1;
    }
  }

  &__user_block {
    background: $white1;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 22px;
  }

  &__avatar {
    margin-right: 24px;
    flex-shrink: 0;
  }

  &__user_name {
    flex-grow: 1;
    font-size: 18px;
    line-height: 21px;
  }

  &__menu-container {
    flex-shrink: 0;
  }

  &__menu {
    flex-grow: 1;
  }
}
</style>
