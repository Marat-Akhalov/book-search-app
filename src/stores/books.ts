import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Book } from '@/types/book'

export const useBooksStore = defineStore('books', () => {
  const foundBooks = ref<Book[]>([])
  const isLoading = ref(false)
  const hasBooks = computed(() => foundBooks.value && foundBooks.value.length > 0)

  const searchBooks = async (searchQuery: string) => {
    try {
      isLoading.value = true
      const resp = await fetch(`https://openlibrary.org/search.json?q=${searchQuery}`)
      if (!resp.ok) throw new Error('Failed to fetch')

      const { docs } = await resp.json()

      foundBooks.value = docs
    } catch (err) {
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  return { foundBooks, isLoading, hasBooks, searchBooks }
})
