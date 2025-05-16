import {
  Card as ShadcnCard,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import type { CardType } from "../types/index";
import { useDispatch } from "react-redux";
import { deleteCard } from "../store/slices/boardSlice";

interface CardProps {
  listId: number;
  card: CardType;
}

const Card = ({ listId, card }: CardProps) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCard({ listId, cardId: card.id }));
  };

  return (
    <ShadcnCard className="mb-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600">
      <CardHeader>
        <CardTitle className="text-lg">{card.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{card.description}</p>
        <div className="mt-2 flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="border-gray-300 dark:border-gray-500 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            Edit
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={handleDelete}
            className="text-white"
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </ShadcnCard>
  );
};

export default Card;
