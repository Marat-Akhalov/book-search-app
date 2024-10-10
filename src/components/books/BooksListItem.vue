<script setup lang="ts">
import type { Book } from '@/types/book';
import { toRefs } from 'vue';

const props = defineProps<{
  book: Book
}>()

// props.book.

const {
  title,
  author_name:
  author,
  cover_edition_key: cover,
  subject = ['Not specified']
} = props.book
</script>

<template>
  <li class="book__item">
    <img
      :src="`https://covers.openlibrary.org/b/olid/${cover}-M.jpg`"
      alt="Book cover"
      class="book__cover"
      width="200px"
      height="200px"
    >
    <h2 class="book__title">
      {{ title }}
    </h2>
    <span class="book__subject">
      {{ subject?.slice(0, 1)[0] }}
    </span>
    <button class="book__add-to-favorite">Add</button>
  </li>
</template>

<style scoped lang="scss"></style>
