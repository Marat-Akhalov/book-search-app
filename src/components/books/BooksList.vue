<script setup lang="ts">
import type { Book } from '@/types/book';

defineProps<{
  books: Book[]
}>()
</script>

<template>
  <section class="books">
    <h2 class="books__title visually-hidden">Books List</h2>
    <ul class="books__list">

    </ul>
  </section>
</template>

<style scoped lang="scss"></style>
