import Todo from "../../types/Todo";

let id = 1;
let db: Todo[] = [];

export default {
  async add(title: string) {
    const newTodo = {
      id,
      order: id,
      title,
      url: `fake://todo/${id}`,
      completed: false,
    };
    id++;
    db = [...db, newTodo];
    return { data: newTodo };
  },
  async fetch() {
    return { data: db };
  },
  async delete(todo: Todo) {
    db = db.filter((t) => t.id !== todo.id);
  },
  async update(todo: Todo) {
    db = db.reduce((acc, next) => {
      const possiblyUpdatedNext =
        next.id === todo.id ? { ...next, todo } : next;
      return [...acc, possiblyUpdatedNext];
    }, [] as Todo[]);

    return { data: db.find((t) => t.id === todo.id) };
  },
};
