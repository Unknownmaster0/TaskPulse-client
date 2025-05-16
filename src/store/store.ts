import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./slices/boardSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    board: boardReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
