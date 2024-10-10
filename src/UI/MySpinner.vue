<script setup lang="ts">

</script>

<template>
  <div class="spinner">
    <span class="spinner__loader"></span>
  </div>
</template>

<style scoped lang="scss">
.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  width: 100%;

  &__loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
