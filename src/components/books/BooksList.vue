<script setup lang="ts">
import type { Book } from '@/types/book';
import BooksListItem from './BooksListItem.vue';

defineProps<{
  books: Book[]
}>()
</script>

<template>
  <section class="books">
    <h2 class="books__title visually-hidden">Books List</h2>
    <ul class="books__list">
      <BooksListItem
        v-for="book in books"
        :key="book.key"
        :book="book"
      />
    </ul>
  </section>
</template>

<style scoped lang="scss"></style>
