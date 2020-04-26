import { waitFor } from "@testing-library/react";

import store from ".";
import { addTodo } from "./actions";
import { getTodos } from "./selectors";

jest.mock("../api/index.ts");

describe("addTodo", () => {
  it("should add todo", async () => {
    store.dispatch(addTodo.request("hi"));

    await waitFor(() => {
      expect(getTodos(store.getState()).length).toBe(1);
    });
  });
});
