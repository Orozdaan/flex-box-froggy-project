import { createSlice } from '@reduxjs/toolkit'

const initState = { showProject: false, showLevels: false }

const showLevelsSlice = createSlice({
   name: 'levels',
   initialState: initState,
   reducers: {
      toogleProject(state) {
         state.showProject = true
      },
      showLevels(state) {
         state.showLevels = true
      },
      closeLevels(state) {
         state.showLevels = false
      },
   },
})
export const projectActions = showLevelsSlice.actions

export default showLevelsSlice.reducer
