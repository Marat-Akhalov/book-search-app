<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';
import type { Book } from '@/types/book';
import TheHeader from '@/components/layout/TheHeader.vue'
import SearchBar from '@/components/SearchBar.vue';
import BooksList from '@/components/books/BooksList.vue';
import MySpinner from '@/UI/MySpinner.vue';
import { useBooksStore } from '@/stores/books';
import { storeToRefs } from 'pinia';

const books = useBooksStore();
const { foundBooks, isLoading, hasBooks } = storeToRefs(books)
const { searchBooks } = books
</script>

<template>
  <TheHeader />
  <main class="main">
    <SearchBar
      @search="searchBooks"
      class="search-bar"
    />
    <MySpinner v-if="isLoading" />
    <div v-else-if="!isLoading && !hasBooks">
      Сouldn't find any books that match the search terms
    </div>
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

.search-bar {
  margin-bottom: 16px;
}
</style>
