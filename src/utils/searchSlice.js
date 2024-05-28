import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "cacheResult",
  initialState: {},
  reducers: {
    cacheData: (state, action) => {
      return (state = { ...state, ...action.payload });
    },
  },
});
export const { cacheData } = searchSlice.actions;
export default searchSlice.reducer;
