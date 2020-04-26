export const create = {
  todo: (title: string) => create.todos(title)[0],
  todos: (...titles: string[]) =>
    titles.map((title, index) => ({
      id: index,
      order: index,
      completed: false,
      title,
      url: title,
    })),
};
