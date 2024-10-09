import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Book } from '@/types/book'

export const useBooksStore = defineStore('books', () => {
  const favorites = ref<Book[]>([])

  const addToFavorites = (book: Book) => {
    favorites.value.push(book)
  }

  const removeFromFavorites = (book: Book) => {
    const filteredFavorites = favorites.value.filter((b) => b.key !== book.key)
    favorites.value = filteredFavorites
  }

  return { favorites, addToFavorites, removeFromFavorites }
})
