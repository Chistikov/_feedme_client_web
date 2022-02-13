<template>
  <a-layout class="home">
    <div class="home__sidebar">
      <div class="home__logo-conainer">
        <div class="home__logo">FEED<span>.ME</span></div>
      </div>
      <div class="home__user-block user-block">
        <UserAvatar class="home__avatar"></UserAvatar>
        <div class="home__user-name">Rono<br />Donosolono</div>
        <div class="home__menu-container">
          <MenuButton></MenuButton>
        </div>
      </div>
      <div class="home__menu">
        <div class="home__delimiter"></div>
        <router-link to="/" class="home__menu-item">
          <MapIcon class="home__icon"></MapIcon>
          Map
        </router-link>
        <router-link to="/register" class="home__menu-item">
          <MapIcon class="home__icon"></MapIcon>
          Register
        </router-link>
        <router-link to="/login" class="home__menu-item">
          <MapIcon class="home__icon"></MapIcon>
          Login
        </router-link>
        <div class="home__delimiter"></div>
      </div>
      <a-button>logout</a-button>
    </div>
    <a-layout>
      <a-layout-content class="home__content">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
// import { Button } from "ant-design-vue";
import UserAvatar from "@/components/UserAvatar";
import MenuButton from "@/components/MenuButton";
import MapIcon from "@/icon_components/MapIcon";

export default {
  name: "Home",
  components: { UserAvatar, MenuButton, MapIcon },
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

  &__logo-conainer {
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

  &__user-block {
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

  &__user-name {
    flex-grow: 1;
    font-size: 18px;
    line-height: 21px;
  }

  &__delimiter {
    height: 1px;
    width: 100%;
    background: $gray2;
    margin: 30px 0;
  }

  &__menu-container {
    flex-shrink: 0;
  }

  &__menu {
    flex-grow: 1;
  }

  &__menu-item {
    display: flex;
    align-items: center;
    color: $black1;
    width: 100%;
    padding: 13px 21px;
    background: $white1;
    margin-bottom: 30px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }

  &__icon {
    margin-right: 20px;
    stroke: $gray2;
  }

  &__content {
    height: inherit;
  }

  .router-link-active {
    //color: $lilac1;
    background-color: $lilac1;
    color: $white1;
    //border: 1px solid $lilac1;
  }

  .router-link-active &__icon {
    margin-right: 20px;
    stroke: rgba(255, 255, 255, 0.6);
  }
}
</style>
