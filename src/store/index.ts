import { configureStore } from '@reduxjs/toolkit'
import themeSlice, { Theme } from 'store/reducers/theme'

const store = configureStore({
  reducer: {
    theme: themeSlice
  }
})

export type AppStore = {
  theme: Theme
}

export default store
