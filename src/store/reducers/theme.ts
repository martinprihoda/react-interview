import { createSlice } from '@reduxjs/toolkit'

export enum Theme {
  DARK = 'DARK',
  LIGHT = 'LIGHT'
}

export const initialState = Theme.LIGHT

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme(state) {
      return state === Theme.DARK ? Theme.LIGHT : Theme.DARK
    }
  }
})

export const { switchTheme } = themeSlice.actions

export default themeSlice.reducer
