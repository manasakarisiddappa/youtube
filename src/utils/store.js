import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import cacheReducer from "./searchSlice";
import chatReducer from "./chatSlice";
import themeReducer from "./themeSlice";
import videoReducer from "./videoSlice";
const store = configureStore({
  reducer: {
    app: appReducer,
    cacheResult: cacheReducer,
    chat: chatReducer,
    theme: themeReducer,
    video: videoReducer,
  },
});

export default store;
