import {
  createTestableStore,
  withAddApiReturnAddedTodo,
} from "../test-utils/testableStore";
import { addTodo } from "./actions";

jest.mock("../api");

describe("addTodo", () => {
  it("should add todo", async () => {
    const store = createTestableStore(withAddApiReturnAddedTodo());

    store.dispatch(addTodo.request("foo"));

    await expect(store).toContainTodoWithName("foo");
  });
});
