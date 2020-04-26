import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../../store/actions";

export function useCreatingNewTodo() {
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState("");

  return {
    todoTitle,
    setTodoTitle,

    createTodo() {
      dispatch(addTodo.request(todoTitle));
      setTodoTitle("");
    },
  };
}
