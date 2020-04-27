import {
  createTestableStore,
  withEnabledTodos,
} from "../test-utils/testableStore";
import { updateFilter } from "./actions";
import { getFilteredTodos } from "./selectors";

describe("updateFilter", () => {
  it.each`
    filter         | todos                        | exptectedCount
    ${"ALL"}       | ${{ one: true, two: false }} | ${2}
    ${"ACTIVE"}    | ${{ one: true, two: false }} | ${1}
    ${"ACTIVE"}    | ${{ one: true }}             | ${0}
    ${"COMPLETED"} | ${{ one: true, two: false }} | ${1}
  `(
    "should return $exptectedCount todos if filter $filter",
    ({ filter, todos, exptectedCount }) => {
      const store = createTestableStore(withEnabledTodos(todos));

      store.dispatch(updateFilter(filter));

      expect(getFilteredTodos(store.getState())).toHaveLength(exptectedCount);
    }
  );
});
