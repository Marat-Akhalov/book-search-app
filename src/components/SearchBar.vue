<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'search', searchString: string): void
}>()

const searchString = ref<string>('')
</script>

<template>
  <div class="search-bar">
    <form
      @submit.prevent="emit('search', searchString)"
      class="search-bar__form"
    >
      <label class="search-bar__label">
        <span class="search-bar__label-text visually-hidden">Search Books</span>
        <input
          v-model="searchString"
          type="text"
          class="search-bar__input"
          placeholder="Search Books"
        >
      </label>
      <button class="search-bar__submit btn-reset">
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.search-bar {
  position: relative;

  &__label {
    width: 100%;
  }

  &__input {
    border: 1px solid #000;
    border-radius: 8px;
    padding: 8px 16px;
    padding-right: 32px;
    width: 100%;
    min-height: 40px;

    &:focus-visible {
      outline: 2px solid #6098df;
    }
  }

  &__submit {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    cursor: pointer;
  }
}
</style>
