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
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-background text-foreground">
        <DialogHeader>
          <DialogTitle>{type === "list" ? "Add New List" : "Add New Card"}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-input text-foreground"
          />
          {type === "card" && (
            <Input
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-input text-foreground"
            />
          )}
          <Button onClick={handleSubmit} disabled={!title}>
            Add
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddButton;