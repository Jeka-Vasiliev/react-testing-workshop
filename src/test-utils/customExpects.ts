import { waitFor, RenderResult } from "@testing-library/react";

import { getTodos } from "../store/selectors";

declare global {
  namespace jest {
    interface Matchers<R> {
      toContainTodoWithName(title: string): Promise<R>;
      toContainElementWithText(
        text: RegExp
      ): Promise<R>;
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

  async toContainElementWithText(renderResult: RenderResult, text: RegExp) {
    const el = await waitFor(() => renderResult.findByText(text));
    return {
      pass: !!el,
      message: () =>
        `Element with name ${text} ${el ? "" : "not "}found on page`,
    };
  },
});
