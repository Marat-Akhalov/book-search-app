<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue'
import SearchBar from '@/components/SearchBar.vue';

</script>

<template>
  <TheHeader />
  <main class="main">
    <SearchBar />
  </main>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
}
</style>
