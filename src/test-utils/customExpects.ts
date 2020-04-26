import { waitFor } from "@testing-library/react";

import { getTodos } from "../store/selectors";

declare global {
  namespace jest {
    interface Matchers<R> {
      toContainTodoWithName(title: string): Promise<R>;
    }
  }
}

expect.extend({
  async toContainTodoWithName(store, title: string) {
    await waitFor(() => {
      const todos = getTodos(store.getState());
      expect(todos).toEqual([
        expect.objectContaining({
          title,
        }),
      ]);
    });
    return { pass: true, message: () => "" };
  },
});
