import { createAppStore } from ".";
import api from "../api";
import { asJestMock } from "../test-utils/asJestMock";
import { addTodo } from "./actions";
import { create } from "../test-utils/create";

jest.mock("../api");

describe("addTodo", () => {
  it("should add todo", async () => {
    const store = createAppStore();
    asJestMock(api.add).mockImplementationOnce(async (title: string) =>
      create.todo(title)
    );

    store.dispatch(addTodo.request("foo"));

    await expect(store).toContainTodoWithName("foo");
  });
});
