export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  category: string;
  description: string;
  timestamp: number;
}
export interface Category {
  id: string;
  name: string;
  color: string;
}
