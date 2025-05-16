import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { BoardData } from "../types/index";
import { initialData } from "../utils/constant";

interface BoardContextType {
  boardData: BoardData;
  setBoardData: (data: BoardData) => void;
}

export const BoardContext = createContext<BoardContextType | undefined>(
  undefined
);

interface BoardProviderProps {
  children: ReactNode;
}

export const BoardProvider = ({ children }: BoardProviderProps) => {
  const [boardData, setBoardData] = useState<BoardData>(initialData);

  return (
    <BoardContext.Provider value={{ boardData, setBoardData }}>
      {children}
    </BoardContext.Provider>
  );
};
