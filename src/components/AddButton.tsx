import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { useDispatch } from "react-redux";
import { addList, addCard } from "../store/slices/boardSlice";

interface AddButtonProps {
  label: string;
  type: "list" | "card";
  listId?: number;
}

const AddButton = ({ label, type, listId }: AddButtonProps) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (type === "list") {
      dispatch(addList(title));
    } else if (type === "card" && listId) {
      dispatch(addCard({ listId, title, description }));
    }
    setTitle("");
    setDescription("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-blue-500 dark:bg-blue-700 text-white dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-800">
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200">
        <DialogHeader>
          <DialogTitle>
            {type === "list" ? "Add New List" : "Add New Card"}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-50 dark:bg-gray-600 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-500"
          />
          {type === "card" && (
            <Input
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-gray-50 dark:bg-gray-600 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-500"
            />
          )}
          <Button
            onClick={handleSubmit}
            disabled={!title}
            className="bg-blue-500 dark:bg-blue-700 text-white dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-800"
          >
            Add
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddButton;
