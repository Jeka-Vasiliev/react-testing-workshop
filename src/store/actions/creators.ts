import { createAction, createAsyncAction } from "typesafe-actions";

import Todo from "../../types/Todo";

export const addTodo = createAsyncAction(
  "ADD_TODO_REQUEST",
  "ADD_TODO_SUCCESS",
  "ADD_TODO_FAILURE"
)<string, Todo, Error>();

export const deleteTodo = createAsyncAction(
  "DELETE_TODO_REQUEST",
  "DELETE_TODO_SUCCESS",
  "DELETE_TODO_FAILURE"
)<Todo, Todo, Error>();

export const toggleTodo = createAsyncAction(
  "TOGGLE_TODO_REQUEST",
  "TOGGLE_TODO_SUCCESS",
  "TOGGLE_TODO_FAILURE"
)<Todo, Todo, Error>();

export const loadTodos = createAsyncAction(
  "LOAD_TODOS_REQUEST",
  "LOAD_TODOS_SUCCESS",
  "LOAD_TODOS_FAILURE"
)<undefined, Todo[], Error>();

export const updateFilter = createAction("UPDATE_FILTER")<
  "ALL" | "ACTIVE" | "COMPLITED"
>();
