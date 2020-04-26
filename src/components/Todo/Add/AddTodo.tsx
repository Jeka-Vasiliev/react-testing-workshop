import { Input } from "antd";
import React from "react";

import { useCreatingNewTodo } from "./useCreatingNewTodo";

export const AddTodo: React.FC = () => {
  const { todoTitle, setTodoTitle, createTodo } = useCreatingNewTodo();

  return (
    <form
      onSubmit={(event) => {
        createTodo();
        event.preventDefault();
      }}
    >
      <Input
        autoFocus={true}
        type="text"
        className="form-control"
        placeholder="What needs to be done?"
        value={todoTitle}
        onChange={(event) => setTodoTitle(event.currentTarget.value)}
      />
    </form>
  );
};
