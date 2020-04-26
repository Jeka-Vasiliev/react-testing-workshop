import { createAppStore } from ".";
import { addTodo } from "./actions";
import { getTodos } from "./selectors";

describe("addTodo", () => {
  it("should add todo", async () => {
    const store = createAppStore();
    const newTodo = {
      id: 1,
      order: 1,
      title: "foo",
      url: "bar",
      completed: false,
    };

    store.dispatch(addTodo.success(newTodo));

    const todos = getTodos(store.getState());
    expect(todos).toEqual([
      {
        id: 1,
        order: 1,
        title: "foo",
        url: "bar",
        completed: false,
      },
    ]);
  });
});
