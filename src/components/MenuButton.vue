<template>
  <div class="menu-button">
    <slot name="default">
      <img src="../assets/burger_menu_icon_1.svg" />
    </slot>
  </div>
</template>

<script>
export default {
  name: "MenuButton.vue",
};
</script>

<style scoped lang="scss">
.menu-button {
  width: 35px;
  height: 35px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 1px solid $gray1;
  }
}
</style>
