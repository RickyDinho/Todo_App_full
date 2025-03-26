import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Todo, Category } from "@/types/todoApiTypes";

const todoApi = createApi({
  reducerPath: "todoApi",
  tagTypes: ["todos", "categories"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://todo-app-full.glitch.me" }),
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "/todos",
      providesTags: ["todos"],
    }),
    getCategories: builder.query<Category[], void>({
      query: () => "/categories",
      providesTags: ["categories"],
    }),
  }),
});

export const { useGetTodosQuery, useGetCategoriesQuery } = todoApi;
export default todoApi;
