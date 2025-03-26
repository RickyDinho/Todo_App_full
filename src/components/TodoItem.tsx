import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { ButtonIcon } from "./ui/buttonIcon";
import { ButtonIconEdit } from "./ui/buttonIconEdit";
import { DeleteIcon } from "lucide-react";

import { type Category, type Todo } from "@/types/todoApiTypes";
import { useState } from "react";

const TodoItem = ({
  todo,
  categories,
}: {
  todo: Todo;
  categories: Category[];
}) => {
  const [completed, setCompleted] = useState(todo.completed);
  const [open, setOpen] = useState(false);
  const category = categories.filter((cat) => cat.id === todo.category)[0];
  const colorVariants = {
    "#f59e0b": "bg-[#f59e0b40] text-[#f59e0bFF]",
    "#8b5cf6": "bg-[#8b5cf640] text-[#8b5cf6FF]",
    "#10b981": "bg-[#10b98140] text-[#10b981FF]",
    "#3b82f6": "bg-[#3b82f640] text-[#3b82f6FF]",
    "#ef4444": "bg-[#ef444440] text-[#ef4444FF]",
  };

  return (
    <div className="border border-gray-300 border-solid rounded-md flex items-center justify-between px-2 py-4">
      <div className="flex items-center gap-2">
        <Checkbox
          onClick={() => setCompleted(!completed)}
          checked={completed}
          className="border-black"
        />
        <p className={completed ? "line-through" : ""}>{todo.text}</p>
      </div>
      <div>
        <Badge
          variant="outline"
          className={`${
            colorVariants[category.color as keyof typeof colorVariants]
          } font-bold`}
        >
          {category.name}
        </Badge>
        <ButtonIcon open={open} setOpen={setOpen} />
        <ButtonIconEdit open={open} setOpen={setOpen} />
        <Button variant="destructive" size="icon" onClick={null}>
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};
export default TodoItem;
