import { Progress } from "@/components/ui/progress";
import { useGetTodosQuery, useGetCategoriesQuery } from "@/store/todoApi";

import TodoItem from "./TodoItem";

const List = () => {
  try {
    const { data: dataTodos, isLoading: isLoadingTodos } = useGetTodosQuery();
    const { data: dataCategories, isLoading: isLoadingCategories } =
      useGetCategoriesQuery();
    if (dataTodos && dataCategories && dataTodos?.length > 0) {
      return (
        <div className="flex flex-col gap-1.5">
          {dataTodos?.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              categories={dataCategories}
            ></TodoItem>
          ))}
        </div>
      );
    } else if (isLoadingTodos) {
      return <Progress value={33} />;
    }
  } catch (error) {
    console.log(error);

    throw error;
  }
};
export default List;
