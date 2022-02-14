<template>
  <div class="map-view">
    <div class="map-view__map-container">1</div>
    <div class="map-view__right-bar">
      <DataCard
        class="map-view__data-card map-view__data-card-rating"
      ></DataCard>
      <!--      <div class="map-view__delimiter"></div>-->
      <div class="map-view__establishments-card-wrapper">
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
        <DataCard class="map-view__data-card"></DataCard>
      </div>
    </div>
  </div>
</template>

<script>
import DataCard from "@/components/DataCard";

export default {
  components: {
    DataCard,
  },
};
</script>

<style scoped lang="scss">
.map-view {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 100vh;

  &__map-container {
    flex-grow: 1;
    background: $white1;
  }

  &__right-bar {
    width: 400px;
    background: $gray1;
    padding: 30px;
    display: flex;
    flex-direction: column;
  }

  &__delimiter {
    width: 100%;
    height: 1px;
    background: $gray2;
    margin: 30px 0;
  }

  &__establishments-card-wrapper {
    overflow-y: scroll;

    &:hover {
      width: calc(100% + 20px);
      padding-right: 14px;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    &:hover {
      &::-webkit-scrollbar {
        display: block;
        width: 6px;
      }
      &::-webkit-scrollbar-track {
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
      }
      &::-webkit-scrollbar-thumb {
        background: $gray2;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: $lilac2;
      }
    }
  }

  &__data-card {
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  div &__data-card-rating {
    background: linear-gradient(180deg, $lilac2 0%, $lilac1 100%);
    border-radius: 10px;
    margin-bottom: 40px;
  }
}
</style>
