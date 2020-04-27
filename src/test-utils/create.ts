export type TodoTuble = readonly [string, boolean];

export const create = {
  todo: (title: string) => create.todos(title)[0],
  todos: (...titles: string[]) =>
    create.todoWithEnabled(...titles.map((t) => [t, false] as const)),
  todoWithEnabled: (...todos: TodoTuble[]) =>
    todos.map(([title, completed], index) => ({
      id: index,
      order: index,
      completed,
      title,
      url: title,
    })),
};
