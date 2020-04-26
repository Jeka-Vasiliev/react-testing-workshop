import axios from "axios";
import Todo from "../types/Todo";

const baseUrl = "https://todobackend.apphb.com/todo-backend";

export default {
  async add(title: string) {
    const { data } = await axios.post<Todo>(baseUrl, {
      title,
      completed: false,
    });
    return data;
  },
  async fetch() {
    const { data } = await axios.get<Todo[]>(baseUrl);
    return data;
  },
  async delete(todo: Todo) {
    await axios.delete(todo.url);
  },
  async update(todo: Todo) {
    const { data } = await axios.patch<Todo>(todo.url, todo);
    return data;
  },
};
