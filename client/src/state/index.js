import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "63701cc1f032395694000009"
}

// 63701d74f03239569400002e

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode:(state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    }
  }
})

export const {setMode} = globalSlice.actions;

export default globalSlice.reducer;