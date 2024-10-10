<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Book } from '@/types/book';
import TheHeader from '@/components/layout/TheHeader.vue'
import SearchBar from '@/components/SearchBar.vue';
import BooksList from '@/components/books/BooksList.vue';
import MySpinner from '@/UI/MySpinner.vue';

const isLoading = ref(false)
const hasBooks = computed(() => foundBooks.value && foundBooks.value.length > 0)

const foundBooks = ref<Book[]>([])
const searchBooks = async (searchQuery: string) => {
  isLoading.value = true;

  const resp = await fetch(`https://openlibrary.org/search.json?q=${searchQuery}`)
  if (!resp.ok) throw new Error('Failed to fetch')

  const { docs } = await resp.json()

  foundBooks.value = docs;
  isLoading.value = false;
}
</script>

<template>
  <TheHeader />
  <main class="main">
    <SearchBar @search="searchBooks" />
    <MySpinner v-if="isLoading" />
    <div v-else-if="!isLoading && !hasBooks">Failed 🫤</div>
    <BooksList
      v-else
      :books="foundBooks"
    />
  </main>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
}
</style>
