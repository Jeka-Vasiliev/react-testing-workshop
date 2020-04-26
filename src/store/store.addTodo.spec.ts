import { createAppStore } from '.'
import { addTodo } from './actions'

jest.mock("../api");

describe("addTodo", () => {
  it("should add todo", async () => {
    const store = createAppStore();

    store.dispatch(addTodo.request("foo"));

    await expect(store).toContainTodoWithName("foo");
  });
});
