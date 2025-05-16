export interface CardType {
  id: number;
  title: string;
  description: string;
}

export interface ListType {
  id: number;
  title: string;
  cards: CardType[];
}

export interface BoardData {
  lists: ListType[];
}