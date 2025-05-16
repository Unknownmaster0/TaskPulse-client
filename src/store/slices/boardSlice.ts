import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { BoardData, ListType, CardType } from "../../types";

const initialState: BoardData = {
  lists: [
    {
      id: 1,
      title: "To Do",
      cards: [
        { id: 1, title: "Design UI", description: "Create wireframes" },
        { id: 2, title: "Set up API", description: "Backend integration" },
      ],
    },
    {
      id: 2,
      title: "In Progress",
      cards: [
        { id: 3, title: "Code Frontend", description: "React components" },
        { id: 4, title: "Test Features", description: "Unit tests" },
      ],
    },
    {
      id: 3,
      title: "Done",
      cards: [
        { id: 5, title: "Deploy App", description: "Live on server" },
        { id: 6, title: "Write Docs", description: "User guide" },
      ],
    },
  ],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<string>) => {
      const newList: ListType = {
        id: state.lists.length + 1,
        title: action.payload,
        cards: [],
      };
      state.lists.push(newList);
    },
    addCard: (
      state,
      action: PayloadAction<{
        listId: number;
        title: string;
        description: string;
      }>
    ) => {
      const { listId, title, description } = action.payload;
      const list = state.lists.find((list) => list.id === listId);
      if (list) {
        const newCard: CardType = {
          id: list.cards.length + 1,
          title,
          description,
        };
        list.cards.push(newCard);
      }
    },
    deleteCard: (
      state,
      action: PayloadAction<{ listId: number; cardId: number }>
    ) => {
      const { listId, cardId } = action.payload;
      const list = state.lists.find((list) => list.id === listId);
      if (list) {
        list.cards = list.cards.filter((card) => card.id !== cardId);
      }
    },
  },
});

export const { addList, addCard, deleteCard } = boardSlice.actions;
export default boardSlice.reducer;
