<template>
  <div class="data-card">
    <slot name="default"> no data </slot>
  </div>
</template>

<style scoped lang="scss">
.data-card {
  padding: 30px 25px;
  background-color: $white1;
  color: $black1;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  @include text-primary
}
</style>
