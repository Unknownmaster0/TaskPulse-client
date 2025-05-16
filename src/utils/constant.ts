import type { BoardData } from "../types/index.ts"; //todo: learning thing -- when verbatimModuleSyntax is enabled, then type-only imports are explicitely marked as type to import. Here, BoardData is a type.

export const initialData: BoardData = {
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
