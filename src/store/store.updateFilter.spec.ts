import {
  createTestableStore,
  withEnabledTodos,
} from "../test-utils/testableStore";
import { updateFilter } from "./actions";
import { getFilteredTodos } from "./selectors";

describe("updateFilter", () => {
  it("should show only filtered", () => {
    const store = createTestableStore(withEnabledTodos(["one", true]));

    store.dispatch(updateFilter("ALL"));

    expect(getFilteredTodos(store.getState())).toEqual([
      expect.objectContaining({ title: "one" }),
    ]);
  });
});
