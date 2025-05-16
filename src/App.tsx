import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import BoardPage from "./pages/BoardPage";
import type { AppDispatch, RootState } from "./store/store";
import { useEffect } from "react";
import { Button } from "./components/ui/button";
import { toggleTheme } from "./store/slices/themeSlice";
import { Moon, Sun } from "lucide-react";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("bright");
    }
  }, [theme]);

  return (
    <div>
      <Button
        onClick={() => dispatch(toggleTheme())}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>
      <BoardPage />
    </div>
  );
}

export default App;

/*
import BoardPage from "./pages/BoardPage";
import "./app.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store/store";
import { toggleTheme } from "./store/slices/themeSlice";
import { Button } from "./components/ui/button";
import { Sun, Moon } from "lucide-react"; // Icons for the toggle button

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.theme.theme);

  // Apply the theme to the <html> element
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div>
      <Button
        onClick={() => dispatch(toggleTheme())}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      >
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
      <BoardPage />
    </div>
  );
};

export default App;
 */
