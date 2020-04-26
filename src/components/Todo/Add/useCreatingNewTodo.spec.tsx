import { act } from "@testing-library/react-hooks";

import { addTodo } from "../../../store/actions";
import { renderHookConnectedToStore } from "../../../test-utils/renderHookConnectedToStore";
import { useCreatingNewTodo } from "./useCreatingNewTodo";
import { withTodoTitleSetTo } from "../../../test-utils/withTodoTitleSetTo";

describe("useCreatingNewTodo", () => {
  it("should change value", () => {
    const { result } = renderHookConnectedToStore(useCreatingNewTodo);

    act(() => {
      result.current.setTodoTitle("new todo");
    });

    expect(result.current.todoTitle).toBe("new todo");
  });

  it("should send addTodo sequest to store", () => {
    const { result, savedActions } = renderHookConnectedToStore(
      useCreatingNewTodo,
      withTodoTitleSetTo("foo")
    );

    act(() => {
      result.current.createTodo();
    });

    expect(savedActions).toEqual([addTodo.request("foo")]);
  });
});
