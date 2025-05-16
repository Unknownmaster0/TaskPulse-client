import List from "./List";
import AddButton from "./AddButton";
import type { ListType } from "../types";

interface ListContainerProps {
  lists: ListType[];
}

const ListContainer = ({ lists }: ListContainerProps) => {
  return (
    <div className="flex space-x-4 p-4 overflow-x-auto bg-gray-100 dark:bg-gray-900">
      {lists.map((list) => (
        <List key={list.id} list={list} />
      ))}
      <div className="w-72 flex-shrink-0">
        <AddButton label="Add List" type="list" />
      </div>
    </div>
  );
};

export default ListContainer;
