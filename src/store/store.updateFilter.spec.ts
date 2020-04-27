import {
  createTestableStore,
  withEnabledTodos,
} from "../test-utils/testableStore";
import { updateFilter } from "./actions";
import { getFilteredTodos } from "./selectors";

describe("updateFilter", () => {
  it.each`
    filter   | todos            | exptectedCount
    ${"ALL"} | ${["one", true]} | ${1}
  `("should return $exptectedCount todos if filter $filter", ({ filter, todos, exptectedCount }) => {
    const store = createTestableStore(withEnabledTodos(todos));

    store.dispatch(updateFilter(filter));

    expect(getFilteredTodos(store.getState())).toHaveLength(exptectedCount);
  });
});
