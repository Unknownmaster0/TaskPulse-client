import BoardHeader from "../components/BoardHeader";
import ListContainer from "../components/ListContainer";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const BoardPage = () => {
  const boardData = useSelector((state: RootState) => state.board);

  return (
    <div className="min-h-screen bg-gray-200">
      <BoardHeader />
      <ListContainer lists={boardData.lists} />
    </div>
  );
};

export default BoardPage;