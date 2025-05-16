import Card from "./Card";
import AddButton from "./AddButton";
import type { ListType } from "../types/index.ts";

interface ListProps {
  list: ListType;
}

const List = ({ list }: ListProps) => {
  return (
    <div className="bg-gray-100 p-3 rounded-lg w-72 flex-shrink-0">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">{list.title}</h2>
      {list.cards.map((card) => (
        <Card key={card.id} listId={list.id} card={card} />
      ))}
      <AddButton label="Add Card" type="card" listId={list.id} />
    </div>
  );
};

export default List;
