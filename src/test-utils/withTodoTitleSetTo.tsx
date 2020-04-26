import { act, RenderHookResult } from "@testing-library/react-hooks";

import { useCreatingNewTodo } from "../components/Todo/Add/useCreatingNewTodo";

export function withTodoTitleSetTo(title: string) {
  return (
    rendered: RenderHookResult<undefined, ReturnType<typeof useCreatingNewTodo>>
  ) => {
    act(() => {
      rendered.result.current.setTodoTitle(title);
    });
  };
}
