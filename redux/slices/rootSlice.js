
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkTheme: ''
}

const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        setTheme(state, action) {
            state.darkTheme = action.payload;
        }
    }
})

export const { setTheme } = rootSlice.actions

export default rootSlice.reducer