import { act, renderHook } from "@testing-library/react-hooks";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { useCreatingNewTodo } from "./useCreatingNewTodo";

function renderHookWithRedux<P, R>(callback: (props: P) => R) {
  return renderHook(callback, {
    wrapper: ({ children }) => (
      <Provider store={createStore((s) => s)}>{children}</Provider>
    ),
  });
}

describe("useCreatingNewTodo", () => {
  it("should change value", () => {
    const { result } = renderHookWithRedux(useCreatingNewTodo);

    act(() => {
      result.current.setTodoTitle("new todo");
    });

    expect(result.current.todoTitle).toBe("new todo");
  });
});
