import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: [],
    isData: false,
    randomVideos: [],
  },
  reducers: {
    addVideos: (state, action) => {
      state.videos = action.payload;
    },
    toggleIsData: (state) => {
      state.isData = true;
    },
    addRandomVideos: (state, action) => {
      state.randomVideos = action.payload;
    },
  },
});
export const { addVideos, toggleIsData, addRandomVideos } = videoSlice.actions;
export default videoSlice.reducer;
