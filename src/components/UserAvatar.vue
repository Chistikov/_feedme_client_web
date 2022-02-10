<template>
  <div class="user_avatar">
    <div class="user_avatar__gradient_circel"></div>
    <div
      class="user_avatar__avatar"
      :style="{ backgroundImage: getAvatar }"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["userAvatar"],
  computed: {
    getAvatar() {
      if (this.userAvatar) {
        return `url(${this.userAvatar})`;
      } else {
        return `url(${require(`@/assets/smile.svg`)})`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.user_avatar {
  width: 62px;
  height: 62px;
  position: relative;
  overflow: hidden;

  &__gradient_circel {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 62px;
    height: 62px;
    background: conic-gradient(
      from 225deg at 50% 50%,
      $lilac1 0deg,
      $pink1 178.12deg,
      $lilac1 360deg
    );
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  &__avatar {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 3px solid $white1;
    width: 56px;
    height: 56px;
    background: $white1;
    background-size: cover;
    background-image: url("../assets/smile.svg");
  }
}
</style>
