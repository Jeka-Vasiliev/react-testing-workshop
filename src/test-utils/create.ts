export type TodosTuple = { [title: string]: boolean };

export const create = {
  todo: (title: string) => create.todos(title)[0],
  todos: (...titles: string[]) =>
    create.todoWithEnabled(
      titles.reduce((acc, next) => ({ ...acc, [next]: false }), {})
    ),
  todoWithEnabled: (todos: TodosTuple) =>
    Object.entries(todos).map(([title, completed], index) => ({
      id: index,
      order: index,
      completed,
      title,
      url: title,
    })),
};
