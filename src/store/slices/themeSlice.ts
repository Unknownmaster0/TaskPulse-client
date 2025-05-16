import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  theme: "dark" | "bright";
}

const initialState: ThemeState = {
  theme: (localStorage.getItem("theme") as "dark" | "bright") || "dark", // Default to dark
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"dark" | "bright">) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload); // Persist to localStorage
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "bright" : "dark";
      localStorage.setItem("theme", state.theme); // Persist to localStorage
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;