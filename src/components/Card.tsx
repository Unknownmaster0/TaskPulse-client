import { Card as ShadcnCard, CardContent, CardHeader, CardTitle } from "../components/ui/card";
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
    <ShadcnCard className="mb-2">
      <CardHeader>
        <CardTitle className="text-lg">{card.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm">{card.description}</p>
        <div className="mt-2 flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
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